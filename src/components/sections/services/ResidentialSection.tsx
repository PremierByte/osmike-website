import { CheckCircle2, Home } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Comprehensive tenant screening and relationship management",
  "24/7 proactive maintenance and emergency response",
  "Detailed financial reporting and yield optimization",
  "Regulatory compliance and lease administration",
  "Preservation and enhancement of asset value"
];

export default function ResidentialSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <Home className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Protecting and enhancing your most valuable residential investments.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Our residential property management service is designed for discerning owners who demand excellence. We understand that luxury assets require a sophisticated approach that balances tenant satisfaction with rigorous asset protection.
              </p>
              <p>
                From marketing your property to high-net-worth demographics, to handling the minutiae of daily maintenance, our dedicated property managers operate as your trusted proxies. We utilize cutting-edge property technology to provide you with real-time insights into your portfolio&apos;s performance.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">The Vantage Advantage</h3>
            <ul className="flex flex-col gap-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-primary flex items-end justify-center p-8 text-center shadow-2xl border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Residential Property"
                width={800}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-20 mix-blend-overlay"></div>
              
              <div className="relative z-10 bg-primary/90 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl w-full">
                <h4 className="text-2xl font-bold text-white mb-2">Peace of Mind</h4>
                <p className="text-slate-300">
                  &quot;Vantage transformed our approach to property ownership. They handle the complexities, allowing us to simply enjoy the returns.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
