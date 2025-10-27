'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Settings, Headphones } from 'lucide-react'
import {
  SolutionsSection,
  SolutionsContainer,
  SolutionsHeader,
  SolutionsTitle,
  SolutionsSubtitle,
  SolutionsGrid,
  SolutionCard,
  CardHeader,
  CardBadge,
  CardTitle,
  CardDescription,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  CardButton,
  ButtonIcon,
} from './solutions.styles'

const solutionsData = [
  {
    id: 'universal',
    badge: 'Build it yourself...',
    title: 'Self-Service Platform',
    description: 'For developers who want to integrate AI capabilities quickly and efficiently through our unified platform:',
    features: [
      {
        icon: Zap,
        text: 'Access multiple AI models through a single unified API endpoint'
      },
      {
        icon: Settings,
        text: 'Compare model performance and pricing in real-time testing'
      },
      {
        icon: ArrowRight,
        text: 'Easy integration with comprehensive SDKs and documentation'
      },
      {
        icon: Users,
        text: 'Perfect for rapid prototyping without complex customization'
      }
    ],
    buttonText: 'Start Building',
    buttonColor: '#3b82f6'
  },
  {
    id: 'custom',
    badge: '...or let us build it for you',
    title: 'Enterprise Solutions',
    description: 'For companies that need high-quality, reliable AI features tailored to their specific business requirements:',
    features: [
      {
        icon: Users,
        text: 'We build dedicated AI solutions optimized for your business'
      },
      {
        icon: Zap,
        text: 'We commit to high levels of performance and accuracy standards'
      },
      {
        icon: Settings,
        text: 'Continuous performance monitoring and improvement processes'
      },
      {
        icon: Headphones,
        text: 'A dedicated AI engineer focused on your company\'s specific needs'
      }
    ],
    buttonText: 'Talk to an AI Engineer',
    buttonColor: '#3b82f6'
  }
]

const Solutions: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const parallaxBgRef = useRef<HTMLDivElement>(null)
  const parallaxOrb1Ref = useRef<HTMLDivElement>(null)
  const parallaxOrb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Only apply parallax when section is in viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        const parallaxOffset = scrollProgress * 100

        // Background parallax (slower)
        if (parallaxBgRef.current) {
          parallaxBgRef.current.style.transform = `translateY(${parallaxOffset * 0.3}px)`
        }

        // Orb 1 parallax (medium speed)
        if (parallaxOrb1Ref.current) {
          parallaxOrb1Ref.current.style.transform = `translateY(${parallaxOffset * 0.5}px) translateX(${parallaxOffset * 0.2}px)`
        }

        // Orb 2 parallax (different direction)
        if (parallaxOrb2Ref.current) {
          parallaxOrb2Ref.current.style.transform = `translateY(${parallaxOffset * -0.4}px) translateX(${parallaxOffset * -0.3}px)`
        }

        // Cards subtle parallax
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const cardOffset = index === 0 ? parallaxOffset * 0.1 : parallaxOffset * -0.1
            card.style.transform = `translateY(${cardOffset}px)`
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSection()
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateSection = () => {
    const animateElement = (element: HTMLElement | null, delay: number, direction: 'up' | 'left' | 'right' = 'up') => {
      if (!element) return

      const transforms = {
        up: 'translateY(30px)',
        left: 'translateX(-30px)',
        right: 'translateX(30px)'
      }

      element.style.transform = transforms[direction]
      element.style.opacity = '0'
      element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'

      setTimeout(() => {
        element.style.transform = 'translateY(0) translateX(0)'
        element.style.opacity = '1'
      }, delay)
    }

    // Animate title and subtitle
    animateElement(titleRef.current, 0)
    animateElement(subtitleRef.current, 200)

    // Animate cards with staggered timing
    cardsRef.current.forEach((card, index) => {
      const direction = index === 0 ? 'left' : 'right'
      animateElement(card, 400 + (index * 200), direction)

      // Animate features within each card
      if (card) {
        const features = card.querySelectorAll('[data-feature]')
        features.forEach((feature, featureIndex) => {
          const featureElement = feature as HTMLElement
          featureElement.style.transform = 'translateX(-20px)'
          featureElement.style.opacity = '0'
          featureElement.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'

          setTimeout(() => {
            featureElement.style.transform = 'translateX(0)'
            featureElement.style.opacity = '1'
          }, 800 + (index * 200) + (featureIndex * 100))
        })
      }
    })
  }

  return (
		<SolutionsSection ref={sectionRef}>
			{/* Parallax Background Elements */}
			<div
				ref={parallaxBgRef}
				style={{
					position: "absolute",
					top: "10%",
					left: "5%",
					width: "200px",
					height: "200px",
					background:
						"radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
					zIndex: 1,
				}}
			/>

			<div
				ref={parallaxOrb1Ref}
				style={{
					position: "absolute",
					top: "20%",
					right: "10%",
					width: "150px",
					height: "150px",
					background:
						"radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
					zIndex: 1,
				}}
			/>

			<div
				ref={parallaxOrb2Ref}
				style={{
					position: "absolute",
					bottom: "15%",
					left: "15%",
					width: "120px",
					height: "120px",
					background:
						"radial-gradient(circle, rgba(34, 197, 94, 0.06) 0%, transparent 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
					zIndex: 1,
				}}
			/>

			<SolutionsContainer>
				<SolutionsHeader>
					<SolutionsTitle ref={titleRef}>
						Got specific needs? We&apos;re here to help
					</SolutionsTitle>
					<SolutionsSubtitle ref={subtitleRef}>
						Choose the approach that fits your development style and
						business requirements
					</SolutionsSubtitle>
				</SolutionsHeader>

				<SolutionsGrid>
					{solutionsData.map((solution, index) => (
						<SolutionCard
							key={solution.id}
							ref={(el) => {
								cardsRef.current[index] = el;
							}}
							as={motion.div}
							whileHover={{
								scale: 1.02,
								boxShadow:
									"0 20px 40px rgba(59, 130, 246, 0.15)",
							}}
							transition={{ duration: 0.3 }}>
							<CardHeader>
								<CardBadge>{solution.badge}</CardBadge>
								<CardTitle>{solution.title}</CardTitle>
								<CardDescription>
									{solution.description}
								</CardDescription>
							</CardHeader>

							<FeaturesList>
								{solution.features.map(
									(feature, featureIndex) => {
										const IconComponent = feature.icon;
										return (
											<FeatureItem
												key={featureIndex}
												data-feature>
												<FeatureIcon>
													<IconComponent size={16} />
												</FeatureIcon>
												<FeatureText>
													{feature.text}
												</FeatureText>
											</FeatureItem>
										);
									}
								)}
							</FeaturesList>

							<CardButton
								as={motion.button}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								style={{
									backgroundColor: solution.buttonColor,
								}}>
								{solution.buttonText}
								<ButtonIcon>
									<ArrowRight size={16} />
								</ButtonIcon>
							</CardButton>
						</SolutionCard>
					))}
				</SolutionsGrid>
			</SolutionsContainer>
		</SolutionsSection>
  );
}

export default Solutions