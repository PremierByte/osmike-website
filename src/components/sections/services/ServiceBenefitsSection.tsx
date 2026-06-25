"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceBenefitsSectionProps {
  title?: string;
  description?: string;
  benefits: Benefit[];
}

export default function ServiceBenefitsSection({
  title = "Why Choose Vantage",
  description = "Unparalleled expertise and a commitment to excellence.",
  benefits
}: ServiceBenefitsSectionProps) {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent mb-6"></div>
          </div>
          <div className="w-full lg:w-1/2 pb-2">
            <p className="text-lg text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/50 rounded-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
