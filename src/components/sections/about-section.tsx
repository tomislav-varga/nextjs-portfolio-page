export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Über Mich</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ich bin ein Full-Stack-Entwickler mit einer Leidenschaft für die Erstellung schöner und funktionaler Webanwendungen.
            Mit Expertise in Frontend- und Backend- Technologien strebe ich danach, skalierbare und
            wartbare Lösungen zu entwickeln, die großartige Benutzererfahrungen bieten.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Wenn ich nicht programmiere, kann man mich dabei finden, neue Technologien zu erkunden, zu Open-Source-Projekten
            beizutragen oder mein Wissen mit der Entwickler-Community zu teilen.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Klicke <a href="/about" className="font-bold">hier</a>, um mehr über mich zu erfahren.
          </p>
        </div>
      </div>
    </section>
  )
}