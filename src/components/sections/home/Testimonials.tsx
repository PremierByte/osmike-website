"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vantage didn't just find us an office space; they identified a strategic headquarters that elevated our brand presence overnight.",
    author: "Elena Rodriguez",
    role: "CEO, TechNova Solutions",
    color: "from-secondary to-orange-500"
  },
  {
    quote: "Their luxury valuation team was meticulous. The insights provided were instrumental in maximizing our portfolio's ROI.",
    author: "James Sterling",
    role: "Principal Investor",
    color: "from-primary to-blue-900"
  },
  {
    quote: "Relocating our executives was seamless. The concierge team anticipated needs we didn't even know we had.",
    author: "Sarah Chen",
    role: "VP of HR, Global Dynamics",
    color: "from-purple-600 to-indigo-600"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-brand-gradient"></div>
      <div className="absolute inset-0 bg-mesh opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Client Success</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300">
            Don&apos;t just take our word for it. Hear from the visionaries and leaders who trust Vantage with their real estate assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-white/20 absolute top-8 right-8" />
              <p className="text-lg text-slate-200 mb-8 relative z-10 leading-relaxed font-medium">
                &quot;{item.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-sm text-secondary font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
