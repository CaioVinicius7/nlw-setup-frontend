import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { Checkbox } from "./Checkbox";

import { api } from "../lib/axios";

interface HabitsInfo {
	possibleHabits: {
		id: string;
		title: string;
		created_at: string;
	}[];
	completedHabits: string[];
}

interface HabitsListProps {
	date: Date;
}

export function HabitsList({ date }: HabitsListProps) {
	const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

	async function fetchHabits() {
		const { data } = await api.get("/day", {
			params: {
				date: date.toISOString()
			}
		});

		setHabitsInfo(data);
	}

	async function handleToggleHabit(habitId: string) {
		await api.patch(`/habits/${habitId}/toggle`);

		const isHabitAlreadyCompleted =
			habitsInfo?.completedHabits.includes(habitId);

		let completedHabits: string[] = [];

		if (isHabitAlreadyCompleted) {
			completedHabits = habitsInfo!.completedHabits.filter((id) => {
				return id !== habitId;
			});
		} else {
			completedHabits = [...habitsInfo!.completedHabits, habitId];
		}

		setHabitsInfo({
			possibleHabits: habitsInfo!.possibleHabits,
			completedHabits
		});
	}

	const isDateInPast = dayjs(date).endOf("day").isBefore(new Date());

	useEffect(() => {
		fetchHabits();
	}, []);

	return (
		<div className="mt-6 flex flex-col gap-3">
			{habitsInfo?.possibleHabits.map((habit) => {
				const habitIsCompleted = habitsInfo.completedHabits.includes(habit.id);

				return (
					<Checkbox
						key={habit.id}
						title={habit.title}
						onCheckedChange={() => handleToggleHabit(habit.id)}
						defaultChecked={habitIsCompleted}
						disabled={isDateInPast}
						variant="popover"
					/>
				);
			})}
		</div>
	);
}
