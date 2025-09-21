import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Portrait Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <Image
            src="/IMG_1387.jpg"
            alt="Tomislav Varga Portrait"
            fill
            className="rounded-full object-cover border-4 border-background shadow-lg"
            priority
          />
        </div>
        
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