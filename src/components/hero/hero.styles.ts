import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroSection = styled.section`
	min-height: 100vh;
	background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	padding-top: 80px;

	@media (max-width: 768px) {
		min-height: 120vh;
		padding-top: 60px;
		padding-bottom: 40px;
	}

	@media (max-width: 480px) {
		min-height: 110vh;
		padding-top: 40px;
		padding-bottom: 30px;
	}
`;

export const HeroContainer = styled.div`
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	gap: 5rem;
	align-items: center;
	z-index: 2;
	position: relative;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 3rem;
		text-align: center;
	}
`;

export const HeroContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const HeroTitle = styled(motion.h1)`
	font-size: 3.5rem;
	font-weight: 800;
	line-height: 1.1;
	background: linear-gradient(135deg, #ffffff, #e2e8f0, #94a3b8);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`;

export const HeroSubtitle = styled(motion.p)`
	font-size: 1.25rem;
	color: #94a3b8;
	line-height: 1.6;
	margin: 0;
	max-width: 500px;

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const HeroCTAGroup = styled(motion.div)`
	display: flex;
	gap: 1rem;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
	}
`;

export const PrimaryButton = styled(motion.button)`
	background: linear-gradient(135deg, #3b82f6, #8b5cf6);
	border: none;
	color: white;
	font-weight: 600;
	padding: 1rem 2rem;
	border-radius: 12px;
	cursor: pointer;
	font-size: 1.1rem;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transition: left 0.5s ease;
	}

	&:hover::before {
		left: 100%;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
	}
`;

export const SecondaryButton = styled(motion.button)`
	background: transparent;
	border: 2px solid rgba(59, 130, 246, 0.3);
	color: #e2e8f0;
	font-weight: 600;
	padding: 1rem 2rem;
	border-radius: 12px;
	cursor: pointer;
	font-size: 1.1rem;
	transition: all 0.3s ease;

	&:hover {
		border-color: #3b82f6;
		background: rgba(59, 130, 246, 0.1);
		transform: translateY(-2px);
	}
`;

export const HeroVisual = styled(motion.div)`
	position: relative;
	height: 600px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		height: 400px;
	}
`;

export const FloatingElement = styled(motion.div)`
	position: absolute;
	background: linear-gradient(
		135deg,
		rgba(59, 130, 246, 0.1),
		rgba(139, 92, 246, 0.1)
	);
	border: 1px solid rgba(59, 130, 246, 0.2);
	border-radius: 12px;
	backdrop-filter: blur(10px);
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e2e8f0;
	font-weight: 600;
	font-size: 0.9rem;
`;

export const HexagonContainer = styled(motion.div)`
	position: absolute;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HexagonSVG = styled(motion.svg)`
	width: 100%;
	height: 100%;
	filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3));
`;

export const ConnectionLine = styled(motion.svg)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 1;
`;

export const BackgroundCurves = styled(motion.svg)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0.3;
`;

export const ParticleContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 1;
`;

export const Particle = styled(motion.div)`
	position: absolute;
	width: 4px;
	height: 4px;
	background: radial-gradient(circle, #3b82f6, transparent);
	border-radius: 50%;
`;
