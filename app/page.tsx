import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Awards } from "@/components/awards"
import { Participations } from "@/components/participations"
import { Projects } from "@/components/projects"
import { Publications } from "@/components/publications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Awards />
        <Participations />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
