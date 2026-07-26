import {
  SiSpringboot,
  SiReact,
  SiBootstrap,
  SiAppwrite,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGooglegemini,
} from "react-icons/si";

const projects = [
  {
    id: "clauseguard",
    name: "ClauseGuard",
    tagline: "3-agent AI pipeline for contract risk triage",
    problem:
      "Contract review is slow and inconsistent — legal and business teams need fast, repeatable risk triage on clause-level terms instead of a manual read-through.",
    role: "Designed and built the full 3-agent pipeline end to end: extraction, risk classification, and recommendation generation.",
    outcome:
      "Extracts contract terms, classifies clause-level risk severity against a fixed rubric, and generates plain-language negotiation recommendations — turning a manual review pass into a consistent, automated triage step.",
    stack: [
      { label: "Spring AI", icon: SiSpringboot },
      { label: "Azure OpenAI", icon: null },
      { label: "Azure Document Intelligence", icon: null },
      { label: "Java", icon: null },
    ],
    repo: "https://github.com/saicherishpotluri/clauseguard",
  },
  {
    id: "fitness-ai-companion",
    name: "Fitness AI Companion",
    tagline: "AI-powered fitness and nutrition planning",
    problem:
      "Personalized fitness and nutrition planning usually requires a coach or several disconnected tools stitched together.",
    role: "Built the fullstack app — React/Bootstrap frontend wired to a Spring AI backend integrating OpenAI.",
    outcome:
      "Ships BMI calculation, personalized exercise planning, and recipe recommendations in a single AI-powered web app.",
    stack: [
      { label: "React", icon: SiReact },
      { label: "Bootstrap", icon: SiBootstrap },
      { label: "Spring AI", icon: SiSpringboot },
      { label: "OpenAI", icon: null },
    ],
    repo: "https://github.com/saicherishpotluri/fitness-ai-companion-app",
  },
  {
    id: "sticky-notes",
    name: "Sticky Notes Application",
    tagline: "Persistent notes on a BaaS backend",
    problem:
      "Needed a lightweight, persistent note-taking tool without standing up and maintaining custom backend infrastructure.",
    role: "Built the frontend and wired it to Appwrite's BaaS for auth-free data persistence.",
    outcome:
      "Responsive note creation and persistence built with ES6+ and async/await patterns for maintainable asynchronous workflows.",
    stack: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "Appwrite", icon: SiAppwrite },
    ],
    repo: "https://github.com/saicherishpotluri/stickyNotes-React",
  },
  {
    id: "ai-image-recognition",
    name: "AI Image Recognition with Gemini",
    tagline: "Multimodal image + text analysis tool",
    problem:
      "Wanted a simple, self-hosted way to extract structured insight from images and text using a multimodal model.",
    role: "Built server routing and image-upload handling, and integrated Gemini for multimodal analysis.",
    outcome:
      "A multimodal tool that processes image and text input via Google's Gemini AI model and returns context-aware, AI-driven responses.",
    stack: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express", icon: SiExpress },
      { label: "Multer", icon: null },
      { label: "Gemini AI", icon: SiGooglegemini },
    ],
    repo: "https://github.com/saicherishpotluri/image-reconition-app",
  },
];

export default projects;
