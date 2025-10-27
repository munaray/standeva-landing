'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    id: 1,
    question: "Standeva looks so cool, can I start using it straight away?",
    answer: "Absolutely! For development services, we can start with a free consultation to understand your needs. For training programs, you can enroll immediately in our available courses. We offer flexible engagement models to match your timeline and requirements."
  },
  {
    id: 2,
    question: "Do I need prior experience to join your training programs?",
    answer: "Not necessarily! We offer programs for all skill levels. Our React Fundamentals course is perfect for beginners, while our Advanced Next.js and Full-Stack bootcamps are designed for those with some development experience. We'll help you choose the right starting point."
  },
  {
    id: 3,
    question: "And how does your pricing work for development projects?",
    answer: "Our pricing varies based on project scope, complexity, and timeline. We offer both fixed-price projects for well-defined requirements and hourly consulting for ongoing development needs. All projects start with a free consultation and detailed proposal."
  },
  {
    id: 4,
    question: "How is my project data handled and secured?",
    answer: "Security is our top priority. We follow industry best practices including secure coding standards, encrypted data transmission, regular security audits, and compliance with data protection regulations. All client data is handled with strict confidentiality agreements."
  },
  {
    id: 5,
    question: "What can I expect in terms of support and maintenance?",
    answer: "We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. Our support packages range from basic maintenance to full ongoing development partnerships based on your needs."
  },
  {
    id: 6,
    question: "But ultimately, what's the point of choosing Standeva over other agencies?",
    answer: "Standeva combines development expertise with training capabilities, ensuring not just great software but also knowledge transfer. We focus on modern tech stacks, AI integration, and building solutions that scale. Plus, we can train your team to maintain and extend what we build together."
  }
]

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  })
  const { ref: faqRef, isInView: faqInView } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: false
  })

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
		prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
	);
  }

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

  const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
  };

  const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
  };

  return (
		<section className="faq-section py-20 bg-gray-900 text-white">
			<div className="container mx-auto px-6">
				{/* Header */}
				<motion.div
					ref={headerRef}
					className="text-center mb-16"
					variants={headerVariants}
					initial="hidden"
					animate={headerInView ? "visible" : "hidden"}>
					<p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-4">
						FAQ
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Questions we&apos;re usually asked
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Got questions about our development services or training
						programs? We&apos;ve compiled answers to the most common
						inquiries.
					</p>
				</motion.div>

				{/* FAQ Items */}
				<motion.div
					ref={faqRef}
					className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0"
					variants={containerVariants}
					initial="hidden"
					animate={faqInView ? "visible" : "hidden"}>
					{faqData.map((item) => {
						const isOpen = openItems.includes(item.id);

						return (
							<motion.div
								key={item.id}
								className="bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-500 touch-manipulation"
								variants={itemVariants}
								whileHover={{ scale: 1.01 }}>
								{/* Question */}
								<button
									onClick={() => toggleItem(item.id)}
									className="w-full p-4 sm:p-6 md:p-8 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-gray-700/50 active:bg-gray-700/70 transition-colors duration-300 touch-manipulation">
									<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white pr-2 sm:pr-4 leading-tight">
										{item.question}
									</h3>
									<motion.div
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.3 }}>
										<ChevronDown
											size={20}
											className="text-blue-400 shrink-0 sm:w-6 sm:h-6"
										/>
									</motion.div>
								</button>

								{/* Answer */}
								<AnimatePresence>
									{isOpen && (
										<motion.div
											className="overflow-hidden"
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											transition={{
												duration: 0.3,
												ease: "easeInOut",
											}}>
											<div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
												<div className="w-full h-px bg-gray-700 mb-4 sm:mb-6" />
												<motion.p
													className="text-sm sm:text-base text-slate-300 leading-relaxed"
													initial={{
														y: -10,
														opacity: 0,
													}}
													animate={{
														y: 0,
														opacity: 1,
													}}
													transition={{ delay: 0.1 }}>
													{item.answer}
												</motion.p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Bottom CTA */}
				<div className="text-center mt-12 sm:mt-16 px-4">
					<div className="p-6 sm:p-8 bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 max-w-2xl mx-auto">
						<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
							Still have questions?
						</h3>
						<p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">
							Our team is here to help. Schedule a free
							consultation to discuss your specific needs.
						</p>
						<button className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg text-sm sm:text-base touch-manipulation w-full sm:w-auto">
							Schedule Free Consultation
						</button>
					</div>
				</div>
			</div>
		</section>
  );
}

export default FAQ