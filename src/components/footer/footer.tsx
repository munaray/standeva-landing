"use client";

import React from "react";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const footerSections = [
	{
		title: "Platform",
		links: [
			{ name: "Development Services", href: "#services" },
			{ name: "Training Programs", href: "#training" },
			{ name: "Our Process", href: "#process" },
			{ name: "Pricing", href: "#pricing" },
		],
	},
	{
		title: "Solutions",
		links: [
			{ name: "Web Development", href: "#web-dev" },
			{ name: "Mobile Development", href: "#mobile-dev" },
			{ name: "AI/ML Integration", href: "#ai-ml" },
			{ name: "Team Training", href: "#team-training" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Blog", href: "/blog" },
			{ name: "Case Studies", href: "/case-studies" },
			{ name: "Documentation", href: "/docs" },
			{ name: "Success Stories", href: "#success-stories" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", href: "/about" },
			{ name: "Contact", href: "/contact" },
			{ name: "Careers", href: "/careers" },
			{ name: "Terms & Conditions", href: "/terms" },
			{ name: "Privacy Notice", href: "/privacy" },
		],
	},
];

const Footer: React.FC = () => {
	return (
		<footer className="bg-slate-900 text-white">
			<div className="container mx-auto px-6 py-16">
				{/* Main Footer Content */}
				<div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-3 mb-6">
							<div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">
									S
								</span>
							</div>
							<span className="text-2xl font-bold">Standeva</span>
						</div>

						<p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
							Empowering businesses with custom development
							solutions and comprehensive training programs.
							Building the future, one project at a time.
						</p>

						{/* Contact Info */}
						<div className="space-y-3 mb-6">
							<div className="flex items-center gap-3 text-slate-400">
								<Mail size={16} />
								<span>hello@standeva.com</span>
							</div>
							<div className="flex items-center gap-3 text-slate-400">
								<Phone size={16} />
								<span>+1 (555) 123-4567</span>
							</div>
							<div className="flex items-center gap-3 text-slate-400">
								<MapPin size={16} />
								<span>Lagos, Nigeria</span>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-4">
							<a
								href="#"
								className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<Github size={18} />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<Twitter size={18} />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<Linkedin size={18} />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<Mail size={18} />
							</a>
						</div>
					</div>

					{/* Footer Links */}
					{footerSections.map((section, index) => (
						<div key={index}>
							<h3 className="font-semibold text-white mb-4">
								{section.title}
							</h3>
							<ul className="space-y-3">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a
											href={link.href}
											className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Newsletter Section */}
				<div className="border-t border-slate-800 pt-12 mb-8">
					<div className="max-w-md">
						<h3 className="text-xl font-semibold mb-4">
							Stay Updated
						</h3>
						<p className="text-slate-400 mb-4">
							Get the latest updates on our training programs and
							development insights.
						</p>
						<div className="flex gap-3">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
							/>
							<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-slate-400 text-sm">
						© 2024 Standeva. All rights reserved.
					</p>

					{/* Product Hunt Badge Placeholder */}
					{/* <div className="mt-4 md:mt-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />
                ))}
              </div>
              <span className="text-sm text-slate-300">(4.9) based on 40+ reviews</span>
            </div>
          </div> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
