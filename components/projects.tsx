import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Projects() {
  const projects = [
    {
      title: "Semantic Search for E-Commerce Navigation",
      description:
        "Led the development of an AI-powered semantic search engine leveraging generative AI and contextual embeddings to better understand user intent and deliver highly relevant product recommendations, significantly improving customer engagement and satisfaction.",
      tags: ["Semantic Search", "Generative AI", "NLP", "E-Commerce"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Store Layout Optimization with Semantic Embeddings",
      description:
        "Developed AI-driven inventory and assortment optimization solutions using rich semantic embeddings, contributing to €80M in additional revenue while reducing stock costs by aligning supply with market trends and demand forecasts.",
      tags: ["Optimization", "Embeddings", "Supply Chain", "Retail AI"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Turnover Forecasting with DeepAR",
      description:
        "Built a large-scale turnover forecasting system using Amazon SageMaker DeepAR, complemented by XGBoost regression to analyze Covid-19 impacts on store performance and support strategic decision-making.",
      tags: ["Time Series", "DeepAR", "Forecasting", "XGBoost"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "AutoML for Scientific Article Relationship Analysis",
      description:
        "Designed an AutoML pipeline to identify and classify relationships between scientific articles with 90% accuracy, accelerating literature review workflows. Results published in IEEE WCCI 2020.",
      tags: ["AutoML", "Text Mining", "Research", "IEEE"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Neural Architecture Search for Time Series Prediction",
      description:
        "Researched and applied neural architecture search to deep residual networks for time series forecasting, achieving state-of-the-art accuracy and outperforming benchmarks such as HIVE-COTE. Published in IJCNN 2020.",
      tags: ["NAS", "Time Series", "Deep Learning", "Research"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Optimization with Transfer and Ensemble Learning",
      description:
        "Proposed a novel optimization framework combining transfer and ensemble learning to significantly reduce computational costs while maintaining high performance across diverse optimization problems.",
      tags: ["Optimization", "Transfer Learning", "Ensemble Methods", "ML"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Crowd Movement Prediction with I3D",
      description:
        "Enhanced the Two-Stream Inflated 3D (I3D) architecture for crowd movement prediction on the Crowd-11 dataset, using metaheuristic optimization to improve accuracy and real-time performance.",
      tags: ["Computer Vision", "I3D", "Crowd Analysis", "Deep Learning"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Multi-Objective AutoML Framework",
      description:
        "Developed a multi-objective AutoML framework that balances accuracy, robustness, and computational efficiency, enabling faster and more reliable deployment of machine learning models across applications.",
      tags: ["AutoML", "Multi-Objective Optimization", "MLOps", "AI Systems"],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: "Network Interdiction in Multi-Depot Routing",
      description:
        "Investigated network interdiction problems in multi-depot vehicle routing, applying combinatorial optimization and mathematical modeling to improve logistical efficiency under disruption scenarios.",
      tags: ["Operations Research", "Routing", "Optimization", "Logistics"],
      github: null,
      demo: null,
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Research Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 90}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
