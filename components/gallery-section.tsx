"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const galleryImages = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery3.png",
  "/gallery2.png",
  "/gallery1.png",
  "/gallery4.png",
]

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(4)

  const showMore = () => setVisibleCount(galleryImages.length)
  const showLess = () => setVisibleCount(4)

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
       <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          Customer Reviews Gallery
        </h1>

        {/* Mobile Carousel */}
        <div className="flex gap-2 overflow-x-auto scroll-smooth sm:hidden mb-8">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="min-w-[75%] aspect-square flex-shrink-0 overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {galleryImages.slice(0, visibleCount).map((src, idx) => (
            <div
              key={idx}
              className="w-full aspect-square overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* View More / Less Buttons (Tablet/Desktop only) */}
        <div className="hidden sm:block">
          {visibleCount < galleryImages.length ? (
            <Button
              onClick={showMore}
              className="btn-gold text-white rounded-full px-6 py-2 text-sm"
            >
              View More
            </Button>
          ) : (
            <Button
              onClick={showLess}
              className="btn-gold text-white rounded-full px-6 py-2 text-sm"
            >
              View Less
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}


