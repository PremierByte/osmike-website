"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div 
            key={index}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white border-secondary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                className={`flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? 'bg-secondary text-white' : 'bg-slate-200 text-slate-500'}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
