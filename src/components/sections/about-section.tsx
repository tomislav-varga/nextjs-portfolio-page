export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            I’ve overcome significant personal challenges, which gave me the perseverance and focus I now apply to programming.
          </p>
              <p className="text-lg text-muted-foreground mb-6">
                Click <a href="#" className="font-bold">here</a> to learn more about me.
              </p>
        </div>
      </div>
    </section>
  )
}