"use client";

import { motion } from "framer-motion";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessSectionProps {
  title?: string;
  description?: string;
  steps: ProcessStep[];
}

export default function ServiceProcessSection({ 
  title = "Our Process", 
  description = "A meticulous, step-by-step approach designed to deliver exceptional results.",
  steps 
}: ServiceProcessSectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-6">{title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for lg screens */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-[#1a2b5c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-2xl font-bold text-primary group-hover:text-white relative z-10 transition-colors duration-300">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
