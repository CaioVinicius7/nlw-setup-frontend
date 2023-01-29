import { Header } from "./components/Header";

import "./styles/global.css";

export function App() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<main className="w-full max-w-5xl px-6 flex flex-col gap-16">
				<Header />
			</main>
		</div>
	);
}
