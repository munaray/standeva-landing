'use client'

import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCTAGroup,
  PrimaryButton,
  SecondaryButton,
  HeroVisual,
  FloatingElement,
  HexagonContainer,
  HexagonSVG,
  ConnectionLine,
  BackgroundCurves,
  ParticleContainer,
  Particle
} from './hero.styles'

const techIcons = [
  { name: 'React', symbol: '⚛️' },
  { name: 'Node.js', symbol: '🟢' },
  { name: 'Python', symbol: '🐍' },
  { name: 'AI/ML', symbol: '🤖' },
  { name: 'API', symbol: '🔗' },
  { name: 'Cloud', symbol: '☁️' },
  { name: 'Database', symbol: '🗄️' },
  { name: 'Security', symbol: '🔒' },
  { name: 'Analytics', symbol: '📊' }
]

const hexagonPositions = [
  { x: 200, y: 100, delay: 0 },
  { x: 350, y: 50, delay: 0.2 },
  { x: 500, y: 120, delay: 0.4 },
  { x: 150, y: 250, delay: 0.6 },
  { x: 300, y: 200, delay: 0.8 },
  { x: 450, y: 280, delay: 1 },
  { x: 250, y: 380, delay: 1.2 },
  { x: 400, y: 420, delay: 1.4 },
  { x: 100, y: 400, delay: 1.6 }
]

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  }

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  }

  const hexagonVariants: Variants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }
    })
  }

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const Hexagon: React.FC<{ tech: typeof techIcons[0], position: typeof hexagonPositions[0] }> = ({ tech, position }) => (
    <HexagonContainer
      style={{ left: position.x, top: position.y }}
      variants={hexagonVariants}
      initial="hidden"
      animate="visible"
      custom={position.delay}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      <HexagonSVG viewBox="0 0 100 100">
        <defs>
          <linearGradient id={`grad-${tech.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <polygon 
          points="50,5 90,25 90,75 50,95 10,75 10,25" 
          fill={`url(#grad-${tech.name})`}
          stroke="#3b82f6" 
          strokeWidth="2"
        />
        <text 
          x="50" 
          y="58" 
          textAnchor="middle" 
          fontSize="24" 
          fill="white"
        >
          {tech.symbol}
        </text>
      </HexagonSVG>
    </HexagonContainer>
  )

  return (
    <HeroSection>
      {/* Background Curves */}
      <BackgroundCurves viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 Q300,200 600,300 T1200,250"
          stroke="url(#curveGrad)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,600 Q400,400 800,500 T1200,450"
          stroke="url(#curveGrad)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
      </BackgroundCurves>

      {/* Floating Particles */}
      <ParticleContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
      </ParticleContainer>

      <HeroContainer>
        <HeroContent>
          <HeroTitle variants={titleVariants} initial="hidden" animate="visible">
            Easily integrate
            <br />
            AI in your
            <br />
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Platform
            </span>
          </HeroTitle>

          <HeroSubtitle variants={subtitleVariants} initial="hidden" animate="visible">
            Access all AI models with one API, or let us do the hard part and build a custom AI solution for you.
          </HeroSubtitle>

          <HeroCTAGroup variants={ctaVariants} initial="hidden" animate="visible">
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Documentation
            </SecondaryButton>
          </HeroCTAGroup>
        </HeroContent>

        <HeroVisual>
          {/* Connection Lines */}
          <ConnectionLine viewBox="0 0 600 500">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Animated connecting lines between hexagons */}
            <motion.line
              x1="280" y1="150" x2="380" y2="100"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
            <motion.line
              x1="380" y1="250" x2="480" y2="200"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            <motion.line
              x1="230" y1="300" x2="330" y2="250"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            />
          </ConnectionLine>

          {/* Hexagon Network */}
          {techIcons.slice(0, 9).map((tech, index) => (
            <Hexagon key={tech.name} tech={tech} position={hexagonPositions[index]} />
          ))}

          {/* Floating Elements */}
          <FloatingElement
            style={{ top: '20%', right: '10%', width: '120px', height: '60px' }}
            variants={floatingVariants}
            animate="animate"
          >
            💡 Smart API
          </FloatingElement>

          <FloatingElement
            style={{ bottom: '20%', left: '10%', width: '140px', height: '60px' }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            🚀 Fast Deploy
          </FloatingElement>

          <FloatingElement
            style={{ top: '60%', right: '20%', width: '100px', height: '60px' }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            🔒 Secure
          </FloatingElement>
        </HeroVisual>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero