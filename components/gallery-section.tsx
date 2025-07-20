"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  "/review-1.jpg",
  "/review-2.jpg",
  "/review-3.jpg",
  "/review-4.jpg",
  "/review-5.jpg",
  "/review-6.jpg",
  "/review-7.jpg",
  "/review-8.jpg",
  "/review-9.jpg",
  "/review-10.jpg",
  "/review-11.jpg",
  "/review-12.jpg",
  "/review-14.jpg",
  "/review-15.jpg",
  "/review-16.jpg",
  "/review-17.jpg",
  "/review-18.jpg",
  "/review-19.jpg",
  "/review-20.jpg",
  "/review-21.jpg",
  "/review-22.jpg",
  "/review-23.jpg",
  "/review-24.jpg",
  "/review-26.jpg",
  "/review-27.jpg",
  "/review-28.jpg",
  "/review-29.jpg",
  "/review-30.jpg",
  "/review-31.jpg",
  "/review-32.jpg",
  "/review-33.jpg",
  "/review-34.jpg",
  "/review-35.jpg",
  "/review-36.jpg",
  "/review-38.jpg",
  "/review-39.jpg",
  "/review-40.jpg",
  "/review-41.jpg",
  "/review-42.jpg",
  "/review-43.jpg",
  "/review-44.jpg",
  "/review-45.jpg",
  "/review-46.jpg",
  "/review-47.jpg",
  "/review-48.jpg",
  "/review-50.jpg",
  "/review-51.jpg",
  "/review-52.jpg",
  "/review-53.jpg",
  "/review-54.jpg",
  "/review-55.jpg",
  "/review-56.jpg",
  "/review-57.jpg",
  "/review-58.jpg",
  "/review-59.jpg",
];

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const showMore = () => {
    const newCount = Math.min(visibleCount + 4, galleryImages.length);
    setVisibleCount(newCount);
  };

  const showLess = () => {
    const newCount = Math.max(visibleCount - 4, 4);
    setVisibleCount(newCount);
  };

  return (
    <section
      className="w-full py-6 sm:py-12 px-4 md:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          style={{ color: "#3B6095" }}
          className="text-xs tracking-wider uppercase mb-2"
        >
          Trusted by People Like You
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          Customer Reviews Gallery
        </h1>

        {/* Mobile Carousel with Embla */}
        <div className="sm:hidden mb-8">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2">
              {galleryImages.map((src, idx) => (
                <CarouselItem key={idx} className="pl-2 basis-3/4">
                  <div className="aspect-square overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
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
        <div className="hidden sm:flex justify-center gap-4">
          {visibleCount > 4 && (
            <Button
              onClick={showLess}
              className="btn-gold text-white rounded-full px-6 py-2 text-sm"
            >
              View Less
            </Button>
          )}
          {visibleCount < galleryImages.length && (
            <Button
              onClick={showMore}
              className="btn-gold text-white rounded-full px-6 py-2 text-sm"
            >
              View More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
