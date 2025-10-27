'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Star, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'TechFlow Solutions',
    avatar: '👩‍💻',
    rating: 5,
    testimonial: 'Standeva transformed our development process. We went from struggling with AI integration to deploying production-ready ML models in just 3 months. Their expertise in both development and training made all the difference.',
    project: 'AI-powered analytics platform',
    results: ['40% faster development', '99.2% uptime', '50% cost reduction']
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'InnovateLab',
    avatar: '👨‍💼',
    rating: 5,
    testimonial: 'The team training program was exactly what we needed. Our developers went from React basics to building complex Next.js applications. The hands-on approach and real-world projects made the learning stick.',
    project: 'Team upskilling & modernization',
    results: ['12 developers trained', 'Modern tech stack', '60% productivity boost']
  },
  {
    id: 3,
    name: 'Lisa Park',
    role: 'Startup Founder',
    company: 'EcoTrack',
    avatar: '👩‍🚀',
    rating: 5,
    testimonial: 'As a non-technical founder, I needed a partner who could build our MVP and explain the technical decisions. Standeva delivered both beautifully. They built our platform and taught our first hire everything they needed to know.',
    project: 'Sustainability tracking MVP',
    results: ['MVP in 8 weeks', 'Successful funding', 'Team knowledge transfer']
  }
]

const stats = [
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Developers Trained', value: '500+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Countries Served', value: '25+' }
]

const SuccessStories: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  })
  const { ref: testimonialsRef, isInView: testimonialsInView } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: false
  })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  })

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
  }

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
    <section className="success-stories-section py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}>
          <p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-4">
            CUSTOMER STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You're in good hands with us
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From startups to enterprises, see how Standeva has helped companies build better software and train stronger development teams
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          ref={testimonialsRef}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-slate-700 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-600 hover:border-blue-500 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}>
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote size={24} className="text-blue-400 sm:w-8 sm:h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current sm:w-4 sm:h-4" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6">
                "{testimonial.testimonial}"
              </p>

              {/* Project & Results */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-slate-600/50 rounded-lg">
                <h4 className="text-sm sm:text-base font-semibold text-blue-400 mb-2">
                  Project: {testimonial.project}
                </h4>
                <div className="space-y-1">
                  {testimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg sm:text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={cardVariants}>
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}>
                {stat.value}
              </motion.div>
              <p className="text-xs sm:text-sm md:text-base text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center px-4">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              Start Your Project
              <ArrowRight size={16} />
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors duration-300 text-sm sm:text-base">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories