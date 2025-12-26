"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: null,
      link: "mailto:hojjatrakhshani@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Amsterdam",
      link: null,
    }
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Connect</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Interested in collaboration, speaking opportunities, or just want to chat about AI? I&apos;d love to
                hear from you.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const name = encodeURIComponent(formData.name || "")
                    const email = encodeURIComponent(formData.email || "")
                    const subject = encodeURIComponent(formData.subject || "")
                    const body = encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message || ""}`
                    )
                    window.open(`mailto:hojjatrakhshani@gmail.com?subject=${subject}&body=${body}`, "_blank")
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
