import { ContactForm } from "@/components/contact-form"
import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}