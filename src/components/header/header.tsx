"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Dropdown } from "./dropdown";
import {
	HeaderContainer,
	Nav,
	Logo,
	LogoIcon,
	LogoText,
	NavMenu,
	NavItem,
	NavLinkButton,
	NavLinkAnchor,
	CTASection,
	SignInButton,
	SignUpButton,
	MobileMenuButton,
	MobileMenu,
	MobileNavItem,
	FloatingParticle,
} from "./header.styles";

interface NavItemConfig {
	name: string;
	href?: string;
	hasDropdown?: boolean;
}

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			setIsScrolled(currentScrollY > 20);

			// Show/hide header based on scroll direction
			if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
				// Scrolling down
				setIsVisible(false);
			} else {
				// Scrolling up
				setIsVisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems: NavItemConfig[] = [
		{ name: "Platform", hasDropdown: true },
		{ name: "Solutions", hasDropdown: true },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Developers", hasDropdown: true },
		{ name: "Company", href: "#company" },
	];

	const handleMouseEnter = (itemName: string) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setActiveDropdown(itemName);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveDropdown(null);
		}, 150);
	};

	const handleCloseDropdown = () => {
		setActiveDropdown(null);
	};

	const headerVariants: Variants = {
		visible: {
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" },
		},
		hidden: {
			y: -100,
			transition: { duration: 0.3, ease: "easeIn" },
		},
	};

	const ChevronDown = () => (
		<svg fill="currentColor" viewBox="0 0 20 20">
			<path
				fillRule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);

	return (
		<HeaderContainer
			className={isScrolled ? "scrolled" : ""}
			variants={headerVariants}
			animate={isVisible ? "visible" : "hidden"}>
			{[...Array(5)].map((_, i) => (
				<FloatingParticle
					key={i}
					animate={{
						x: [0, 30, 0],
						y: [0, -20, 0],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 3 + i,
						repeat: Infinity,
						ease: "easeInOut",
						delay: i * 0.5,
					}}
					style={{
						left: `${20 + i * 15}%`,
						top: "50%",
					}}
				/>
			))}

			<Nav>
				<Logo>
					<LogoIcon>
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
							style={{
								width: "20px",
								height: "20px",
								background: "white",
								borderRadius: "4px",
							}}
						/>
					</LogoIcon>
					<LogoText>Standeva</LogoText>
				</Logo>

				<NavMenu>
					{navItems.map((item) => (
						<NavItem
							key={item.name}
							onMouseEnter={() =>
								item.hasDropdown && handleMouseEnter(item.name)
							}
							onMouseLeave={handleMouseLeave}>
							{item.href ? (
								<NavLinkAnchor
									href={item.href}
									whileHover={{ y: -2 }}
									whileTap={{ y: 0 }}>
									{item.name}
								</NavLinkAnchor>
							) : (
								<NavLinkButton
									data-open={activeDropdown === item.name}
									whileHover={{ y: -2 }}
									whileTap={{ y: 0 }}>
									{item.name}
									{item.hasDropdown && <ChevronDown />}
								</NavLinkButton>
							)}
						</NavItem>
					))}
				</NavMenu>

				<CTASection>
					<SignInButton
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Sign in
					</SignInButton>
					<SignUpButton
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Get Started
					</SignUpButton>

					<MobileMenuButton
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						whileTap={{ scale: 0.95 }}>
						☰
					</MobileMenuButton>
				</CTASection>
			</Nav>

			{/* Single Dropdown Container */}
			<Dropdown
				isOpen={!!activeDropdown}
				activeItem={activeDropdown}
				onClose={handleCloseDropdown}
			/>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<MobileMenu
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}>
						{navItems.map((item, i) => (
							<MobileNavItem
								key={item.name}
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: i * 0.1 }}>
								<a href={item.href || "#"}>{item.name}</a>
							</MobileNavItem>
						))}
					</MobileMenu>
				)}
			</AnimatePresence>
		</HeaderContainer>
	);
};

export default Header;
