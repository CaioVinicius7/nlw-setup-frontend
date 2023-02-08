import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { HabitDay } from "./HabitDay";

import { api } from "../lib/axios";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7; // 18 weeks

const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

interface Summary {
	id: string;
	date: string;
	completed: number;
	amount: number;
}

export function SummaryTable() {
	const [summary, setSummary] = useState<Summary[]>([]);

	async function fetchSummary() {
		try {
			const { data } = await api.get("/summary");

			setSummary(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchSummary();
	}, []);

	return (
		<div className="w-full flex">
			<div className="grid grid-rows-7 grid-flow-row">
				{weekDays.map((weekDay, i) => (
					<div
						key={`${weekDay}-${i}`}
						className="text-zinc-400 text-xl font-bold w-10 h-10 flex justify-center items-center"
					>
						{weekDay}
					</div>
				))}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{summaryDates.map((date) => {
					const dayInSummary = summary.find((day) => {
						return dayjs(date).isSame(day.date, "day");
					});

					return (
						<HabitDay
							key={date.toString()}
							date={date}
							amount={dayInSummary?.amount}
							completed={dayInSummary?.completed}
						/>
					);
				})}

				{amountOfDaysToFill > 0 &&
					Array.from({ length: amountOfDaysToFill }).map((_, i) => {
						return (
							<div
								key={i}
								className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
							/>
						);
					})}
			</div>
		</div>
	);
}
