"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { AnimatedGrid } from "@/components/animated-grid"
import Image from "next/image"

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/professional-headshot-ai-researcher.jpg"
              alt="Profile picture"
              width={160}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>


          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                Hojjat Rakhshani, PhD
              </span>
            </div>

            <h1 className="text-5xl md:text-5xl font-bold tracking-tight">
              AI Researcher
            </h1>
            <div className="flex items-center justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/hrakhsha" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/hrakhsha/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hojjatrakhshani@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
            <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify"
            style={{
              width: "80%"
            }}
          >
            Dr. Rakhshani’s research agenda encompasses sample-efficient and continual learning, semantic search, efficient on-device generative AI, and optimization techniques, with an emphasis on building stable, scalable, and cost-efficient AI systems. His work focuses on reducing training and deployment costs, minimizing inference latency, and ensuring robust performance in real-world, resource-constrained environments.
          </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="/HOJJAT_RAKHSHANI.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
