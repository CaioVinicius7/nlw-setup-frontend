import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

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
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
			</div>
		</div>
	);
}
