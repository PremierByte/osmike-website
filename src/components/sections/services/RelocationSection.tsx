import { CheckCircle2, Plane } from "lucide-react";

const benefits = [
  "Customized neighborhood selection and orientation",
  "Temporary housing and permanent acquisition",
  "School advisory and local logistics",
  "Legal, visa, and documentation support",
  "White-glove moving and settling-in services"
];

export default function RelocationSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <Plane className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Your seamless entry into a new market.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p>
                Relocating across borders or state lines involves profound logistical and personal challenges. Our dedicated concierge team ensures that executives and private clients experience a transition completely devoid of friction.
              </p>
              <p>
                We act as your personal ambassadors to a new city. From identifying the perfect neighborhood that aligns with your lifestyle, to coordinating elite moving services, managing school enrollments, and setting up domestic staff, we handle every detail so you can remain focused on what matters most.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">Concierge Services</h3>
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
              <div className="absolute inset-0 bg-mesh opacity-30"></div>
              
              <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Frictionless Transitions</h4>
                <p className="text-slate-200">
                  &quot;Our CEO&apos;s relocation from London to New York was entirely seamless. Vantage anticipated every need before we even voiced it.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
