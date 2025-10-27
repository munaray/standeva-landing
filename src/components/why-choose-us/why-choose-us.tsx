"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
	ArrowRight,
	Rocket,
	Building2,
	User,
	Code,
	GraduationCap,
	Zap,
} from "lucide-react";

const useCases = [
	{
		id: "startups",
		icon: Rocket,
		title: "For Startups",
		subtitle: "MVP Development & Rapid Prototyping",
		description:
			"Standeva empowers startups to launch AI-powered features quickly and efficiently, helping you validate ideas and scale fast.",
		features: [
			"Rapid MVP development with modern frameworks",
			"Cost-effective solutions for early-stage companies",
			"Scalable architecture that grows with your business",
			"Expert guidance on technology stack selection",
		],
		buttonText: "Start Your MVP",
		image: "🚀",
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		id: "enterprises",
		icon: Building2,
		title: "For Enterprises",
		subtitle: "Scalable Solutions & Team Training",
		description:
			"We help established companies modernize their tech stack and upskill their development teams for the AI-driven future.",
		features: [
			"Enterprise-grade solutions with high availability",
			"Comprehensive team training and knowledge transfer",
			"Integration with existing systems and workflows",
			"Ongoing support and maintenance services",
		],
		buttonText: "Scale Your Team",
		image: "🏢",
		gradient: "from-purple-500 to-pink-500",
	},
	{
		id: "individuals",
		icon: User,
		title: "For Individuals",
		subtitle: "Skill Development & Career Advancement",
		description:
			"Whether you're starting your coding journey or looking to specialize in AI/ML, our programs accelerate your career growth.",
		features: [
			"Structured learning paths from beginner to expert",
			"Hands-on projects and portfolio development",
			"Industry-relevant skills and certifications",
			"Career guidance and job placement assistance",
		],
		buttonText: "Advance Your Career",
		image: "👨‍💻",
		gradient: "from-green-500 to-emerald-500",
	},
];

const UseCaseItem: React.FC<{
	useCase: (typeof useCases)[0];
	isReversed: boolean;
	leftSlideVariants: Variants;
	rightSlideVariants: Variants;
}> = ({ useCase, isReversed, leftSlideVariants, rightSlideVariants }) => {
	const { ref: caseRef, isInView: caseInView } = useScrollAnimation({
		threshold: 0.3,
		triggerOnce: false,
	});
	const IconComponent = useCase.icon;

	return (
		<motion.div
			ref={caseRef}
			className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
				isReversed ? "lg:flex-row-reverse" : ""
			}`}
			variants={isReversed ? rightSlideVariants : leftSlideVariants}
			initial="hidden"
			animate={caseInView ? "visible" : "hidden"}>
			{/* Content Side */}
			<div className="flex-1 space-y-4 sm:space-y-6">
				<div>
					<div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
						<div
							className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br ${useCase.gradient} flex items-center justify-center shadow-lg`}>
							<IconComponent
								size={20}
								className="text-white sm:w-6 sm:h-6"
							/>
						</div>
						<div>
							<h3 className="text-xl sm:text-2xl font-bold text-slate-900">
								{useCase.title}
							</h3>
							<p className="text-base sm:text-lg text-slate-600">
								{useCase.subtitle}
							</p>
						</div>
					</div>

					<p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
						{useCase.description}
					</p>
				</div>

				{/* Features List */}
				<div className="space-y-2 sm:space-y-3">
					{useCase.features.map((feature, featureIndex) => (
						<div
							key={featureIndex}
							className="flex items-start gap-3">
							<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
								<div className="w-2 h-2 bg-green-500 rounded-full" />
							</div>
							<p className="text-sm sm:text-base text-slate-700">
								{feature}
							</p>
						</div>
					))}
				</div>

				{/* Button */}
				<motion.button
					className={`inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-linear-to-r ${useCase.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:text-base`}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.98 }}>
					{useCase.buttonText}
					<ArrowRight size={16} />
				</motion.button>
			</div>

			{/* Visual Side */}
			<div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg">
				<div
					className={`relative p-4 sm:p-6 lg:p-8 bg-linear-to-br ${useCase.gradient} rounded-2xl shadow-xl`}>
					{/* Main Image/Icon */}
					<div className="text-center mb-4 sm:mb-6">
						<div className="text-5xl sm:text-6xl lg:text-8xl mb-3 sm:mb-4">
							{useCase.image}
						</div>
						<div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
							<IconComponent
								size={24}
								className="text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8"
							/>
						</div>
					</div>

					{/* Floating Elements */}
					<div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
						<Code
							size={16}
							className="text-white sm:w-5 sm:h-5 lg:w-5 lg:h-5"
						/>
					</div>

					<div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
						{useCase.id === "individuals" ? (
							<GraduationCap
								size={16}
								className="text-white sm:w-5 sm:h-5 lg:w-5 lg:h-5"
							/>
						) : (
							<Zap
								size={16}
								className="text-white sm:w-5 sm:h-5 lg:w-5 lg:h-5"
							/>
						)}
					</div>

					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full" />
						<div className="absolute top-8 right-6 sm:top-16 sm:right-12 w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full" />
						<div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-white rounded-full" />
						<div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full" />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const WhyChooseUs: React.FC = () => {
	const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
		threshold: 0.3,
		triggerOnce: false,
	});

	const headerVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const leftSlideVariants: Variants = {
		hidden: { opacity: 0, x: -80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const rightSlideVariants: Variants = {
		hidden: { opacity: 0, x: 80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<section className="why-choose-us-section py-20 bg-linear-to-br from-slate-50 to-blue-50">
			<div className="container mx-auto px-6">
				{/* Header */}
				<motion.div
					ref={headerRef}
					className="text-center mb-16"
					variants={headerVariants}
					initial="hidden"
					animate={headerInView ? "visible" : "hidden"}>
					<p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
						MULTIPLE USE CASES
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
						When to choose Standeva
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						From startups building their first product to
						enterprises scaling their teams, we provide tailored
						solutions for every stage of your journey
					</p>
				</motion.div>

				{/* Use Cases */}
				<div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
					{useCases.map((useCase, index) => {
						const isReversed = index % 2 === 1;

						return (
							<UseCaseItem
								key={useCase.id}
								useCase={useCase}
								isReversed={isReversed}
								leftSlideVariants={leftSlideVariants}
								rightSlideVariants={rightSlideVariants}
							/>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12 sm:mt-16">
					<div className="p-6 sm:p-8 bg-linear-to-r from-slate-50 to-blue-50 rounded-2xl max-w-4xl mx-auto">
						<h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
							Ready to get started?
						</h3>
						<p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
							Whatever your goals, we have the expertise and
							programs to help you succeed.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
							<button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
								Start a Project
							</button>
							<button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-green-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
								Explore Training
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
