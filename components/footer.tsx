import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    main: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Awards", href: "#awards" },
      { label: "Participations", href: "#participations" },
      { label: "Projects", href: "#projects" },
      { label: "Publications", href: "#publications" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Research", href: "#" },
      { label: "Teaching", href: "#" },
      { label: "Speaking", href: "#" },
    ],
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
        </div>

        <div className="pt-8 border-t border-border">

        </div>
      </div>
    </footer>
  )
}
