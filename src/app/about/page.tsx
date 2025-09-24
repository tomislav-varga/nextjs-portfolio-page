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
            <h1 className="text-4xl font-bold mb-6">Über Mich</h1>
            <div className="prose dark:prose-invert">
              <p className="text-lg text-muted-foreground mb-6">
                I retrained to start my career in IT as a Windows IT Support Specialist, where I built a strong foundation in troubleshooting, customer support, and system administration. Along the way, I discovered a passion for programming and Linux, which inspired me to transition into DevOps and software development.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey into tech has also been a personal one—I overcame challenges in my past, which taught me resilience, discipline, and the importance of continuous growth. I now apply these qualities to my work in IT and my ongoing path toward becoming a DevOps engineer.
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