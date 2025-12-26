"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  yOffset?: number
  once?: boolean
  threshold?: number | number[]
  rootMargin?: string
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 24,
  once = true,
  threshold,
  rootMargin,
}: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once, threshold, rootMargin })
  const style = {
    transitionDelay: `${delay}ms`,
    "--reveal-translate": `${yOffset}px`,
  } as React.CSSProperties

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[var(--reveal-translate)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
