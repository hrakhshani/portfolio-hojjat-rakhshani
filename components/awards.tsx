"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, FileText } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Awards() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = useState(false)
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
  const rewards = [
    {
      title: "CG2019 Prize",
      issuer: null,
      year: null,
      file: "/CG-SHOP_award_First.pdf",
      description: null,
    },
    {
      title: "Dissertation Award",
      issuer: null,
      year: null,
      file: "/HR_best_thesis_award.pdf",
      description: null,
    },
    {
      title: "PhD Diploma",
      issuer: null,
      year: null,
      file: "/PhD.pdf",
      description: null,
    },
  ]

  useEffect(() => {
    if (!carouselApi || isPaused) return
    const interval = window.setInterval(() => {
      carouselApi.scrollNext()
    }, 3200)
    return () => window.clearInterval(interval)
  }, [carouselApi, isPaused])

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

          <ScrollReveal delay={160}>
            <div className="mt-16 rounded-3l border border-border/60 bg-background/70 p-6 md:p-8 shadow-sm">

              <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background via-background/70 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/70 to-transparent" />

                <Carousel setApi={setCarouselApi} opts={{ align: "start", loop: true }} className="px-2">
                  <CarouselContent>
                    {rewards.map((reward) => (
                      <CarouselItem key={reward.title} className="md:basis-1/2 lg:basis-1/3">
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                  {reward.issuer}
                                </p>
                                <h4 className="text-lg font-semibold leading-tight">{reward.title}</h4>
                              </div>
                            </div>
                            <Badge variant="secondary">{reward.year}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{reward.description}</p>
                          <div className="relative h-48 md:h-56 overflow-hidden rounded-xl border border-border/60 bg-muted/20">
                            <object
                              data={reward.file}
                              type="application/pdf"
                              aria-label={`${reward.title} PDF preview`}
                              className="h-full w-full pointer-events-none"
                            >
                              <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                                PDF preview unavailable
                              </div>
                            </object>
                          </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 md:-left-6" />
                  <CarouselNext className="-right-4 md:-right-6" />
                </Carousel>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
