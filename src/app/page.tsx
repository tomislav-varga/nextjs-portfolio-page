import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 py-8">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm Tom
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              A passionate full-stack developer building modern web applications
              with Next.js and TypeScript.
            </p>
          </div>
        </section>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
