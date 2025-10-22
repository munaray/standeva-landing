import Header from "@/components/header/header";
import Hero from "@/components/hero/hero.bac";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
			</main>
		</div>
	);
}
