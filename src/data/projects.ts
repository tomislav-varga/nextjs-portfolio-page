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
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring product listings, shopping cart, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
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