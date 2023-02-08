import { Check } from "phosphor-react";

import { Checkbox } from "./Checkbox";

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
	return (
		<form className="w-full flex flex-col mt-6">
			<label htmlFor="title" className="font-semibold leading-tight">
				Qual seu comprometimento?
			</label>

			<input
				className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
				type="text"
				id="title"
				placeholder="ex.: exercícios, dormir bem, etc..."
				autoFocus
			/>

			<label htmlFor="" className="font-semibold leading-tight mt-4">
				Qual a recorrência?
			</label>

			<div className="flex flex-col gap-2 mt-3">
				{availableWeekDays.map((weekDay) => (
					<Checkbox key={weekDay} title={weekDay} variant="modal" />
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
