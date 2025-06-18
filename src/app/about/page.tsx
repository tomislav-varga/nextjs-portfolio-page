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
              <p className="text-lg mb-4">
                Ich bin ein Full-Stack-Entwickler mit einer Leidenschaft für die Entwicklung moderner Webanwendungen.
                Meine Reise in der Softwareentwicklung hat mich dazu gebracht, mich auf die Erstellung
                effizienter, skalierbarer und benutzerfreundlicher Lösungen zu spezialisieren.
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