import clsx from "clsx";
import { Check } from "phosphor-react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import type { CheckboxProps as RadixCheckboxProps } from "@radix-ui/react-checkbox";

interface CheckboxProps extends RadixCheckboxProps {
	title: string;
	variant: "popover" | "modal";
}

export function Checkbox({ title, variant, ...props }: CheckboxProps) {
	const isPopoverVariant = variant === "popover";

	return (
		<RadixCheckbox.Root className="flex items-center gap-3 group" {...props}>
			<div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
				<RadixCheckbox.Indicator>
					<Check size={20} className="text-white" />
				</RadixCheckbox.Indicator>
			</div>

			<span
				className={clsx(" text-white leading-tight", {
					"font-semibold text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400":
						isPopoverVariant
				})}
			>
				{title}
			</span>
		</RadixCheckbox.Root>
	);
}
