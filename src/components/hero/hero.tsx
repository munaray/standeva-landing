"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
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
	{ name: "Database", icon: Database, color: "#10b981" },
	{ name: "Cloud", icon: Cloud, color: "#06b6d4" },
	{ name: "Security", icon: Shield, color: "#f59e0b" },
	{ name: "Performance", icon: Zap, color: "#eab308" },
	{ name: "Code", icon: Code, color: "#8b5cf6" },
	{ name: "Analytics", icon: BarChart3, color: "#ef4444" },
	{ name: "AI/ML", icon: Brain, color: "#ec4899" },
	{ name: "Network", icon: Network, color: "#14b8a6" },
	{ name: "Server", icon: Server, color: "#6366f1" },
	{ name: "API", icon: Globe, color: "#3b82f6" },
	{ name: "Terminal", icon: Terminal, color: "#22c55e" },
	{ name: "Processor", icon: Cpu, color: "#f97316" },
];

const hexagonPositions = [
	{ x: 50, y: 80, delay: 0 },
	{ x: 180, y: 50, delay: 0.1 },
	{ x: 310, y: 90, delay: 0.2 },
	{ x: 440, y: 60, delay: 0.3 },
	{ x: 20, y: 200, delay: 0.4 },
	{ x: 150, y: 170, delay: 0.5 },
	{ x: 280, y: 210, delay: 0.6 },
	{ x: 410, y: 180, delay: 0.7 },
	{ x: 70, y: 320, delay: 0.8 },
	{ x: 200, y: 290, delay: 0.9 },
	{ x: 330, y: 330, delay: 1.0 },
	{ x: 150, y: 440, delay: 1.1 },
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

const platformVariants = ["SaaS", "Automations", "Internal Tools"];

const Hero: React.FC = () => {
	const [particles, setParticles] = useState<
		Array<{ id: number; x: number; y: number; delay: number }>
	>([]);
	const [, setActiveCodeIndex] = useState(0);
	const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isTyping, setIsTyping] = useState(true);
	const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
	const [displayedCode, setDisplayedCode] = useState("");
	const [isCodeTyping, setIsCodeTyping] = useState(true);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const newParticles = Array.from({ length: 25 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			delay: Math.random() * 2,
		}));
		setParticles(newParticles);

		const interval = setInterval(() => {
			setActiveCodeIndex((prev) => (prev + 1) % codeSnippets.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const currentWord = platformVariants[currentPlatformIndex];
		const timeouts: NodeJS.Timeout[] = [];

		if (isTyping) {
			currentWord.split("").forEach((char, index) => {
				const timeout = setTimeout(() => {
					setDisplayedText((prev) => prev + char);
					if (index === currentWord.length - 1) {
						const deleteTimeout = setTimeout(() => {
							setIsTyping(false);
						}, 2000);
						timeouts.push(deleteTimeout);
					}
				}, index * 100);
				timeouts.push(timeout);
			});
		} else {
			for (let i = currentWord.length; i >= 0; i--) {
				const timeout = setTimeout(() => {
					setDisplayedText(currentWord.slice(0, i));
					if (i === 0) {
						setTimeout(() => {
							setCurrentPlatformIndex(
								(prev) => (prev + 1) % platformVariants.length
							);
							setIsTyping(true);
						}, 300);
					}
				}, (currentWord.length - i) * 50);
				timeouts.push(timeout);
			}
		}

		return () => {
			timeouts.forEach(clearTimeout);
		};
	}, [currentPlatformIndex, isTyping]);

	useEffect(() => {
		const currentSnippet = codeSnippets[currentSnippetIndex];
		const currentCodeText = currentSnippet.code;
		const timeouts: NodeJS.Timeout[] = [];

		if (isCodeTyping) {
			currentCodeText.split("").forEach((char, index) => {
				const timeout = setTimeout(() => {
					setDisplayedCode((prev) => prev + char);
					if (index === currentCodeText.length - 1) {
						const pauseTimeout = setTimeout(() => {
							setIsCodeTyping(false);
						}, 2000);
						timeouts.push(pauseTimeout);
					}
				}, index * 50);
				timeouts.push(timeout);
			});
		} else {
			for (let i = currentCodeText.length; i >= 0; i--) {
				const timeout = setTimeout(() => {
					setDisplayedCode(currentCodeText.slice(0, i));
					if (i === 0) {
						setTimeout(() => {
							setCurrentSnippetIndex(
								(prev) => (prev + 1) % codeSnippets.length
							);
							setIsCodeTyping(true);
						}, 300);
					}
				}, (currentCodeText.length - i) * 25);
				timeouts.push(timeout);
			}
		}

		return () => {
			timeouts.forEach(clearTimeout);
		};
	}, [currentSnippetIndex, isCodeTyping]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => clearInterval(cursorInterval);
	}, []);

	const titleVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const subtitleVariants: Variants = {
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
	};

	const ctaVariants: Variants = {
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
	};

	const floatingVariants: Variants = {
		animate: {
			y: [-10, 10, -10],
			rotate: [0, 5, -5, 0],
			transition: {
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	const Hexagon: React.FC<{
		tech: (typeof techIcons)[0];
		position: (typeof hexagonPositions)[0];
	}> = ({ tech, position }) => {
		const IconComponent = tech.icon;

		return (
			<HexagonContainer style={{ left: position.x, top: position.y }}>
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
					}} className="animate-pulse">
					<IconComponent size={24} />
				</div>
			</HexagonContainer>
		);
	};

	const highlightSyntax = (code: string) => {
		return code
			.replace(/('.*?'|".*?")/g, '<span style="color: #22c55e">$1</span>')
			.replace(
				/\b(fetch|method|import|const|await|from|new)\b/g,
				'<span style="color: #3b82f6">$1</span>'
			)
			.replace(/(\{|\}|\[|\])/g, '<span style="color: #eab308">$1</span>')
			.replace(/\b(\d+)\b/g, '<span style="color: #f97316">$1</span>')
			.replace(/(\/\/.*$)/gm, '<span style="color: #6b7280">$1</span>');
	};

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
				style={{
					color: "#3b82f6",
					fontWeight: "bold",
					marginBottom: "0.75rem",
					fontSize: "0.9rem",
				}}>
				{codeSnippets[currentSnippetIndex].title}
			</div>
			<pre
				style={{
					margin: 0,
					whiteSpace: "pre-wrap",
					lineHeight: "1.4",
				}}>
				<span
					dangerouslySetInnerHTML={{
						__html: highlightSyntax(displayedCode),
					}}
				/>
				{showCursor && isCodeTyping && (
					<span style={{ color: "#3b82f6" }}>|</span>
				)}
			</pre>
		</div>
	);

	return (
		<HeroSection>
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
							style={{
								background:
									"linear-gradient(135deg, #3b82f6, #8b5cf6)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}>
							{displayedText}
							<motion.span
								animate={{ opacity: [1, 0, 1] }}
								transition={{
									duration: 1,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								style={{
									background:
										"linear-gradient(135deg, #3b82f6, #8b5cf6)",
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}>
								|
							</motion.span>
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

				<HeroVisual>
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
						{[
							{ x1: 130, y1: 130, x2: 260, y2: 100, delay: 2 },
							{ x1: 260, y1: 250, x2: 390, y2: 220, delay: 2.2 },
							{ x1: 150, y1: 350, x2: 280, y2: 320, delay: 2.4 },
							{ x1: 80, y1: 240, x2: 210, y2: 210, delay: 2.6 },
							{ x1: 310, y1: 270, x2: 440, y2: 240, delay: 2.8 },
						].map((line, index) => (
							<motion.line
								key={index}
								x1={line.x1}
								y1={line.y1}
								x2={line.x2}
								y2={line.y2}
								stroke="url(#lineGrad)"
								strokeWidth="1.5"
								initial={{ pathLength: 0, opacity: 0 }}
								animate={{ pathLength: 1, opacity: 1 }}
								transition={{ duration: 1, delay: line.delay }}
							/>
						))}
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
							right: "35%",
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
							bottom: "15%",
							left: "5%",
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
							right: "25%",
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

export default Hero;
