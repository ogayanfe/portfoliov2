"use client";

import React from "react";
import GaniSchema from "./GaniSchema";
import WebsandboxPreview from "./WebsandboxPreview";
import BirdieVisual from "./BirdieVisual";
import BotstoreVisual from "./BotstoreVisual";
import ChatVisual from "./ChatVisual";
import TtsServerVisual from "./TtsServerVisual";
import PortfolioVisual from "./PortfolioVisual";

export const projects = [
  {
    id: "websandbox",
    tag: "INFRASTRUCTURE // BROWSER RUNTIME",
    title: "Websandbox",
    description: [
      "Engineered an in-browser IDE capable of running Node.js entirely client-side using WebContainers.",
      "Achieved millisecond startup times by eliminating server-side container orchestration.",
      "Implemented real-time preview and file system manipulation leveraging the WebContainer API.",
      "Integrates with a Django backend for project management and snippet sharing."
    ],
    techStack: ["Next.js", "WebContainer API", "Django", "TypeScript", "Netlify"],
    links: [
      { label: "Live Demo", href: "https://websandboxx.netlify.app/", primary: true },
      { label: "Source Code", href: "https://github.com/ogayanfe/websandbox" }
    ],
    figure: <WebsandboxPreview />,
    color: "blue",
    gallery: [
      "/demos/websandbox/1.png", "/demos/websandbox/2.png", "/demos/websandbox/3.png",
      "/demos/websandbox/4.png", "/demos/websandbox/5.png", "/demos/websandbox/6.png",
      "/demos/websandbox/7.png", "/demos/websandbox/8.png", "/demos/websandbox/9.png",
      "/demos/websandbox/10.png"
    ]
  },
  {
    id: "birdie",
    tag: "SOCIAL // FULL-STACK",
    title: "Birdie",
    description: [
      "A comprehensive social networking application designed for short-form content delivery.",
      "Engineered complex database relationships for followers, following, and dynamic user feed generation.",
      "Implemented secure authentication using JSON Web Tokens (JWT) and SimpleJWT.",
      "Features a responsive UI with dynamic theme synchronization between dark and light modes."
    ],
    techStack: ["React", "Django", "Django REST Framework", "SimpleJWT", "TailwindCSS", "MUI"],
    links: [
      { label: "Live Demo", href: "https://birdie.netlify.app/", primary: true },
      { label: "Source Code", href: "https://github.com/ogayanfe/birdie" }
    ],
    figure: <BirdieVisual />,
    color: "purple",
    gallery: [
      "/demos/birdie/1.png", "/demos/birdie/2.png", "/demos/birdie/3.png",
      "/demos/birdie/4.png", "/demos/birdie/5.png", "/demos/birdie/6.png"
    ]
  },
  {
    id: "botstore",
    tag: "COMMERCIAL // AUTOMATION",
    title: "Botstore",
    description: [
      "A specialized dashboard and e-commerce platform for managing and distributing Telegram Mini Apps and Bots.",
      "Features a centralized dashboard to track and configure multiple bots via the Telegram API.",
      "Built an e-commerce style marketplace allowed users to browse and 'install' specialized bots.",
      "Developed with TypeScript to ensure robust handling of external API schemas."
    ],
    techStack: ["React", "TypeScript", "Django REST Framework", "Telegram API"],
    links: [
      { label: "Source Code", href: "https://github.com/ogayanfe/botstore" }
    ],
    figure: <BotstoreVisual />,
    color: "emerald"
  },
  {
    id: "gani",
    tag: "AI // LOCALIZATION",
    title: "Ganibot (Project Gani)",
    description: [
      "An accessible AI voice assistant tailored for the Hausa language to bridge the digital divide.",
      "Specifically trained for Hausa language nuances, addressing a gap in major voice assistant platforms.",
      "Designed with a voice-first interface for accessibility, optimized for mobile-first regions as a PWA.",
      "Leverages Gemini AI and specialized TTS microservices for natural language interactions."
    ],
    techStack: ["TypeScript", "Gemini AI", "Web Audio API", "PWA"],
    links: [
      { label: "Live Demo", href: "https://gani-ai-app.netlify.app/", primary: true },
      { label: "Source Code", href: "https://github.com/ogayanfe/ganibot" }
    ],
    figure: <GaniSchema />,
    color: "orange",
    gallery: [
      "/demos/gani/1.png", "/demos/gani/2.png", "/demos/gani/3.png",
      "/demos/gani/4.png", "/demos/gani/5.png", "/demos/gani/6.png"
    ]
  },
  {
    id: "django-chat",
    tag: "REAL-TIME // WEBSOCKETS",
    title: "Real-time Chat Protocol",
    description: [
      "A messaging platform demonstrating the ability to handle persistent connections and asynchronous data flow.",
      "Implemented instant message delivery using WebSockets and Django Channels (ASGI), removing poll overhead.",
      "Support for creating, joining, and deleting secure chat rooms dynamically.",
      "Features real-time user status and profile management within the conversation ecosystem."
    ],
    techStack: ["Django", "Django Channels", "WebSockets", "JavaScript (Pure)"],
    links: [
      { label: "Source Code", href: "https://github.com/ogayanfe/django-chat-app" }
    ],
    figure: <ChatVisual />,
    color: "amber",
    gallery: [
      "/demos/django-chat-application/1.png"
    ]
  },
  {
    id: "hausa-tts",
    tag: "MICROSERVICE // AUDIO",
    title: "Hausa TTS Microservice",
    description: [
      "A dedicated API server that converts text input into native Hausa language audio files (.wav).",
      "Decouples heavy audio synthesis processing from client-side applications via a JSON-to-Binary pipeline.",
      "Handles phonetics and synthesis specifics unique to the Hausa language dialect.",
      "Architected as an integration-ready engine for the Gani AI ecosystem."
    ],
    techStack: ["Python", "Flask", "Audio Synthesis Libs", "Docker"],
    links: [
      { label: "Source Code", href: "https://github.com/ogayanfe/hausa-tts-api" }
    ],
    figure: <TtsServerVisual />,
    color: "indigo"
  },
  {
    id: "portfolio-v2",
    tag: "META // PERSONAL BRAND",
    title: "Portfolio v2",
    description: [
      "The current iteration of my personal portfolio, designed to showcase technical proficiency and aesthetic sensibility.",
      "Built with a focus on performance, accessibility (a11y), and a rich, terminal-inspired user interface.",
      "Features a custom-built design system with tailwind css, framer motion animations, and responsive layouts.",
      "Implements dynamic project galleries, specialized implementation visuals, and polished micro-interactions."
    ],
    techStack: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion"],
    links: [
        { label: "Source Code", href: "https://github.com/ogayanfe/portfoliov2", primary: true }
    ],
    figure: <PortfolioVisual />,
    color: "rose",
    gallery: ["/demos/portfoliov2/1.png"]
  }
];
