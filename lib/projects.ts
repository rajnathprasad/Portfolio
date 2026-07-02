import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: "IOTA",
    description:
      "A real-time technical interview platform with sub-100ms collaborative code editing and live video sessions. Built with Next.js 16, Socket.IO, and WebRTC, with AI-generated interview questions via Google Gemini and a proctoring system for tab-switch and activity monitoring.",
    tech: ["Next.js", "TypeScript", "Socket.IO", "WebRTC", "PostgreSQL", "Prisma"],
    liveUrl: "https://iota-one-swart.vercel.app/",
    githubUrl: "https://github.com/rajnathprasad/iota",
    videoUrl: "https://youtu.be/Y29bqOeGrAw",
  },
  {
    title: "FitVerse",
    description:
      "An AI fashion e-commerce platform with virtual try-on powered by IDM-VTON (ECCV 2024) via Hugging Face. Includes JWT authentication, persistent cart management, Razorpay payments, and an admin panel for product and order management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    liveUrl: "https://fitverse-frontend-nine.vercel.app/",
    githubUrl: "https://github.com/rajnathprasad/fitverse",
    videoUrl: "https://youtu.be/anL_vTmWPjw",
  },
  {
    title: "Chikitsa — Prototype",
    description:
      "A fingerprint-enabled healthcare prototype for instant patient admission, integrating Aadhaar, ABHA, Ayushman Bharat, and medical history into a unified platform. Features blood bank inventory management with location-based SMS alerts to compatible donors during blood shortages.",
    tech: ["React.js"],
    liveUrl: "https://chikitsa-ruby.vercel.app/",
    githubUrl: "https://github.com/rajnathprasad/chikitsa-vibecoded",
    videoUrl: "https://youtu.be/yFztV-7ZLMQ",
  },
];