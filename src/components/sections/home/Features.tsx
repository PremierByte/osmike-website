"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Key, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Security & Trust",
    description: "Every transaction is backed by rigorous legal frameworks and our sterling reputation for absolute transparency."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Valuation",
    description: "We utilize proprietary market analytics to ensure your property is valued accurately and competitively."
  },
  {
    icon: Key,
    title: "Exclusive Portfolio Access",
    description: "Gain entry to off-market luxury listings and prime commercial spaces before they reach the public."
  },
  {
    icon: Users,
    title: "Dedicated Concierge Team",
    description: "From viewing to closing, our elite concierge team handles every detail, providing a seamless experience."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Why Choose Vantage?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            We blend deep market insight with white-glove service to deliver extraordinary results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-secondary/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(220,53,69,0.1)] transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
