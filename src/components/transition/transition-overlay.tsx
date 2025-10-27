"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Services from "@/components/services/services";
import OurProcess from "@/components/process/our-process";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";
import SuccessStories from "@/components/success-stories/success-stories";
import FAQ from "@/components/faq/faq";
import CTASection from "@/components/cta/cta-section";
import Footer from "@/components/footer/footer";

gsap.registerPlugin(ScrollTrigger);

const TransitionOverlay: React.FC = () => {
	useEffect(() => {
		// Set initial body background
		gsap.set("body", { backgroundColor: "#0f172a" });

		// Smooth bidirectional background color transitions
		ScrollTrigger.create({
			trigger: ".services-section",
			start: "top 70%",
			end: "top 30%",
			onEnter: () => {
				gsap.to("body", {
					backgroundColor: "#ffffff",
					duration: 1.5,
					ease: "power2.out",
				});
			},
			onLeaveBack: () => {
				gsap.to("body", {
					backgroundColor: "#0f172a",
					duration: 1.5,
					ease: "power2.out",
				});
			},
		});

		ScrollTrigger.create({
			trigger: ".success-stories-section",
			start: "top 70%",
			end: "top 30%",
			onEnter: () => {
				gsap.to("body", {
					backgroundColor: "#1e293b",
					duration: 1.5,
					ease: "power2.out",
				});
			},
			onLeaveBack: () => {
				gsap.to("body", {
					backgroundColor: "#ffffff",
					duration: 1.5,
					ease: "power2.out",
				});
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<>
			<Services />
			<OurProcess />
			<WhyChooseUs />
			<SuccessStories />
			<FAQ />
			<CTASection />
			<Footer />
		</>
	);
};

export default TransitionOverlay;
