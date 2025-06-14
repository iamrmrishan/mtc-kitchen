'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    title: "Over 35 years experience designing handmade kitchens",
    content:
      "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    author: "Jane, Dundee",
  },
  {
    title: "Excellent support and craftsmanship",
    content:
      "The entire process from planning to installation was seamless. Truly bespoke service and beautifully crafted kitchen pieces.",
    author: "Mark, Glasgow",
  },
  {
    title: "Would highly recommend",
    content:
      "I’m so pleased with the quality and finish. The team were attentive and the installation team was incredibly professional.",
    author: "Susan, Bristol",
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  return (
      <section className="bg-muted py-16 px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto text-center relative">

        <p style={{ color: '#D4B254' }} className="text-xs tracking-wider uppercase mb-2">
          What our customers say
        </p>

        {/* Mobile: arrows inline with title */}
        <div className="flex sm:hidden items-center justify-center gap-2 mb-4">
          <button onClick={prev} aria-label="Previous">
            <Image src="/arrow-left.svg" alt="Previous" width={24} height={24} />
          </button>
          <h2 className="text-base font-semibold mx-2">{current.title}</h2>
          <button onClick={next} aria-label="Next">
            <Image src="/arrow-right.svg" alt="Next" width={24} height={24} />
          </button>
        </div>

        {/* Desktop: title without arrows */}
        <h2 className="hidden sm:block text-xl md:text-2xl font-semibold mb-4">
          {current.title}
        </h2>

        <p className="text-sm md:text-base text-muted-foreground mb-4">
          {current.content}
        </p>
        <p className="text-sm text-muted-foreground mb-6 italic">
          — {current.author}
        </p>

        <Button className="btn-gold text-white rounded-full text-sm min-w-[220px]">
          Frequently Asked Questions
        </Button>

        {/* Desktop/Tablet Arrows - sides of content */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-[-48px] top-1/2 -translate-y-1/2"
          aria-label="Previous"
        >
          <Image src="/arrow-left.svg" alt="Previous" width={28} height={28} />
        </button>

        <button
          onClick={next}
          className="hidden sm:block absolute right-[-48px] top-1/2 -translate-y-1/2"
          aria-label="Next"
        >
          <Image src="/arrow-right.svg" alt="Next" width={28} height={28} />
        </button>
      </div>
    </section>
  )
}
