import styled from 'styled-components'

export const ProcessSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
  min-height: 120vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(59, 130, 246, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`

export const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`

export const ProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`

export const ProcessTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const ProcessSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 350px);
  gap: 3rem;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 3rem;
  }
`

export const ProcessStep = styled.div<{ gridRow: number; gridCol: number }>`
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridCol};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.3;
  transform: scale(0.9);
  
  @media (max-width: 768px) {
    grid-row: auto;
    grid-column: 1;
  }
`

export const StepHexagon = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    filter: drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3));
  }
`

export const StepContent = styled.div`
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 350px;
`

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
`

export const StepDescription = styled.p`
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`

export const StepCode = styled.pre`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.75rem;
  color: #e2e8f0;
  overflow-x: auto;
  line-height: 1.4;
  white-space: pre-wrap;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(59, 130, 246, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.3);
    border-radius: 2px;
  }
`

export const ConnectionSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const ConnectionPath = styled.path`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 0.3s ease-out;
`