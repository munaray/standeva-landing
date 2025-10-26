import styled, { keyframes } from 'styled-components'

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
`

const scrollRight = keyframes`
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
`

export const PartnersSection = styled.section`
  height: 50vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const PartnersContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const PartnersTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin: 0;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const LogoRow = styled.div`
  width: 100vw;
  height: 80px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 60px;
  }
`

export const LogoTrack = styled.div<{ direction: string; speed: number }>`
  display: flex;
  align-items: center;
  height: 100%;
  width: max-content;
  animation: ${props => props.direction === 'left' ? scrollLeft : scrollRight} 
             ${props => props.speed}s linear infinite;
  gap: 4rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`

export const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-width: 120px;
  
  @media (max-width: 768px) {
    height: 40px;
    min-width: 100px;
  }
`

export const LogoImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  opacity: 0.7;
  filter: grayscale(30%);
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`

export const EdgeMask = styled.div<{ side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${props => props.side}: 0;
  height: 100%;
  width: 200px;
  background: linear-gradient(
    ${props => props.side === 'left' ? '90deg' : '-90deg'},
    #0f172a 0%,
    rgba(15, 23, 42, 0.8) 30%,
    rgba(15, 23, 42, 0.3) 70%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 100px;
  }
`