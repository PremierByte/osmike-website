"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    title: (
      <>
        Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Luxury</span> Living
      </>
    ),
    desc: "Experience unmatched expertise in residential management. We elevate properties to their highest potential."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: (
      <>
        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Commercial</span> Spaces
      </>
    ),
    desc: "Strategic brokerage and leasing solutions for visionaries and institutional investors worldwide."
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    title: (
      <>
        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Property</span> Valuation
      </>
    ),
    desc: "Data-backed decisions and precise valuation to secure your financial future in real estate."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Sliding Background Images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-primary/80 z-0"></div>
      
      {/* Dynamic Backgrounds & Gradients */}
      <div className="absolute inset-0 bg-brand-gradient opacity-40 mix-blend-overlay z-0"></div>
      <div className="absolute inset-0 bg-mesh opacity-50 z-0"></div>

      {/* Glowing accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Main Content with Mobile Padding */}
      <div className="container mx-auto px-6 py-32 md:py-20 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 md:mb-8">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto h-20 sm:h-auto">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl bg-secondary text-white font-bold text-base md:text-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(220,53,69,0.4)] flex items-center justify-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center"
            >
              Consult an Expert
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Slider indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-secondary w-8' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
