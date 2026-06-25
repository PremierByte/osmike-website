"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface DropdownProps {
  isOpen: boolean;
  items: DropdownItem[];
}

export default function Dropdown({ isOpen, items }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-full right-0 w-80 bg-primary border border-secondary/20 rounded-xl shadow-2xl overflow-hidden mt-2 p-2 z-50"
        >
          <div className="absolute inset-0 bg-brand-gradient opacity-5"></div>
          <div className="relative flex flex-col gap-1">
            {items.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
              >
                {item.icon && (
                  <div className="p-2 rounded bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                )}
                <span className="text-sm font-medium text-slate-200 group-hover:text-white">{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
