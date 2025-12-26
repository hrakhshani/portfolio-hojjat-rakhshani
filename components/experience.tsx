import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Senior AI Research Scientist",
      organization: "Decathlon Digital",
      period: "2021 - Present",
      description:
        "Leading research initiatives in recommendation, Forecasting, transformer architectures and multimodal learning.",
      skills: ["Python", "PyTorch", "AWS", "DeepAR", "XGBoost"],
    },
    {
      type: "work",
      title: "Machine Learning Researcher",
      organization: "Université de Haute-Alsace",
      period: "2020 - 2021",
      description:
        "Developed AutoML pipelines systems to enhance the predictive accuracy of the vanilla deep learning models ",
      skills: ["Python", "PyTorch", "HPC", "Optimization"],
    },
    {
      type: "education",
      title: "Ph.D. in Computer Science",
      organization: "Université de Haute-Alsace",
      period: "2017 - 2020",
      description: 'Dissertation: The interplay of deep learning and optimization',
      skills: ["Python", "PyTorch", "CUDA", "Optimization", "Deep Learning", "Research", "Publications", "Teaching"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">

              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollReveal key={`${exp.title}-${exp.period}`} delay={index * 140}>
                  <div
                    className={`relative flex items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8`}
                  >
                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg z-10">
                      {exp.type === "work" ? (
                        <Briefcase className="h-6 w-6" />
                      ) : (
                        <GraduationCap className="h-6 w-6" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-24 md:pl-0`}>
                      <Card
                        className={`p-6 hover:shadow-lg transition-all duration-300 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <div className="mb-2">
                          <Badge variant="secondary" className="mb-2">
                            {exp.period}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-3">{exp.organization}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed md:text-left">{exp.description}</p>
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
