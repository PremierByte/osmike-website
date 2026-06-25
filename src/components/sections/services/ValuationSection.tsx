import { CheckCircle2, Gem } from "lucide-react";

const benefits = [
  "Comprehensive comparative market analysis",
  "Assessment of unique architectural and historical value",
  "Algorithmic modeling for future appreciation",
  "Estate tax, insurance, and litigation appraisals",
  "Confidential portfolio stress-testing"
];

export default function ValuationSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <Gem className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Definitive appraisals for the world&apos;s most exclusive real estate.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Valuing luxury and ultra-luxury real estate is an art backed by quantitative science. Standard valuation models often fail to account for the intangibles: architectural pedigree, historical significance, and bespoke security features.
              </p>
              <p>
                Our valuation team combines deep data analytics with a nuanced understanding of the prestige market. Whether you require an appraisal for insurance, estate planning, acquisition, or divestiture, we provide defensible, highly accurate reports that withstand the strictest scrutiny.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">Valuation Matrix</h3>
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
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-primary flex items-center justify-center p-12 text-center shadow-2xl border border-slate-100">
              <div className="absolute inset-0 bg-brand-gradient opacity-20"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 blur-[90px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/40 blur-[90px] rounded-full"></div>
              
              <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Precision & Discretion</h4>
                <p className="text-slate-200">
                  &quot;Vantage provided a valuation report that captured the true intrinsic value of our heritage property, far exceeding standard appraisals.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
