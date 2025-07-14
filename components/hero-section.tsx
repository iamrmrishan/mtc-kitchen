"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FlightBookingForm from "./flight-booking-form";

const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <section className="relative min-h-screen">
        {/* Carousel Background */}
        <div className="absolute inset-0 -z-10">
          <div className="overflow-hidden h-screen w-full" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((src, i) => (
                <div key={i} className="flex-[0_0_100%] relative h-full w-full">
                  <Image
                    src={src}
                    alt={`Kitchen ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex h-screen items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <p className="mb-2 text-xs text-white/80 tracking-wide uppercase">
             plan your journey today
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Book Your Trip with
              <br />
              SKYRIM TRAVELS
            </h1>

            <div className="mt-8">
 <FlightBookingForm></FlightBookingForm>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1 w-8 rounded-full transition-all duration-300",
                    current === i ? "btn-gold" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
