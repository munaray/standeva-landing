'use client'

import React from 'react'
import { AnimatePresence, Variants } from 'framer-motion'
import {
  DropdownOverlay,
  DropdownContainer,
  DropdownContent,
  DropdownLinksArea,
  DropdownColumn,
  DropdownFeaturedArea,
  DropdownSection,
  DropdownLabel,
  DropdownItem,
  FeaturedCard,
  FeaturedCardTitle,
  FeaturedCardDescription,
  FeaturedCardImage,
  ReadMoreLink,
} from './header.styles'

interface DropdownItemData {
  label: string
  href: string
}

interface DropdownSectionData {
  title: string
  items: DropdownItemData[]
}

interface DropdownProps {
  isOpen: boolean
  activeItem: string | null
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.15 }
  }
}

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
}

const dropdownContent: Record<string, {
  leftSections: DropdownSectionData[]
  rightSections: DropdownSectionData[]
  featured: {
    title: string
    description: string
    image: string
    link: string
  }
}> = {
  Platform: {
    leftSections: [
      {
        title: "Core Platform",
        items: [
          { label: "API Gateway", href: "#api-gateway" },
          { label: "Model Hub", href: "#model-hub" },
          { label: "Analytics", href: "#analytics" },
          { label: "Dashboard", href: "#dashboard" }
        ]
      }
    ],
    rightSections: [
      {
        title: "Tools",
        items: [
          { label: "Playground", href: "#playground" },
          { label: "Testing Suite", href: "#testing" },
          { label: "Monitoring", href: "#monitoring" }
        ]
      }
    ],
    featured: {
      title: "Platform Update v3.0",
      description: "New unified dashboard with enhanced performance monitoring and real-time analytics.",
      image: "🚀",
      link: "#platform-update"
    }
  },
  Solutions: {
    leftSections: [
      {
        title: "By Industry",
        items: [
          { label: "Healthcare", href: "#healthcare" },
          { label: "Finance", href: "#finance" },
          { label: "E-commerce", href: "#ecommerce" },
          { label: "Education", href: "#education" }
        ]
      }
    ],
    rightSections: [
      {
        title: "By Use Case",
        items: [
          { label: "Content Generation", href: "#content" },
          { label: "Data Analysis", href: "#analysis" },
          { label: "Automation", href: "#automation" }
        ]
      }
    ],
    featured: {
      title: "Industry Solutions",
      description: "Discover how leading companies across industries are transforming with AI-powered solutions.",
      image: "🏢",
      link: "#case-studies"
    }
  },
  Developers: {
    leftSections: [
      {
        title: "Resources",
        items: [
          { label: "Documentation", href: "#docs" },
          { label: "API Reference", href: "#api-ref" },
          { label: "SDKs", href: "#sdks" },
          { label: "Tutorials", href: "#tutorials" }
        ]
      }
    ],
    rightSections: [
      {
        title: "Community",
        items: [
          { label: "Discord", href: "#discord" },
          { label: "GitHub", href: "#github" },
          { label: "Stack Overflow", href: "#stackoverflow" }
        ]
      }
    ],
    featured: {
      title: "Developer Toolkit",
      description: "New SDKs, enhanced documentation, and developer-friendly tools to accelerate your integration.",
      image: "⚡",
      link: "#developer-toolkit"
    }
  }
}

export const Dropdown: React.FC<DropdownProps> = ({ isOpen, activeItem, onClose, onMouseEnter, onMouseLeave }) => {
  const currentContent = activeItem ? dropdownContent[activeItem] : null

  if (!currentContent) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <DropdownOverlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <DropdownContainer
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <DropdownContent>
              <DropdownLinksArea>
                <DropdownColumn>
                  {currentContent.leftSections.map((section, sectionIndex) => (
                    <DropdownSection key={section.title}>
                      <DropdownLabel>
                        {section.title}
                      </DropdownLabel>
                      
                      {section.items.map((item, itemIndex) => (
                        <DropdownItem
                          key={item.label}
                          href={item.href}
                          variants={itemVariants}
                          custom={sectionIndex * section.items.length + itemIndex}
                          whileHover={{ x: 4 }}
                        >
                          {item.label}
                        </DropdownItem>
                      ))}
                    </DropdownSection>
                  ))}
                </DropdownColumn>

                <DropdownColumn>
                  {currentContent.rightSections.map((section, sectionIndex) => (
                    <DropdownSection key={section.title}>
                      <DropdownLabel>
                        {section.title}
                      </DropdownLabel>
                      
                      {section.items.map((item, itemIndex) => (
                        <DropdownItem
                          key={item.label}
                          href={item.href}
                          variants={itemVariants}
                          custom={(currentContent.leftSections.length + sectionIndex) * section.items.length + itemIndex}
                          whileHover={{ x: 4 }}
                        >
                          {item.label}
                        </DropdownItem>
                      ))}
                    </DropdownSection>
                  ))}
                </DropdownColumn>
              </DropdownLinksArea>

              <DropdownFeaturedArea>
                <DropdownLabel>
                  Latest
                </DropdownLabel>
                
                <FeaturedCard
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FeaturedCardImage>
                    {currentContent.featured.image}
                  </FeaturedCardImage>
                  <FeaturedCardTitle>
                    {currentContent.featured.title}
                  </FeaturedCardTitle>
                  <FeaturedCardDescription>
                    {currentContent.featured.description}
                  </FeaturedCardDescription>
                  <ReadMoreLink href={currentContent.featured.link}>
                    Read more
                  </ReadMoreLink>
                </FeaturedCard>
              </DropdownFeaturedArea>
            </DropdownContent>
          </DropdownContainer>
        </>
      )}
    </AnimatePresence>
  )
}