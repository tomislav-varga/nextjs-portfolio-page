import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactSection } from "@/components/sections/contact-section"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="prose dark:prose-invert">
              <p className="text-lg mb-4">
                I'm a full-stack developer with a passion for building modern web applications.
                My journey in software development has led me to specialize in creating
                efficient, scalable, and user-friendly solutions.
              </p>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
} 