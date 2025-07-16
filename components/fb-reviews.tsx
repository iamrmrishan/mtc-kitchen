"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonialPosts = [
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid0MP91mXmLuxAKDAXcqZMSyZ7dNzMYLmKbAYKSomp6fp7afeyk6tZjzWWieZCe7pg4l&show_text=true&width=500",
    height: "400px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid0nkKZ9VMGL6mPKmhKsERS92ZVtukE441kEhvMKccyN5RFCbWFuZYoqpR8drCXcXNul&show_text=true&width=500",
    height: "300px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpamoda.herath%2Fposts%2Fpfbid0275vCHGiMihbWx1s5rSCJnFLFJJJZnszKEHRTwtHtuN1zJTHeHcKX7Cvt1eAF5W75l&show_text=true&width=500",
    height: "300px",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fkinkini.weeramanthri%2Fposts%2Fpfbid026Eo9WmdDHjxesbouNPUhjpsuLfy8unj6U67QrNdFQwmznwL2QqwUtduSZb9JdrUYl&show_text=true&width=500",
    height: "350px",
  },
  // {
  //   url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fthushi.dias%2Fposts%2Fpfbid025oEwwM1x3y929AtWHoG2tBZbtQiEMqBY425u1Du4Y22MyNH8UtdznFZXsBMvKLKCl&show_text=true&width=500",
  //   height: "350px",
  // },
  
];

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-3xl mx-auto text-center relative mt-5">
      <p
        style={{ color: "#3B6095" }}
        className="text-xs tracking-wider uppercase mb-2"
      >
        We&apos;re Just a Click Away
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
        Facebook Reviews
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {testimonialPosts.map((post, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <Card className="w-full max-w-xl">
                <CardContent className="p-0">
                  <iframe
                    src={post.url}
                    height={post.height}
                    width="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    allow="encrypted-media"
                    className="w-full"
                  ></iframe>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:flex justify-between items-center mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
