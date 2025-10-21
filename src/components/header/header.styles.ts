import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.header)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	background: rgba(15, 23, 42, 0.95);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(59, 130, 246, 0.1);
	transition: all 0.3s ease;

	&.scrolled {
		background: rgba(15, 23, 42, 0.98);
		border-bottom: 1px solid rgba(59, 130, 246, 0.2);
	}
`;

export const Nav = styled.nav`
	max-width: 80rem;
	margin: 0 auto;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	cursor: pointer;
`;

export const LogoIcon = styled(motion.div)`
	width: 40px;
	height: 40px;
	background: linear-gradient(135deg, #3b82f6, #8b5cf6);
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(
			45deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transform: rotate(45deg);
		animation: shimmer 3s ease-in-out infinite;
	}

	@keyframes shimmer {
		0%,
		100% {
			transform: translateX(-100%) translateY(-100%) rotate(45deg);
		}
		50% {
			transform: translateX(100%) translateY(100%) rotate(45deg);
		}
	}
`;

export const LogoText = styled(motion.span)`
	font-size: 1.5rem;
	font-weight: 700;
	background: linear-gradient(135deg, #ffffff, #cbd5e1);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	letter-spacing: -0.025em;
`;

export const NavMenu = styled(motion.ul)`
	display: flex;
	align-items: center;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled(motion.li)`
	position: relative;
`;

export const NavLinkButton = styled(motion.button)`
	background: none;
	border: none;
	color: #e2e8f0;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.95rem;
	padding: 0.5rem 0;
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #3b82f6, #8b5cf6);
		transition: width 0.3s ease;
	}

	&:hover::after {
		width: 100%;
	}

	svg {
		transition: transform 0.2s ease;
		width: 16px;
		height: 16px;
	}

	&[data-open="true"] svg {
		transform: rotate(180deg);
	}
`;

export const NavLinkAnchor = styled(motion.a)`
	background: none;
	border: none;
	color: #e2e8f0;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.95rem;
	padding: 0.5rem 0;
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #3b82f6, #8b5cf6);
		transition: width 0.3s ease;
	}

	&:hover::after {
		width: 100%;
	}
`;

export const DropdownOverlay = styled(motion.div)`
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(2px);
	z-index: 999;
`;

export const DropdownContainer = styled(motion.div)`
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	background: rgba(15, 23, 42, 0.98);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(59, 130, 246, 0.2);
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
	z-index: 1000;
`;

export const DropdownContent = styled.div`
	max-width: 80rem;
	margin: 0 auto;
	padding: 3rem 2rem;
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 4rem;

	@media (max-width: 1280px) {
		max-width: 72rem;
		padding: 2.5rem 1.5rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2rem;
		padding: 2rem 1rem;
	}
`;

export const DropdownColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const DropdownLinksArea = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
`;

export const DropdownFeaturedArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const FeaturedCard = styled(motion.div)`
	background: linear-gradient(
		135deg,
		rgba(59, 130, 246, 0.1),
		rgba(139, 92, 246, 0.1)
	);
	border: 1px solid rgba(59, 130, 246, 0.2);
	border-radius: 12px;
	padding: 1.5rem;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: linear-gradient(
			135deg,
			rgba(59, 130, 246, 0.15),
			rgba(139, 92, 246, 0.15)
		);
		border-color: rgba(59, 130, 246, 0.3);
		transform: translateY(-2px);
	}
`;

export const FeaturedCardTitle = styled.h4`
	color: #e2e8f0;
	font-size: 1rem;
	font-weight: 600;
	margin: 0 0 0.5rem 0;
`;

export const FeaturedCardDescription = styled.p`
	color: #94a3b8;
	font-size: 0.875rem;
	margin: 0 0 1rem 0;
	line-height: 1.5;
`;

export const FeaturedCardImage = styled.div`
	width: 100%;
	height: 120px;
	background: linear-gradient(135deg, #3b82f6, #8b5cf6);
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-weight: 600;
	margin-bottom: 0.75rem;
`;

export const ReadMoreLink = styled.a`
	color: #3b82f6;
	font-size: 0.875rem;
	font-weight: 500;
	text-decoration: none;

	&:hover {
		color: #60a5fa;
		text-decoration: underline;
	}
`;

export const DropdownSection = styled.div`
	margin-bottom: 2.5rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const DropdownLabel = styled.div`
	color: #94a3b8;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	margin-bottom: 1.25rem;
`;

export const DropdownItem = styled(motion.a)`
	display: block;
	color: #e2e8f0;
	text-decoration: none;
	padding: 0.875rem 0;
	border-radius: 6px;
	font-weight: 500;
	font-size: 0.95rem;
	transition: all 0.2s ease;
	cursor: pointer;
	border-bottom: 1px solid rgba(59, 130, 246, 0.05);

	&:hover {
		color: #3b82f6;
		padding-left: 0.5rem;
	}

	&:last-child {
		border-bottom: none;
	}
`;

export const CTASection = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const SignInButton = styled(motion.button)`
	background: transparent;
	border: none;
	color: #e2e8f0;
	font-weight: 500;
	padding: 0.5rem 1rem;
	cursor: pointer;
	border-radius: 6px;
	transition: all 0.3s ease;

	&:hover {
		background: rgba(59, 130, 246, 0.1);
		color: #3b82f6;
	}
`;

export const SignUpButton = styled(motion.button)`
	background: linear-gradient(135deg, #3b82f6, #8b5cf6);
	border: none;
	color: white;
	font-weight: 600;
	padding: 0.75rem 1.5rem;
	border-radius: 8px;
	cursor: pointer;
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
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
	}
`;

export const MobileMenuButton = styled(motion.button)`
	display: none;
	background: transparent;
	border: none;
	color: #e2e8f0;
	font-size: 1.5rem;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MobileMenu = styled(motion.div)`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: rgba(15, 23, 42, 0.98);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(59, 130, 246, 0.1);
	padding: 1rem 2rem;
`;

export const MobileNavItem = styled(motion.div)`
	padding: 0.75rem 0;
	border-bottom: 1px solid rgba(59, 130, 246, 0.1);

	&:last-child {
		border-bottom: none;
	}

	a {
		color: #e2e8f0;
		text-decoration: none;
		font-weight: 500;
	}
`;

export const FloatingParticle = styled(motion.div)`
	position: absolute;
	width: 4px;
	height: 4px;
	background: rgba(59, 130, 246, 0.6);
	border-radius: 50%;
	pointer-events: none;
`;
