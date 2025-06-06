export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 py-8">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'am <span className="text-violet-800">Tomi</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
          A passionate full-stack developer building modern web applications
          with Next.js and TypeScript.
        </p>
        <p className="text-lg text-muted-foreground max-w-[600px]">
           Click <a href="/about" className="text-violet-800 font-bold hover:text-violet-600 transition-colors duration-200">here</a> to get to know more about me.
        </p>
      </div>
    </section>
  )
} 