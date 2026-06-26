"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-primary aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury property showcase"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Building wealth through strategic real estate.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Since our inception, OSMIKE BDM has redefined the real estate landscape by combining localized market intelligence with global investment strategies. We don&apos;t just broker deals; we build long-term partnerships that secure and multiply your assets.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Industry Leaders</h4>
                    <p className="text-sm text-slate-600">Recognized for top-tier advisory and brokerage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Prime Locations</h4>
                    <p className="text-sm text-slate-600">Exclusive access to high-yield geographic zones.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors group"
              >
                Discover Our Story
                <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
