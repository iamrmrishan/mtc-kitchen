import { TestimonialCarousel } from "@/components/fb-reviews";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import MidHeroSection from "@/components/mid-hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import WhatsappWrapper from "@/components/whatsapp-chat-wrapper";

export default function Home() {
  return (
    <div>
      <div id="flights">
        <HeroSection></HeroSection>
      </div>
      <div id="services">
        <MidHeroSection></MidHeroSection>
      </div>
      <div id="findus">
        <TestimonialsSection></TestimonialsSection>
      </div>
      <div id="reviews">
        <TestimonialCarousel />
        <GallerySection></GallerySection>
      </div>
        <WhatsappWrapper/>
    </div>
  );
}
