import Header from "@/components/header/header";
import Hero from "@/components/hero/hero.bac";
import Services from "@/components/services/services";
// import TrainingPrograms from "@/components/training/training-programs";
import OurProcess from "@/components/process/our-process";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";
import SuccessStories from "@/components/success-stories/success-stories";
import FAQ from "@/components/faq/faq";
import CTASection from "@/components/cta/cta-section";
import Footer from "@/components/footer/footer";
// import Partners from "@/components/partners/partners";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Services />
				{/* <TrainingPrograms /> */}
				<OurProcess />
				<WhyChooseUs />
				<SuccessStories />
				<FAQ />
				<CTASection />
				{/* <Partners /> */}
			</main>
			<Footer />
		</div>
	);
}
