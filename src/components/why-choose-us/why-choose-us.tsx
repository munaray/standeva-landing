"use client";

import React from "react";
import { motion } from "framer-motion";
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
	useCase: typeof useCases[0];
	isReversed: boolean;
	leftSlideVariants: any;
	rightSlideVariants: any;
}> = ({ useCase, isReversed, leftSlideVariants, rightSlideVariants }) => {
	const { ref: caseRef, isInView: caseInView } = useScrollAnimation({
		threshold: 0.3,
		triggerOnce: false
	});
	const IconComponent = useCase.icon;

	return (
		<motion.div
			ref={caseRef}
			className={`flex flex-col lg:flex-row items-center gap-12 ${
				isReversed ? "lg:flex-row-reverse" : ""
			}`}
			variants={isReversed ? rightSlideVariants : leftSlideVariants}
			initial="hidden"
			animate={caseInView ? "visible" : "hidden"}>
			{/* Content Side */}
			<div className="flex-1 space-y-6">
				<div>
					<div className="flex items-center gap-4 mb-4">
						<div
							className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-lg`}>
							<IconComponent
								size={24}
								className="text-white"
							/>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-slate-900">
								{useCase.title}
							</h3>
							<p className="text-lg text-slate-600">
								{useCase.subtitle}
							</p>
						</div>
					</div>

					<p className="text-slate-600 leading-relaxed text-lg">
						{useCase.description}
					</p>
				</div>

				{/* Features List */}
				<div className="space-y-3">
					{useCase.features.map(
						(feature, featureIndex) => (
							<div
								key={featureIndex}
								className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="w-2 h-2 bg-green-500 rounded-full" />
								</div>
								<p className="text-slate-700">
									{feature}
								</p>
							</div>
						)
					)}
				</div>

				{/* Button */}
				<motion.button
					className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${useCase.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.98 }}>
					{useCase.buttonText}
					<ArrowRight size={16} />
				</motion.button>
			</div>

			{/* Visual Side */}
			<div className="flex-1 max-w-lg">
				<div
					className={`relative p-8 bg-gradient-to-br ${useCase.gradient} rounded-2xl shadow-xl`}>
					{/* Main Image/Icon */}
					<div className="text-center mb-6">
						<div className="text-8xl mb-4">
							{useCase.image}
						</div>
						<div className="w-16 h-16 mx-auto bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
							<IconComponent
								size={32}
								className="text-white"
							/>
						</div>
					</div>

					{/* Floating Elements */}
					<div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
						<Code
							size={20}
							className="text-white"
						/>
					</div>

					<div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
						{useCase.id === "individuals" ? (
							<GraduationCap
								size={20}
								className="text-white"
							/>
						) : (
							<Zap
								size={20}
								className="text-white"
							/>
						)}
					</div>

					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full" />
						<div className="absolute top-16 right-12 w-2 h-2 bg-white rounded-full" />
						<div className="absolute bottom-12 left-12 w-3 h-3 bg-white rounded-full" />
						<div className="absolute bottom-8 right-8 w-4 h-4 bg-white rounded-full" />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const WhyChooseUs: React.FC = () => {
	const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
		threshold: 0.3,
		triggerOnce: false
	});

	const headerVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const leftSlideVariants = {
		hidden: { opacity: 0, x: -80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const rightSlideVariants = {
		hidden: { opacity: 0, x: 80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="why-choose-us-section py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
				<div className="space-y-12 max-w-6xl mx-auto">
					{useCases.map((useCase, index) => {
						const IconComponent = useCase.icon;
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
				<div className="text-center mt-16">
					<div className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl max-w-4xl mx-auto">
						<h3 className="text-2xl font-bold text-slate-900 mb-4">
							Ready to get started?
						</h3>
						<p className="text-slate-600 mb-6">
							Whatever your goals, we have the expertise and
							programs to help you succeed.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
								Start a Project
							</button>
							<button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
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
