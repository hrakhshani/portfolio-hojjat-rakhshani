import { Card } from "@/components/ui/card"
import { Brain, Code, Lightbulb, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Pioneering research in deep learning, NLP, and computer vision",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building scalable AI systems and production-ready applications",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring novel approaches to solve complex problems",
    },
    {
      icon: Users,
      title: "Speaking",
      description: "Sharing knowledge through talks, workshops, and publications",
    },
  ]

  return (
    <section id="about" className="py-1 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

        </div>
      </div>
    </section>
  )
}
