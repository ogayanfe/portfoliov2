"use client";

import GaniSchema from "./GaniSchema";
import WebsandboxPreview from "./WebsandboxPreview";
import BirdieVisual from "./BirdieVisual";

export const projects = [
  {
    id: "gani",
    tag: "EXPERIMENTAL // AI ASSISTANT",
    title: "GANI: Hausa Voice Assistant",
    description: [
      "Developed a Progressive Web App (PWA) to bridge the digital divide for over 80 million Hausa speakers.",
      "Engineered the TTS Server: Built the text-to-speech infrastructure to convert Gemini-generated Hausa responses into natural audio.",
      "AI Integration: Leveraged Gemini AI for natural language processing and Hausa-specific response generation."
    ],
    techStack: ["Next.js", "Tailwind CSS", "Gemini AI", "Flask Hausa TTS"],
    links: [
      { label: "View Repository (Codefest Hackathon)", href: "https://github.com/ogayanfe/ganibot" }
    ],
    figure: <GaniSchema />,
    color: "orange"
  },
  {
    id: "websandbox",
    tag: "INFRASTRUCTURE // BROWSER RUNTIME",
    title: "Websandbox",
    description: [
      "Engineered an in-browser IDE capable of running Node.js entirely client-side using WebContainers.",
      "Achieved millisecond startup times by eliminating server-side container orchestration.",
      "Implemented real-time preview and file system manipulation."
    ],
    techStack: ["WebContainers", "React & Vite", "Monaco Editor", "Service Workers"],
    links: [
      { label: "Live Demo", href: "https://websandboxx.netlify.app/", primary: true },
      { label: "View Repository", href: "https://github.com/ogayanfe/websandbox" }
    ],
    figure: <WebsandboxPreview />,
    color: "blue"
  },
  {
    id: "birdie",
    tag: "SOCIAL // FULL-STACK",
    title: "Birdie",
    description: [
      "Developed a fully functioning social media application using Django and React.",
      "Implemented core social networking features including content posting, likes, comments, and a follow/unfollow system.",
      "Engineered a scalable REST API with Django Rest Framework and handled state management in React.",
      "Supports dynamic theme synchronization between dark and light modes."
    ],
    techStack: ["Django", "Django Rest Framework", "React", "React Router", "Tailwind CSS", "Material UI"],
    links: [
      { label: "Live Demo", href: "https://birdie.netlify.app/", primary: true },
      { label: "View Repository", href: "https://github.com/ogayanfe/birdie" }
    ],
    figure: <BirdieVisual />,
    color: "purple"
  }
];
