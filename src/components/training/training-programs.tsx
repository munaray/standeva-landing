'use client'

import React from 'react'
import { Clock, Users, Star, ArrowRight, BookOpen, Code, Brain, Zap } from 'lucide-react'

const trainingPrograms = [
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    level: 'Beginner',
    duration: '8 weeks',
    format: 'Online + Live Sessions',
    price: '$299',
    description: 'Learn React from scratch with hands-on projects and real-world applications.',
    highlights: [
      'Components and JSX mastery',
      'State management with hooks',
      'API integration and data fetching',
      '3 portfolio-ready projects'
    ],
    icon: Code,
    levelColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'nextjs-advanced',
    title: 'Advanced Next.js',
    level: 'Intermediate',
    duration: '6 weeks',
    format: 'Self-paced + Mentorship',
    price: '$399',
    description: 'Master Next.js with SSR, SSG, API routes, and modern deployment strategies.',
    highlights: [
      'Server-side rendering & static generation',
      'API routes and middleware',
      'Performance optimization',
      'Deployment best practices'
    ],
    icon: Zap,
    levelColor: 'bg-blue-100 text-blue-700',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'python-ai-ml',
    title: 'Python for AI/ML',
    level: 'Intermediate',
    duration: '10 weeks',
    format: 'Hybrid Learning',
    price: '$499',
    description: 'Dive deep into Python for AI and machine learning with practical projects.',
    highlights: [
      'NumPy, Pandas, and Matplotlib',
      'Machine learning fundamentals',
      'Deep learning with TensorFlow',
      'Real-world AI project deployment'
    ],
    icon: Brain,
    levelColor: 'bg-purple-100 text-purple-700',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    id: 'fullstack-bootcamp',
    title: 'Full-Stack Development',
    level: 'Advanced',
    duration: '12 weeks',
    format: 'Intensive Bootcamp',
    price: '$799',
    description: 'Comprehensive full-stack development bootcamp covering frontend and backend.',
    highlights: [
      'React/Next.js frontend development',
      'Node.js and database management',
      'Authentication and security',
      'Complete application deployment'
    ],
    icon: BookOpen,
    levelColor: 'bg-orange-100 text-orange-700',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'corporate-training',
    title: 'Corporate Team Training',
    level: 'Custom',
    duration: 'Flexible',
    format: 'On-site/Remote',
    price: 'Contact Us',
    description: 'Customized training programs designed for your team\'s specific needs and goals.',
    highlights: [
      'Customized curriculum design',
      'Team skill assessment',
      'Hands-on workshop sessions',
      'Ongoing support and mentorship'
    ],
    icon: Users,
    levelColor: 'bg-gray-100 text-gray-700',
    gradient: 'from-gray-500 to-slate-600'
  }
]

const TrainingPrograms: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-indigo-600 font-semibold mb-4">
            TRAINING PROGRAMS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Elevate Your Development Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From beginner-friendly courses to advanced bootcamps, we offer comprehensive training programs designed to accelerate your career
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trainingPrograms.map((program, index) => {
            const IconComponent = program.icon

            return (
              <div
                key={program.id}
                className={`
                  bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105
                  ${index === trainingPrograms.length - 1 && trainingPrograms.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${program.gradient} flex items-center justify-center shadow-lg`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${program.levelColor}`}>
                    {program.level}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{program.format}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-slate-900 mb-4">
                    {program.price}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {program.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-2">
                      <Star size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r ${program.gradient} hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  {program.id === 'corporate-training' ? 'Contact Us' : 'Enroll Now'}
                  <ArrowRight size={16} />
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Not sure which program is right for you?
          </h3>
          <p className="text-slate-600 mb-6">
            Schedule a free consultation with our education team to find the perfect learning path for your goals.
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrainingPrograms