export type Project = {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "Website für ein lokales Unternehmen",
    description: "Eine moderne, responsive Website für Bayern Express, ein Wasserschaden-Sanierungsunternehmen aus München. Entwickelt mit Next.js und Tailwind CSS für schnelle Ladezeiten und optimale Benutzererfahrung.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    imageUrl: "/Bayern-Express-Professionelle-Wasserschaden-Behebung-07-14-2025_12_15_PM.jpg",
    githubUrl: "https://github.com/tomislav-varga/bayern-express",
    liveUrl: "https://bayern-express.vercel.app/"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    imageUrl: "/projects/taskmanager.jpg",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio.jpg",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com"
  }
]