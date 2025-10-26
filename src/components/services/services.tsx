"use client";

import React from "react";
import {
	ArrowRight,
	Code,
	GraduationCap,
	Smartphone,
	Brain,
	Globe,
	Users,
} from "lucide-react";

const servicesData = [
	{
		id: "development",
		badge: "Build it yourself...",
		title: "Development Services",
		description:
			"For businesses who want custom software solutions built by experienced developers:",
		features: [
			{
				icon: Globe,
				text: "Web Development with React, Next.js, and modern frameworks",
			},
			{
				icon: Smartphone,
				text: "Mobile Development for iOS and Android platforms",
			},
			{
				icon: Brain,
				text: "AI/ML Integration with cutting-edge models and APIs",
			},
			{
				icon: Code,
				text: "Custom Software Solutions tailored to your business needs",
			},
		],
		buttonText: "Start Your Project",
		buttonColor: "#3b82f6",
	},
	{
		id: "training",
		badge: "...or let us train your team",
		title: "Training Programs",
		description:
			"For companies and individuals who want to build internal development capabilities:",
		features: [
			{
				icon: GraduationCap,
				text: "React & Next.js courses from beginner to advanced level",
			},
			{
				icon: Brain,
				text: "Python for AI/ML training with hands-on projects",
			},
			{
				icon: Users,
				text: "Full-Stack Development bootcamps and workshops",
			},
			{
				icon: Code,
				text: "Corporate team training with customized curriculum",
			},
		],
		buttonText: "Explore Training",
		buttonColor: "#10b981",
	},
];

const Services: React.FC = () => {
	return (
		<section className="relative py-20 bg-linear-to-br from-slate-50 to-blue-50 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-10 left-5 w-48 h-48 bg-gradient-radial from-blue-100/30 to-transparent rounded-full pointer-events-none" />
			<div className="absolute top-20 right-10 w-36 h-36 bg-gradient-radial from-purple-100/20 to-transparent rounded-full pointer-events-none" />
			<div className="absolute bottom-15 left-15 w-32 h-32 bg-gradient-radial from-green-100/15 to-transparent rounded-full pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
						SOLUTIONS
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
						Got specific needs? We're here to help
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Choose the approach that fits your development style and
						business requirements
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{servicesData.map((service, index) => (
						<div
							key={service.id}
							className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
							{/* Card Header */}
							<div className="mb-8">
								<div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
									{service.badge}
								</div>
								<h3 className="text-2xl font-bold text-slate-900 mb-4">
									{service.title}
								</h3>
								<p className="text-slate-600 leading-relaxed">
									{service.description}
								</p>
							</div>

							{/* Features List */}
							<div className="space-y-4 mb-8">
								{service.features.map(
									(feature, featureIndex) => {
										const IconComponent = feature.icon;
										return (
											<div
												key={featureIndex}
												className="flex items-start gap-3">
												<div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
													<IconComponent
														size={16}
														className="text-slate-600"
													/>
												</div>
												<p className="text-slate-700 leading-relaxed">
													{feature.text}
												</p>
											</div>
										);
									}
								)}
							</div>

							{/* Button */}
							<button
								className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
								style={{
									backgroundColor: service.buttonColor,
								}}>
								{service.buttonText}
								<ArrowRight size={16} />
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
