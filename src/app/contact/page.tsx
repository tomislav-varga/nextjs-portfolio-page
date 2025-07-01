import { ContactSection } from "@/components/sections/contact-section"
import { Navbar } from "@/components/layout/navbar"

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="min-h-screen">
                <div className="container mx-auto px-4 py-16">
                    <ContactSection />
                </div>
            </main>
        </div>
    )
}

export const metadata = {
    title: 'Kontakt - codecrafter',
    description: 'Kontaktieren Sie mich für Ihre Webentwicklungs-Projekte.',
}
