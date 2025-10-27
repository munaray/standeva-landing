'use client'

import React from 'react'
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
  return (
    <section className="success-stories-section py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-4">
            CUSTOMER STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You're in good hands with us
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From startups to enterprises, see how Standeva has helped companies build better software and train stronger development teams
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-blue-500 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={32} className="text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 leading-relaxed mb-6">
                "{testimonial.testimonial}"
              </p>

              {/* Project & Results */}
              <div className="mb-6 p-4 bg-slate-600/50 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">
                  Project: {testimonial.project}
                </h4>
                <div className="space-y-1">
                  {testimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              Start Your Project
              <ArrowRight size={16} />
            </button>
            <button className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories