import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { companyInfo } from "@/config/companyInfo";

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-brand-gradient opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
              <Image src="/logo.png" alt={`${companyInfo.shortName} Logo`} width={48} height={48} className="object-contain" />
              {companyInfo.shortName}
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Contact', 'Services', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-400 hover:text-secondary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-secondary" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Residential Property',
                'Commercial Brokerage',
                'Investment Advisory',
                'Property Valuation',
                'Relocation Services'
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-slate-400 hover:text-secondary transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {companyInfo.phones.map(phone => <span key={phone}>{phone}</span>)}
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {companyInfo.emails.map(email => <span key={email}>{email}</span>)}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name} - RC: {companyInfo.rcNumber}. All rights reserved. - Developed by <Link href="https://premierbyte.ng" className="hover:text-white transition-colors">PremierByte</Link></p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
