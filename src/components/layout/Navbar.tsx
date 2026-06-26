"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, Home, TrendingUp, Gem, Plane, Menu, X } from "lucide-react";

const services = [
  { name: "Residential Property Management", icon: Home, href: "/services/residential" },
  { name: "Commercial Brokerage & Leasing", icon: Building2, href: "/services/commercial" },
  { name: "Real Estate Investment Advisory", icon: TrendingUp, href: "/services/investment" },
  { name: "Luxury Property Valuation", icon: Gem, href: "/services/valuation" },
  { name: "Relocation & Concierge", icon: Plane, href: "/services/relocation" },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-primary shadow-lg">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          VANTAGE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:text-secondary transition-colors font-medium">
            Home
          </Link>

          <Link href="/about" className="text-slate-300 hover:text-secondary transition-colors font-medium">
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/services" className="text-slate-300 hover:text-secondary transition-colors flex items-center gap-1 font-medium py-2">
              Services <ChevronDown className="w-4 h-4" />
            </Link>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-full right-0 w-80 bg-primary border border-secondary/20 rounded-xl shadow-2xl overflow-hidden mt-2 p-2"
                >
                  <div className="absolute inset-0 bg-brand-gradient opacity-5"></div>
                  <div className="relative flex flex-col gap-1">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                          <service.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-secondary text-white font-medium hover:bg-orange-600 transition-colors shadow-[0_0_15px_rgba(220,53,69,0.4)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white hover:text-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-primary border-b border-primary overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-slate-300 hover:text-secondary transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-secondary transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center justify-between text-slate-400 font-medium text-lg tracking-wider w-full text-left"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-3 pt-2">
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            className="flex items-center gap-3 text-slate-300 hover:text-secondary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <service.icon className="w-4 h-4" />
                            <span className="text-base">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="mt-4 px-6 py-3 text-center rounded-full bg-secondary text-white font-medium hover:bg-orange-600 transition-colors shadow-[0_0_15px_rgba(220,53,69,0.4)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
