'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Search, PlaneTakeoff, Code, TestTube, Rocket } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: "Discovery & Requirements",
    description: "We start by understanding your business needs and identify the best technical approach based on your requirements.",
    features: [
      "Business requirements analysis",
      "Technical feasibility assessment", 
      "Timeline and budget planning",
      "Technology stack recommendations"
    ],
    icon: Search,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Planning & Architecture",
    description: "Our team creates a detailed project roadmap and designs the technical architecture for your solution.",
    features: [
      "Project roadmap and milestones",
      "System architecture design",
      "Database schema planning",
      "API design and documentation"
    ],
    icon: PlaneTakeoff,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Development & Implementation", 
    description: "We build your solution using agile methodologies with regular progress updates and client feedback.",
    features: [
      "Agile development sprints",
      "Regular progress reviews",
      "Client feedback integration",
      "Continuous code quality checks"
    ],
    icon: Code,
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing ensures your solution meets all requirements and performs optimally.",
    features: [
      "Unit and integration testing",
      "Performance optimization",
      "Security vulnerability checks",
      "User acceptance testing"
    ],
    icon: TestTube,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Deployment & Support",
    description: "We deploy your solution to production and provide ongoing maintenance and support services.",
    features: [
      "Production deployment setup",
      "Monitoring and analytics",
      "Documentation and training",
      "Ongoing maintenance support"
    ],
    icon: Rocket,
    color: "from-red-500 to-red-600"
  }
]

const OurProcess: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  })
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation({
    threshold: 0.2,
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
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

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="process-section py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}>
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
            TACKLE EASILY COMPLEX AI INTEGRATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ...or let us build a custom solution just for you
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          ref={stepsRef}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}>
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.id}
                className="relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:border-slate-200"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}>
                {/* Step Number */}
                <motion.div 
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg"
                  variants={numberVariants}
                  initial="hidden"
                  animate={stepsInView ? "visible" : "hidden"}>
                  {step.id}
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  variants={iconVariants}
                  initial="hidden"
                  animate={stepsInView ? "visible" : "hidden"}>
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-slate-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Connection Lines for larger screens */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    animate={stepsInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.2,
                      ease: "easeOut"
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.5 }}>
          <motion.button 
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}>
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default OurProcess