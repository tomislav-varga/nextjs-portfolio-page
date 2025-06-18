import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = {
  frontend: [
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
  ],
  tools: [
    "Git",
    "Docker",
    "AWS",
  ],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fähigkeiten & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Frontend-Entwicklung</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Backend-Entwicklung</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tools & Technologien</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}