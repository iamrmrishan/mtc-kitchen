"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-4">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero4.jpg" // replace with your image
          alt="Footer background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo with separators */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="hidden sm:block h-px flex-1 bg-white/30" />
          <Logo />
          <div className="hidden sm:block h-px flex-1 bg-white/30" />
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-300">
          {/* About */}
          <div className="space-y-3 text-left">
            <p className="font-semibold text-white">SKYRIM TRAVELS</p>
            <Link href="#" className="text-gold-hover block text-xs">
              Skyrim Travels Private Limited is a a trusted and dynamic travel
              agency based in Sri Lanka, committed to making your travel
              experiences exceptional.
            </Link>
          </div>

          {/* Service */}
          <div className="space-y-3 text-left">
            <p className="font-semibold text-white">Our Contact Info</p>
            <Link href="#" className="text-gold-hover block text-xs">
              +94772670638, +94768506008
            </Link>
            <Link href="#" className="text-gold-hover block text-xs">
              info@skyrimtravels.lk
            </Link>
            <Link href="#" className="text-gold-hover block text-xs">
              No 133/8. Batakettara,
            </Link>
            <Link href="#" className="text-gold-hover block text-xs">
              Madapatha, Sri Lanka
            </Link>
          </div>

          {/* Follow */}
          <div className="space-y-3 text-center sm:text-left">
            <p className="font-semibold text-white">Follow Us</p>
            <div className="flex justify-center sm:justify-start gap-3 pt-1">
              <Link
                href="https://www.facebook.com/SkyrimTravelsLK"
                aria-label="Facebook"
                className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Facebook fill="black" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-6 text-xs text-muted-foreground">
          <p>Copyright Online SKYRIM TRAVELS 2025 - All rights reserved.</p>
          <p className="mt-1">
            Responsive website design, Development & Hosting by
            iamrmrishan(Github).
          </p>
        </div>
      </div>
    </footer>
  );
}
