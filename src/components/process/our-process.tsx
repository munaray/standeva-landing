'use client'

import React from 'react'
import { Search, PlaneTakeoff, Code, TestTube, Rocket } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: "Discovery & Requirements",
    description: "We start by understanding your business needs and identify the best technical approach based on your requirements.",
    details: [
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
    details: [
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
    details: [
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
    details: [
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
    details: [
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
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
            TACKLE EASILY COMPLEX AI INTEGRATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ...or let us build a custom solution just for you
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            const isCenter = index === 2 // Middle card (index 2) in a 5-item grid
            
            return (
              <div
                key={step.id}
                className={`
                  relative bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300
                  ${isCenter ? 'lg:col-start-2 lg:row-start-2' : ''}
                  ${index === 0 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  ${index === 1 ? 'lg:col-start-3 lg:row-start-1' : ''}
                  ${index === 3 ? 'lg:col-start-1 lg:row-start-3' : ''}
                  ${index === 4 ? 'lg:col-start-3 lg:row-start-3' : ''}
                `}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full">
                    <span className="text-slate-700 font-bold text-lg">{step.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Connection Lines for larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform -translate-y-1/2" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurProcess