import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Publications() {
  const publications = [
    {
      title: "On the performance of deep learning for numerical optimization: an application to protein structure prediction",
      authors: "H. Rakhshani, L. Idoumghar, S. Ghambari, J. Lepagnot, M. Brévilliers",
      venue: "Applied Soft Computing • 2021",
      type: "Journal",
      citation: 10,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1568494621005172",
    },
    {
      title: "Neural architecture search for time series classification",
      authors: "H. Rakhshani, H.I. Fawaz, L. Idoumghar, G. Forestier, J. Lepagnot, J. Weber, et al.",
      venue: "International Joint Conference on Neural Networks • 2020",
      type: "Conference",
      citation: 37,
      link: "https://ieeexplore.ieee.org/document/9206721",
    },
    {
      title: "Automated machine learning for information retrieval in scientific articles",
      authors: "H. Rakhshani, B. Latard, M. Brévilliers, J. Weber, J. Lepagnot, G. Forestier, et al.",
      venue: "IEEE Congress on Evolutionary Computation • 2020",
      type: "Conference",
      citation: 11,
      link: "https://ieeexplore.ieee.org/document/9185893",
    },
    {
      title: "Speed up differential evolution for computationally expensive protein structure prediction problems",
      authors: "H. Rakhshani, L. Idoumghar, J. Lepagnot, M. Brévilliers",
      venue: "Swarm and Evolutionary Computation • 2019",
      type: "Journal",
      citation: 27,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2210650218301585",
    },
    {
      title: "Optimum design of tuned mass dampers using multi-objective cuckoo search for buildings under seismic excitations",
      authors: "S. Etedali, H. Rakhshani",
      venue: "Alexandria Engineering Journal • 2018",
      type: "Journal",
      citation: 68,
      link: "https://www.sciencedirect.com/science/article/pii/S1110016818301169",
    },
    {
      title: "Snap-drift cuckoo search: A novel cuckoo search optimization algorithm",
      authors: "H. Rakhshani, A. Rahati",
      venue: "Applied Soft Computing • 2017",
      type: "Journal",
      citation: 167,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1568494616305075",
    },
    {
      title: "Hierarchy cuckoo search algorithm for parameter estimation in biological systems",
      authors: "H. Rakhshani, E. Dehghanian, A. Rahati",
      venue: "Chemometrics and Intelligent Laboratory Systems • 2016",
      type: "Journal",
      citation: 25,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0169743916304026",
    },
  ];



  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Publications</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">

              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <ScrollReveal key={`${pub.title}-${pub.venue}`} delay={30}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-x-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold leading-tight">{pub.title}</h3>
                        <Button size="sm" variant="outline" asChild className="flex-shrink-0 bg-transparent">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>

                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant="secondary">{pub.type}</Badge>
                        <span className="text-sm font-medium text-primary">{pub.venue}</span>
                        <span className="text-sm text-muted-foreground">{pub.citation} citations</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <a href="https://scholar.google.com/citations?hl=nl&user=e0tI6ZcAAAAJ" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Publication List
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
