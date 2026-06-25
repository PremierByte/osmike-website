"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-brand-gradient opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-mesh opacity-40"></div>

      {/* Glowing accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Luxury</span> Living & Commercial Spaces
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Experience unmatched expertise in residential management, commercial brokerage, and luxury valuation. We elevate properties to their highest potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(220,53,69,0.4)] flex items-center justify-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center"
            >
              Consult an Expert
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
