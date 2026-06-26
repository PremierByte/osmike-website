import { CheckCircle2, Building2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Deep market analysis and site selection",
  "Aggressive lease negotiation and structuring",
  "Off-market commercial opportunities",
  "Tenant representation and portfolio optimization",
  "Landlord representation and asset marketing"
];

export default function CommercialSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Strategic commercial placements that fuel corporate growth.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                The right commercial space is more than just overhead; it is a critical component of your brand identity and operational efficiency. Our commercial brokerage team leverages extensive market intelligence to secure spaces that align with your strategic objectives.
              </p>
              <p>
                Whether you are scaling a startup, relocating a corporate headquarters, or expanding a retail footprint, we navigate complex lease structures and fiercely negotiate on your behalf. We also represent landlords, designing high-impact marketing campaigns to attract premium, long-term tenants.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">Our Approach</h3>
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Commercial Real Estate"
                width={800}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-20 mix-blend-overlay"></div>
              
              <div className="relative z-10 bg-primary/90 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl w-full">
                <h4 className="text-2xl font-bold text-white mb-2">Strategic Advantage</h4>
                <p className="text-slate-300">
                  &quot;OSMIKE BDM secured a flagship location that not only fit our budget but completely elevated our brand visibility.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
