import { CheckCircle2, TrendingUp } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Bespoke portfolio strategy and asset allocation",
  "Rigorous financial modeling and risk assessment",
  "Identification of emerging and undervalued markets",
  "M&A and joint venture real estate structuring",
  "Post-acquisition performance tracking"
];

export default function InvestmentSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Capitalizing on market shifts with precision.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Real estate investment requires more than capital; it requires foresight. Our advisory team partners with private wealth, institutional investors, and family offices to construct resilient, high-yield portfolios.
              </p>
              <p>
                We move beyond basic cap rates, utilizing deep demographic data, infrastructural development plans, and macroeconomic indicators to identify assets before they peak. Whether you are seeking long-term generational wealth preservation or aggressive short-term yields, we provide the intelligence needed to execute flawlessly.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">Our Expertise</h3>
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
                src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=1200&auto=format&fit=crop"
                alt="Investment Real Estate"
                width={800}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-20 mix-blend-overlay"></div>
              
              <div className="relative z-10 bg-primary/90 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl w-full">
                <h4 className="text-2xl font-bold text-white mb-2">Alpha Generation</h4>
                <p className="text-slate-300">
                  &quot;Their advisory team identified an emerging submarket two years before the institutional capital arrived. Exceptional foresight.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
