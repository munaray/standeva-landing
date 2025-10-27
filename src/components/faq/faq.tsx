'use client'

import React, { useState } from 'react'
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

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="faq-section py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions we're usually asked
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Got questions about our development services or training programs? We've compiled answers to the most common inquiries.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id)
            
            return (
              <div
                key={item.id}
                className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-500"
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-8 text-left flex items-center justify-between gap-4 hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    size={24} 
                    className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gray-700 mb-6" />
                    <p className="text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Our team is here to help. Schedule a free consultation to discuss your specific needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ