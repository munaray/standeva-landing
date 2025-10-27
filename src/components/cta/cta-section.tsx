'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ArrowRight, Code, GraduationCap } from 'lucide-react'

const CTASection: React.FC = () => {
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="cta-section relative py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 text-white overflow-hidden">
      {/* Flowing Path SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 400C200 200 400 600 600 400C800 200 1000 600 1250 400"
          stroke="url(#flowingGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 5"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div 
          ref={ctaRef}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            variants={itemVariants}>
            Try Standeva today.
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}>
            You can start building right away. If you have any questions, feel free to chat with us!
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}>
          <motion.button 
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3 min-w-64"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}>
            <Code size={20} />
            <span>Get Started with Development</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3 min-w-64"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}>
            <GraduationCap size={20} />
            <span>Explore Training Programs</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
            <p className="text-slate-400">Tailored solutions built with modern technologies</p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
            <p className="text-slate-400">Comprehensive programs for all skill levels</p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-slate-400">500+ developers trained, 150+ projects delivered</p>
          </div>
        </div>

        {/* Bottom Contact */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">
            Ready to discuss your project or training needs?
          </p>
          <button className="px-6 py-3 border border-slate-600 text-white font-medium rounded-xl hover:bg-white/5 transition-colors duration-300">
            Schedule a Free Consultation
          </button>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
    </section>
  )
}

export default CTASection