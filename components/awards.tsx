import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Awards() {
  const awards = [
    {
      title: "Top Developer",
      organization: "OpenAI Hackathon",
      year: "2025",
      description: "Awarded for outstanding technical contributions and innovation during the OpenAI Hackathon.",
      tags: ["Award"],
    },
    {
      title: "Outstanding Dissertation Award",
      organization: "University of Strasbourg",
      year: "2020",
      description: "Recognized for exceptional quality and impact of doctoral dissertation research.",
      tags: ["PhD", "Dissertation", "Award"],
    },
    {
      title: "First Prize for CG2019",
      organization: "Oregon State University",
      year: "2019",
      description: "Awarded first prize in the CG2019 academic competition.",
      tags: ["Competition", "First Prize"],
    },
    {
      title: "100% Ph.D. Scholarship",
      organization: "French Ministry of Education",
      year: "2017",
      description: "Fully funded doctoral scholarship awarded based on academic excellence.",
      tags: ["Scholarship", "PhD", "Funding"],
    },
  ]

  return (
    <section id="awards" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Honors</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <ScrollReveal key={`${award.title}-${award.year}`} delay={index * 120}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-bold leading-tight">{award.title}</h3>
                        <Badge variant="secondary">{award.year}</Badge>
                      </div>
                      <p className="text-primary font-semibold mb-2">{award.organization}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">{award.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {award.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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
