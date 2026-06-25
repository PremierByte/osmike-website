"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(220,53,69,0.1)] transition-all group relative overflow-hidden flex flex-col h-full"
    >
      {/* Decorative gradient corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gradient rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
      
      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary transition-colors duration-500">
        <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-500" />
      </div>
      
      <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-8 relative z-10 flex-grow">
        {description}
      </p>
      
      <Link 
        href={href}
        className="inline-flex items-center gap-2 font-bold text-primary group-hover:text-secondary transition-colors relative z-10 mt-auto"
      >
        Learn more
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
