import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";

import { NewHabitModal } from "./NewHabitModal";

import logoImage from "../assets/logo.svg";

export function Header() {
	function buttonClicked() {}

	return (
		<header className="w-full max-w-3xl mx-auto flex items-center justify-between">
			<img src={logoImage} alt="Habits" />

			<Dialog.Root>
				<Dialog.Trigger
					className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
					onClick={buttonClicked}
				>
					<Plus size={20} className="text-violet-500" />
					Novo Hábito
				</Dialog.Trigger>

				<NewHabitModal />
			</Dialog.Root>
		</header>
	);
}
