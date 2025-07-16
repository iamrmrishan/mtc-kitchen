import { TestimonialCarousel } from "@/components/fb-reviews";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import MidHeroSection from "@/components/mid-hero-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <MidHeroSection></MidHeroSection>
      <TestimonialsSection></TestimonialsSection>
      <TestimonialCarousel />
      <GallerySection></GallerySection>
    </div>
  );
}
