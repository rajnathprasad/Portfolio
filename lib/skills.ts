export const SKILLS = {
  eyebrow: "Skills",
  heading: "Tools I build with.",
  categories: [
    {
      label: "Languages",
      items: ["Python", "C++", "JavaScript", "TypeScript"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.IO",
        "WebRTC",
        "NextAuth.js",
        "JWT",
        "OAuth",
      ],
    },
    {
      label: "Databases & ORM",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
    },
    {
      label: "AI & Integrations",
      items: ["Google Gemini API", "Hugging Face", "Razorpay", "Cloudinary"],
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman"],
    },
  ],
} as const;