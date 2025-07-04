export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 py-8">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hallo, ich bin Tomi
        </h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
          Ein Full-Stack-Entwickler mit Begeisterung für moderne Tools und das Ziel, benutzerzentrierte Webapplikationen zu gestalten.
        </p>

      </div>
    </section>
  )
}