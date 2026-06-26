"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/30 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Elevate Your Real Estate Strategy?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-medium">
            Connect with our advisory team to discuss your objectives and discover how OSMIKE BDM can deliver unparalleled results.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold text-lg rounded-xl hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
          >
            Schedule a Consultation
            <ArrowRight className="w-6 h-6 text-secondary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
