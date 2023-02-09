import { FormEvent, useState } from "react";
import { Check } from "phosphor-react";

import { Checkbox } from "./Checkbox";

import { api } from "../lib/axios";

const availableWeekDays = [
	"Domingo",
	"Segunda-feira",
	"Terça-feira",
	"Quarta-feira",
	"Quinta-feira",
	"Sexta-feira",
	"Sábado"
];

export function NewHabitForm() {
	const [title, setTitle] = useState("");
	const [weekDays, setWeekDays] = useState<number[]>([]);

	async function createNewHabit(event: FormEvent) {
		event.preventDefault();

		if (!title || !weekDays.length) {
			return;
		}

		await api.post("/habits", {
			title,
			weekDays
		});

		alert("Hábito criado com sucesso!");
	}

	function handleToggleWeekDay(weekDay: number) {
		try {
			if (weekDays.includes(weekDay)) {
				const weekDayWithRemovedOne = weekDays.filter((day) => day !== weekDay);

				setWeekDays(weekDayWithRemovedOne);
			} else {
				const weekDaysWithAddedOne = [...weekDays, weekDay];

				setWeekDays(weekDaysWithAddedOne);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
			<label htmlFor="title" className="font-semibold leading-tight">
				Qual seu comprometimento?
			</label>

			<input
				className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
				type="text"
				id="title"
				placeholder="ex.: exercícios, dormir bem, etc..."
				onChange={(e) => setTitle(e.target.value)}
				autoFocus
			/>

			<label htmlFor="" className="font-semibold leading-tight mt-4">
				Qual a recorrência?
			</label>

			<div className="flex flex-col gap-2 mt-3">
				{availableWeekDays.map((weekDay, index) => (
					<Checkbox
						key={weekDay}
						title={weekDay}
						variant="modal"
						onCheckedChange={() => handleToggleWeekDay(index)}
					/>
				))}
			</div>

			<button
				type="submit"
				className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors"
			>
				<Check size={20} weight="bold" /> Confirmar
			</button>
		</form>
	);
}
