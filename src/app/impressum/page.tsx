import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Impressum</h1>
            <div className="prose dark:prose-invert">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-4">
                Tom Varga<br />
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Deutschland
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
              <p className="mb-4">
                Telefon: +49 123 4567890<br />
                E-Mail: info@example.com
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="mb-4">
                Berufsbezeichnung: Full-Stack-Entwickler
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Redaktionell verantwortlich</h2>
              <p className="mb-4">
                Tom Varga<br />
                Musterstraße 123<br />
                12345 Musterstadt
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">EU-Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
              <p className="mb-4">
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
