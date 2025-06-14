"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Instagram,
  Twitter,
  Facebook,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll, motion } from "motion/react";

export const HeroHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header className="fixed top-0 z-50 w-full px-4 sm:px-6">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-2xl transition-all duration-300",
          scrolled
            ? "bg-background/10 backdrop-blur-xl border-none border-border"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
          {/* Left - Social Icons */}
          <div className="flex items-center gap-3 text-white">
            <Link href="#" aria-label="Facebook">
              <Facebook fill="grey" className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter fill="grey" className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram fill="grey" className="h-4 w-4" />
            </Link>
          </div>

          {/* Desktop Nav - Left */}
          <div className="hidden lg:flex items-center gap-8 text-xs">
            <Link href="#" className="text-gold-hover text-white">
              SHOP
            </Link>
            <Link href="#" className="text-gold-hover text-white">
              PLAN MY KITCHEN
            </Link>
          </div>

          {/* Logo - Center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-10">
            <Logo />
          </Link>

          {/* Desktop Nav - Right */}
          <div className="hidden lg:flex items-center gap-8 text-xs">
            <Link href="#" className="text-gold-hover text-white">
              ABOUT US
            </Link>
            <Link href="#" className="text-gold-hover text-white">
              GALLERY
            </Link>
          </div>

          {/* Cart + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden sm:flex rounded-full px-4 bg-transparent text-white text-xs border border-white hover:text-[#C8A74B] hover:border-[#C8A74B] hover:bg-transparent transition-colors"
            >
              MY ORDER
              <ShoppingCart className="mr-2 ml-2 h-4 w-4" />
            </Button>
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Separator (visible only when not scrolled) */}
        {!scrolled && <div className="border-t border-border/50 w-full" />}

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6 bg-black/80 text-white px-6 py-4"
          >
            <div className="mt-4 flex flex-col items-center gap-4 text-sm ">
              <Link href="#" className="hover:text-foreground">
                SHOP
              </Link>
              <Link href="#" className="hover:text-foreground">
                PLAN MY KITCHEN
              </Link>
              <Link href="#" className="hover:text-foreground">
                ABOUT US
              </Link>
              <Link href="#" className="hover:text-foreground">
                GALLERY
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-4 bg-transparent text-white text-xs"
              >
                MY ORDER
                <ShoppingCart className="mr-2 ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
