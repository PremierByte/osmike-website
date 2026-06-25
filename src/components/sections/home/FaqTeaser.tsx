"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";
import Accordion from "@/components/ui/Accordion";

const quickFaqs = [
  {
    question: "What areas do you service?",
    answer: "We primarily service major metropolitan areas, specializing in prime residential neighborhoods and high-traffic commercial districts."
  },
  {
    question: "How is your valuation process different?",
    answer: "We combine traditional comparative market analysis with proprietary predictive algorithms to determine both current value and future potential."
  },
  {
    question: "Do you handle international relocations?",
    answer: "Yes, our concierge team is fully equipped to manage international corporate relocations, including temporary housing and legal documentation."
  }
];

export default function FaqTeaser() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <HelpCircle className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Clear Answers for Complex Decisions.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Real estate transactions involve significant variables. We believe in complete transparency to ensure you make the most informed choices.
              </p>
              
              <Link 
                href="/faq" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-primary hover:border-secondary hover:text-secondary transition-all shadow-sm"
              >
                View Full FAQ
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion items={quickFaqs} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
