'use client'

import React from 'react'
import {
  PartnersSection,
  PartnersContainer,
  PartnersTitle,
  LogoRow,
  LogoTrack,
  LogoItem,
  LogoImage,
  EdgeMask
} from './partners.styles'

const partnersData = {
  title: "Access the best AI models with one API...",
  rows: [
    {
      direction: 'left',
      speed: 40,
      logos: [
        { name: 'OpenAI', src: '/logos/openai.svg' },
        { name: 'Anthropic', src: '/logos/anthropic.svg' },
        { name: 'Google AI', src: '/logos/google-ai.svg' },
        { name: 'Meta', src: '/logos/meta.svg' },
        { name: 'Mistral AI', src: '/logos/mistral.svg' },
        { name: 'Cohere', src: '/logos/cohere.svg' },
        { name: 'Stability AI', src: '/logos/stability.svg' },
        { name: 'Replicate', src: '/logos/replicate.svg' }
      ]
    },
    {
      direction: 'right',
      speed: 35,
      logos: [
        { name: 'AWS', src: '/logos/aws.svg' },
        { name: 'Azure', src: '/logos/azure.svg' },
        { name: 'Google Cloud', src: '/logos/gcp.svg' },
        { name: 'Vercel', src: '/logos/vercel.svg' },
        { name: 'Hugging Face', src: '/logos/huggingface.svg' },
        { name: 'Pinecone', src: '/logos/pinecone.svg' },
        { name: 'LangChain', src: '/logos/langchain.svg' },
        { name: 'Weaviate', src: '/logos/weaviate.svg' }
      ]
    },
    {
      direction: 'left',
      speed: 45,
      logos: [
        { name: 'GitHub', src: '/logos/github.svg' },
        { name: 'GitLab', src: '/logos/gitlab.svg' },
        { name: 'Docker', src: '/logos/docker.svg' },
        { name: 'Kubernetes', src: '/logos/kubernetes.svg' },
        { name: 'Supabase', src: '/logos/supabase.svg' },
        { name: 'PlanetScale', src: '/logos/planetscale.svg' },
        { name: 'Prisma', src: '/logos/prisma.svg' },
        { name: 'Clerk', src: '/logos/clerk.svg' }
      ]
    }
  ]
}

const Partners: React.FC = () => {
  return (
    <PartnersSection>
      <PartnersContainer>
        <PartnersTitle>{partnersData.title}</PartnersTitle>
        
        {partnersData.rows.map((row, rowIndex) => (
          <LogoRow key={rowIndex}>
            <LogoTrack direction={row.direction} speed={row.speed}>
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {row.logos.map((logo, logoIndex) => (
                    <LogoItem key={`${setIndex}-${logoIndex}`}>
                      <LogoImage 
                        src={logo.src} 
                        alt={logo.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </LogoItem>
                  ))}
                </React.Fragment>
              ))}
            </LogoTrack>
            <EdgeMask side="left" />
            <EdgeMask side="right" />
          </LogoRow>
        ))}
      </PartnersContainer>
    </PartnersSection>
  )
}

export default Partners