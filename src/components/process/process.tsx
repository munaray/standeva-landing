'use client'

import React, { useEffect, useRef } from 'react'
import { Code, Database, Rocket, Activity, Shield } from 'lucide-react'
import {
  ProcessSection,
  ProcessContainer,
  ProcessHeader,
  ProcessTitle,
  ProcessSubtitle,
  ProcessGrid,
  ProcessStep,
  StepHexagon,
  StepContent,
  StepTitle,
  StepDescription,
  StepCode,
  ConnectionSVG,
  ConnectionPath
} from './process.styles'

const processData = {
  title: "...or let us build a custom AI API just for you",
  subtitle: "Our streamlined process ensures your AI integration is perfectly tailored to your needs",
  steps: [
    {
      id: 1,
      title: "We start from your business need",
      description: "We map your needs and identify the best starting point based on your business requirements.",
      icon: Code,
      code: `const stackAnalysis = {
  framework: "Next.js",
  database: "PostgreSQL",
  apis: ["REST", "GraphQL"],
  deployment: "Vercel"
}`,
      gridPosition: { row: 1, col: 1 }
    },
    {
      id: 2,
      title: "We orchestrate your AI",
      description: "Our team builds the logic that connects models and tools in the right order.",
      icon: Database,
      code: `const architecture = {
  apiGateway: "standeva-proxy",
  models: ["gpt-4", "claude-3"],
  caching: "redis",
  monitoring: "real-time"
}`,
      gridPosition: { row: 1, col: 2 }
    },
    {
      id: 3,
      title: "We select the best AI Models",
      description: "We benchmark the top-performing AI models based on your business constraints.",
      icon: Shield,
      code: `const modelSelection = {
  primary: "gpt-4-turbo",
  fallback: "claude-3-sonnet",
  specialized: "code-llama",
  evaluation: "performance"
}`,
      gridPosition: { row: 2, col: 2 }
    },
    {
      id: 4,
      title: "We deliver a ready-to-use API",
      description: "Get a production-ready API endpoint that you can call directly from your backend.",
      icon: Rocket,
      code: `app.post('/api/ai/generate', async (req) => {
  const result = await standeva.generate({
    ...req.body,
    fallbacks: true
  })
  return result
})`,
      gridPosition: { row: 2, col: 1 }
    },
    {
      id: 5,
      title: "You monitor everything in one place",
      description: "Track AI workflow costs by setting limits, monitoring API calls, and analyzing usage in Eden AI's dashboard.",
      icon: Activity,
      code: `const monitoring = {
  latency: "< 200ms",
  accuracy: "99.2%",
  cost: "optimized",
  alerts: "proactive"
}`,
      gridPosition: { row: 3, col: 1 }
    }
  ]
}

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const connectionPathsRef = useRef<(SVGPathElement | null)[]>([])

  useEffect(() => {
    let animationFrameId: number
    let isScrolling = false

    const handleScroll = () => {
      if (!isScrolling) {
        animationFrameId = requestAnimationFrame(updateAnimations)
        isScrolling = true
      }
    }

    const updateAnimations = () => {
      if (!sectionRef.current) {
        isScrolling = false
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
        const totalSteps = processData.steps.length
        const stepProgress = scrollProgress * totalSteps
        const currentStep = Math.floor(stepProgress)
        const lineProgress = stepProgress - currentStep

        stepsRef.current.forEach((step, index) => {
          if (!step) return

          if (index <= currentStep) {
            step.style.opacity = '1'
            step.style.transform = 'scale(1)'
          } else {
            step.style.opacity = '0.3'
            step.style.transform = 'scale(0.9)'
          }
        })

        connectionPathsRef.current.forEach((path, index) => {
          if (!path) return

          const pathLength = path.getTotalLength()

          if (index < currentStep) {
            path.style.strokeDashoffset = '0'
          } else if (index === currentStep) {
            const offset = pathLength * (1 - lineProgress)
            path.style.strokeDashoffset = `${offset}px`
          } else {
            path.style.strokeDashoffset = `${pathLength}px`
          }
        })
      }

      isScrolling = false
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  const connectionPaths = [
    "M 150 200 Q 250 150 350 200",
    "M 350 250 Q 400 350 350 450",
    "M 300 450 Q 200 500 100 450",
    "M 100 400 Q 50 300 100 200"
  ]

  return (
    <ProcessSection ref={sectionRef}>
      <ProcessContainer>
        <ProcessHeader>
          <ProcessTitle>{processData.title}</ProcessTitle>
          <ProcessSubtitle>{processData.subtitle}</ProcessSubtitle>
        </ProcessHeader>

        <ProcessGrid>
          <ConnectionSVG viewBox="0 0 500 500">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {connectionPaths.map((path, index) => (
              <ConnectionPath
                key={index}
                ref={(el) => { connectionPathsRef.current[index] = el; }}
                d={path}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </ConnectionSVG>

          {processData.steps.map((step, index) => {
            const IconComponent = step.icon

            return (
              <ProcessStep
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; void 0 }}
                gridRow={step.gridPosition.row}
                gridCol={step.gridPosition.col}>

                <StepHexagon>
                  <svg viewBox="0 0 120 120" width="120" height="120">
                    <defs>
                      <linearGradient id={`hexGrad-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="60,10 100,30 100,70 60,90 20,70 20,30"
                      fill={`url(#hexGrad-${step.id})`}
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>

                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#3b82f6',
                    zIndex: 2
                  }}>
                    <IconComponent size={28} />
                  </div>

                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '24px',
                    height: '24px',
                    background: '#3b82f6',
                    color: '#ffffff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '700',
                    zIndex: 3
                  }}>
                    {step.id}
                  </div>
                </StepHexagon>

                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  <StepCode>{step.code}</StepCode>
                </StepContent>
              </ProcessStep>
            )
          })}
        </ProcessGrid>
      </ProcessContainer>
    </ProcessSection>
  )
}

export default Process