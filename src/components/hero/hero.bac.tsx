'use client'

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
import {
	Database,
	Cloud,
	Shield,
	Zap,
	Code,
	BarChart3,
	Cpu,
	Globe,
	Lock,
	Rocket,
	Brain,
	Network,
	Server,
	Terminal,
} from "lucide-react";
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
	Particle,
} from "./hero.styles";

const techIcons = [
	{ name: "React", icon: Code, color: "#3b82f6" },
	{ name: "Node.js", icon: Server, color: "#10b981" },
	{ name: "Python", icon: Terminal, color: "#eab308" },
	{ name: "AI/ML", icon: Brain, color: "#ec4899" },
	{ name: "API", icon: Globe, color: "#06b6d4" },
	{ name: "Cloud", icon: Cloud, color: "#8b5cf6" },
	{ name: "Database", icon: Database, color: "#ef4444" },
	{ name: "Security", icon: Shield, color: "#f59e0b" },
	{ name: "Analytics", icon: BarChart3, color: "#14b8a6" },
	{ name: "Performance", icon: Zap, color: "#6366f1" },
	{ name: "Network", icon: Network, color: "#22c55e" },
	{ name: "Processor", icon: Cpu, color: "#f97316" },
];

const hexagonPositions = [
	{ x: 50, y: 80, delay: 0 },
	{ x: 180, y: 50, delay: 0.2 },
	{ x: 310, y: 90, delay: 0.4 },
	{ x: 440, y: 60, delay: 0.6 },
	{ x: 20, y: 200, delay: 0.8 },
	{ x: 150, y: 170, delay: 1.0 },
	{ x: 280, y: 210, delay: 1.2 },
	{ x: 410, y: 180, delay: 1.4 },
	{ x: 70, y: 320, delay: 1.6 },
	{ x: 200, y: 290, delay: 1.8 },
	{ x: 330, y: 330, delay: 2.0 },
	{ x: 150, y: 440, delay: 2.1 },
];

const codeSnippets = [
	{
		title: "API Call",
		code: `fetch('/api/ai/generate', {
  method: 'POST',
  body: JSON.stringify({
    prompt: 'Generate content',
    model: 'gpt-4'
  })
})`,
	},
	{
		title: "Response",
		code: `{
  "status": "success",
  "data": {
    "content": "Generated text...",
    "tokens": 150,
    "latency": "450ms"
  }
}`,
	},
	{
		title: "Integration",
		code: `import { StandevaAI } from '@standeva/sdk'

const ai = new StandevaAI({
  apiKey: process.env.API_KEY
})

const result = await ai.generate({
  prompt: "Your prompt here"
})`,
	},
];

const platformVariants = ["SaaS", "Automation", "Internal Tools"];

const ColorTransitionBox: React.FC = () => {
	return null;
};

const Hero: React.FC = () => {
	const [particles, setParticles] = useState<
		Array<{ id: number; x: number; y: number; delay: number }>
	>([]);
	const platformTextRef = useRef<HTMLSpanElement>(null);
	const codeTextRef = useRef<HTMLSpanElement>(null);
	const codeTitleRef = useRef<HTMLDivElement>(null);
	const codeCursorRef = useRef<HTMLSpanElement>(null);
	const heroSectionRef = useRef<HTMLElement>(null);
	const hexagonContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.set("body", { backgroundColor: "#0f172a" });
	});

	useEffect(() => {
		const newParticles = Array.from({ length: 20 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			delay: Math.random() * 2,
		}));
		setParticles(newParticles);
	}, []);

	useEffect(() => {
		const handleHeroScroll = () => {
			if (!heroSectionRef.current || !hexagonContainerRef.current) return;

			const scrollY = window.scrollY;
			const heroHeight = heroSectionRef.current.offsetHeight;

			if (scrollY < heroHeight) {
				const parallaxSpeed = scrollY * 0.5;

				hexagonContainerRef.current.style.transform = `translateY(${
					parallaxSpeed * 0.3
				}px)`;

				const curves = heroSectionRef.current.querySelector("svg");
				if (curves) {
					curves.style.transform = `translateY(${
						parallaxSpeed * 0.2
					}px)`;
				}

				const particleContainer = heroSectionRef.current.querySelector(
					'[style*="pointer-events: none"]'
				);
				if (particleContainer) {
					(
						particleContainer as HTMLElement
					).style.transform = `translateY(${parallaxSpeed * 0.1}px)`;
				}
			}
		};

		window.addEventListener("scroll", handleHeroScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleHeroScroll);
	}, []);

	useEffect(() => {
		if (!platformTextRef.current) return;

		let currentIndex = 0;
		let isTyping = true;
		let currentText = "";
		const typewriterTimeouts: NodeJS.Timeout[] = [];

		const typeNextCharacter = () => {
			const currentWord = platformVariants[currentIndex];

			if (isTyping) {
				if (currentText.length < currentWord.length) {
					currentText += currentWord[currentText.length];
					if (platformTextRef.current) {
						platformTextRef.current.textContent = currentText + "|";
					}
					typewriterTimeouts.push(setTimeout(typeNextCharacter, 100));
				} else {
					typewriterTimeouts.push(
						setTimeout(() => {
							isTyping = false;
							typeNextCharacter();
						}, 2000)
					);
				}
			} else {
				if (currentText.length > 0) {
					currentText = currentText.slice(0, -1);
					if (platformTextRef.current) {
						platformTextRef.current.textContent = currentText + "|";
					}
					typewriterTimeouts.push(setTimeout(typeNextCharacter, 50));
				} else {
					currentIndex = (currentIndex + 1) % platformVariants.length;
					isTyping = true;
					typewriterTimeouts.push(setTimeout(typeNextCharacter, 300));
				}
			}
		};

		typeNextCharacter();

		return () => {
			typewriterTimeouts.forEach(clearTimeout);
		};
	}, []);

	useEffect(() => {
		if (
			!codeTextRef.current ||
			!codeTitleRef.current ||
			!codeCursorRef.current
		)
			return;

		let currentSnippetIndex = 0;
		let isCodeTyping = true;
		let currentCodeText = "";
		const codeTimeouts: NodeJS.Timeout[] = [];

		const highlightSyntax = (code: string) => {
			return code
				.replace(
					/('.*?'|".*?")/g,
					'<span style="color: #22c55e">$1</span>'
				)
				.replace(
					/\b(fetch|method|import|const|await|from|new)\b/g,
					'<span style="color: #3b82f6">$1</span>'
				)
				.replace(
					/(\{|\}|\[|\])/g,
					'<span style="color: #eab308">$1</span>'
				)
				.replace(/\b(\d+)\b/g, '<span style="color: #f97316">$1</span>')
				.replace(
					/(\/\/.*$)/gm,
					'<span style="color: #6b7280">$1</span>'
				);
		};

		const typeCodeCharacter = () => {
			const currentSnippet = codeSnippets[currentSnippetIndex];
			const targetCode = currentSnippet.code;

			if (isCodeTyping) {
				if (currentCodeText.length < targetCode.length) {
					currentCodeText += targetCode[currentCodeText.length];
					if (codeTextRef.current) {
						codeTextRef.current.innerHTML =
							highlightSyntax(currentCodeText);
					}
					if (codeTitleRef.current) {
						codeTitleRef.current.textContent = currentSnippet.title;
					}
					codeTimeouts.push(setTimeout(typeCodeCharacter, 50));
				} else {
					codeTimeouts.push(
						setTimeout(() => {
							isCodeTyping = false;
							typeCodeCharacter();
						}, 3000)
					);
				}
			} else {
				if (currentCodeText.length > 0) {
					currentCodeText = currentCodeText.slice(0, -1);
					if (codeTextRef.current) {
						codeTextRef.current.innerHTML =
							highlightSyntax(currentCodeText);
					}
					codeTimeouts.push(setTimeout(typeCodeCharacter, 25));
				} else {
					currentSnippetIndex =
						(currentSnippetIndex + 1) % codeSnippets.length;
					isCodeTyping = true;
					codeTimeouts.push(setTimeout(typeCodeCharacter, 500));
				}
			}
		};

		codeTimeouts.push(setTimeout(typeCodeCharacter, 2000));
		const cursorInterval = setInterval(() => {
			if (codeCursorRef.current) {
				codeCursorRef.current.style.opacity =
					codeCursorRef.current.style.opacity === "0" ? "1" : "0";
			}
		}, 500);

		return () => {
			codeTimeouts.forEach(clearTimeout);
			clearInterval(cursorInterval);
		};
	}, []);

	const titleVariants: Variants = React.useMemo(
		() => ({
			hidden: { opacity: 0, y: 30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					ease: "easeOut",
				},
			},
		}),
		[]
	);

	const subtitleVariants: Variants = React.useMemo(
		() => ({
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					delay: 0.3,
					ease: "easeOut",
				},
			},
		}),
		[]
	);

	const ctaVariants: Variants = React.useMemo(
		() => ({
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					delay: 0.6,
					ease: "easeOut",
				},
			},
		}),
		[]
	);

	const hexagonVariants: Variants = React.useMemo(
		() => ({
			hidden: { scale: 0, rotate: -180, opacity: 0 },
			visible: (delay: number) => ({
				scale: 1,
				rotate: 0,
				opacity: 1,
				transition: {
					duration: 0.8,
					delay: delay,
					ease: "easeOut",
				},
			}),
		}),
		[]
	);

	const floatingVariants: Variants = React.useMemo(
		() => ({
			animate: {
				y: [-10, 10, -10],
				rotate: [0, 5, -5, 0],
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				},
			},
		}),
		[]
	);

	const Hexagon: React.FC<{
		tech: (typeof techIcons)[0];
		position: (typeof hexagonPositions)[0];
	}> = React.memo(({ tech, position }) => {
		Hexagon.displayName = "Hexagon";
		const IconComponent = tech.icon;

		return (
			<HexagonContainer
				style={{ left: position.x, top: position.y }}
				variants={hexagonVariants}
				initial="hidden"
				animate="visible"
				custom={position.delay}
				whileHover={{ scale: 1.1, rotate: 10 }}>
				<HexagonSVG viewBox="0 0 100 100">
					<defs>
						<linearGradient
							id={`grad-${tech.name}`}
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%">
							<stop
								offset="0%"
								stopColor={tech.color}
								stopOpacity="0.2"
							/>
							<stop
								offset="100%"
								stopColor={tech.color}
								stopOpacity="0.4"
							/>
						</linearGradient>
					</defs>
					<polygon
						points="50,5 90,25 90,75 50,95 10,75 10,25"
						fill={`url(#grad-${tech.name})`}
						stroke={tech.color}
						strokeWidth="2"
					/>
				</HexagonSVG>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						color: tech.color,
						filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
					}}>
					<IconComponent size={24} />
				</div>
			</HexagonContainer>
		);
	});

	const CodeBlock: React.FC = () => (
		<div
			style={{
				position: "absolute",
				background: "rgba(15, 23, 42, 0.95)",
				border: "1px solid rgba(59, 130, 246, 0.4)",
				borderRadius: "12px",
				padding: "1.5rem",
				fontFamily: "monospace",
				fontSize: "0.85rem",
				color: "#e2e8f0",
				width: "380px",
				backdropFilter: "blur(15px)",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
				top: "68%",
				right: "11%",
				zIndex: 15,
			}}>
			<div
				ref={codeTitleRef}
				style={{
					color: "#3b82f6",
					fontWeight: "bold",
					marginBottom: "0.75rem",
					fontSize: "0.9rem",
				}}>
				API Call
			</div>
			<pre
				style={{
					margin: 0,
					whiteSpace: "pre-wrap",
					lineHeight: "1.4",
				}}>
				<span ref={codeTextRef}></span>
				<span ref={codeCursorRef} style={{ color: "#3b82f6" }}>
					|
				</span>
			</pre>
		</div>
	);

	return (
		<HeroSection ref={heroSectionRef}>
			<ColorTransitionBox />

			<BackgroundCurves viewBox="0 0 1200 800">
				<defs>
					<linearGradient
						id="curveGrad"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%">
						<stop
							offset="0%"
							stopColor="#3b82f6"
							stopOpacity="0.1"
						/>
						<stop
							offset="100%"
							stopColor="#8b5cf6"
							stopOpacity="0.2"
						/>
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

			<ParticleContainer>
				{particles.map((particle) => (
					<Particle
						key={particle.id}
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
						}}
						animate={{
							y: [-20, 20, -20],
							opacity: [0.3, 0.8, 0.3],
							scale: [0.8, 1.2, 0.8],
						}}
						transition={{
							duration: 4 + particle.delay,
							repeat: Infinity,
							ease: "easeInOut",
							delay: particle.delay,
						}}
					/>
				))}
			</ParticleContainer>

			<HeroContainer>
				<HeroContent>
					<HeroTitle
						variants={titleVariants}
						initial="hidden"
						animate="visible">
						Easily integrate
						<br />
						AI in your
						<br />
						<span
							ref={platformTextRef}
							style={{
								background:
									"linear-gradient(135deg, #3b82f6, #8b5cf6)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}>
							Platform
						</span>
					</HeroTitle>

					<HeroSubtitle
						variants={subtitleVariants}
						initial="hidden"
						animate="visible">
						Access all AI models with one API, or let us do the hard
						part and build a custom AI solution for you.
					</HeroSubtitle>

					<HeroCTAGroup
						variants={ctaVariants}
						initial="hidden"
						animate="visible">
						<PrimaryButton
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							Start Building
						</PrimaryButton>
						<SecondaryButton
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							View Documentation
						</SecondaryButton>
					</HeroCTAGroup>
				</HeroContent>

				<HeroVisual ref={hexagonContainerRef}>
					<ConnectionLine viewBox="0 0 600 500">
						<defs>
							<linearGradient
								id="lineGrad"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%">
								<stop
									offset="0%"
									stopColor="#3b82f6"
									stopOpacity="0.3"
								/>
								<stop
									offset="50%"
									stopColor="#8b5cf6"
									stopOpacity="0.6"
								/>
								<stop
									offset="100%"
									stopColor="#3b82f6"
									stopOpacity="0.3"
								/>
							</linearGradient>
						</defs>
						<motion.line
							x1="280"
							y1="150"
							x2="380"
							y2="100"
							stroke="url(#lineGrad)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 2 }}
						/>
						<motion.line
							x1="380"
							y1="250"
							x2="480"
							y2="200"
							stroke="url(#lineGrad)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 2.5 }}
						/>
						<motion.line
							x1="230"
							y1="300"
							x2="330"
							y2="250"
							stroke="url(#lineGrad)"
							strokeWidth="2"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 3 }}
						/>
					</ConnectionLine>

					{techIcons.slice(0, 12).map((tech, index) => (
						<Hexagon
							key={tech.name}
							tech={tech}
							position={hexagonPositions[index]}
						/>
					))}

					<CodeBlock />

					<FloatingElement
						style={{
							top: "0%",
							right: "50%",
							width: "120px",
							height: "60px",
						}}
						variants={floatingVariants}
						animate="animate">
						<Terminal size={20} style={{ marginRight: "8px" }} />
						Live API
					</FloatingElement>

					<FloatingElement
						style={{
							bottom: "20%",
							left: "04%",
							width: "140px",
							height: "60px",
						}}
						variants={floatingVariants}
						animate="animate"
						transition={{ delay: 1 }}>
						<Rocket size={20} style={{ marginRight: "8px" }} />
						Fast Deploy
					</FloatingElement>

					<FloatingElement
						style={{
							top: "50%",
							right: "30%",
							width: "100px",
							height: "60px",
						}}
						variants={floatingVariants}
						animate="animate"
						transition={{ delay: 2 }}>
						<Lock size={20} style={{ marginRight: "8px" }} />
						Secure
					</FloatingElement>
				</HeroVisual>
			</HeroContainer>
		</HeroSection>
	);
};

export default Hero