import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Participations() {
  const participations = [
    {
      role: "PyData 2025",
      event: null,
      year: "2025",
      location: "Amsterdam, Netherlands",
    },
    {
      role: "Enterprise Tech Leadership Summit",
      event: null,
      year: "2024",
      location: "Amsterdam, Netherlands",
    },
    {
      role: "International Joint Conference on Neural Networks",
      event: null,
      year: "2020",
      location: "Glasgow, Scotland",
    },
    {
      role: "World Congress on Computational Intelligence",
      event: null,
      year: "2020",
      location: "Rio de Janeiro, Brazil",
    },
    {
      role: "International Conference on Bioinformatics ",
      event: null,
      year: "2018",
      location: "Madrid, Spain",
    },
  ];

  return (
    <section id="participations" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Participations</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {participations.map((item, index) => (
              <ScrollReveal key={`${item.role}-${item.event}`} delay={index * 110}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-bold leading-tight">{item.role}</h3>
                        <Badge variant="secondary">{item.year}</Badge>
                      </div>
                      <p className="text-primary font-semibold">{item.event}</p>
                      <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
