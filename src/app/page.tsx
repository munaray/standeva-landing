import Header from "@/components/header/header";
import Hero from "@/components/hero/hero.bac";
import TransitionOverlay from "@/components/transition/transition-overlay";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<TransitionOverlay />
			</main>
		</div>
	);
}
