"use client"

import { useEffect, useRef, useState } from "react"

type InViewOptions = {
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useInView<T extends HTMLElement>(options: InViewOptions = {}) {
  const { rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return { ref, inView }
}
