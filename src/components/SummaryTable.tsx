import { HabitDay } from "./HabitDay";

import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7; // 18 weeks

const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
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
				{summaryDates.map((date) => (
					<HabitDay
						key={date.toString()}
						amount={5}
						completed={Math.round(Math.random() * 5)}
					/>
				))}

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
