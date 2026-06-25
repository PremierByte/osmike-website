import { Building2, Globe, Shield, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity First", desc: "Absolute transparency in every transaction." },
  { icon: Target, title: "Precision", desc: "Data-backed decisions for optimal outcomes." },
  { icon: Globe, title: "Global Reach", desc: "Access to international prime markets." },
  { icon: Building2, title: "Excellence", desc: "Uncompromising standards in service delivery." }
];

export default function AboutSection() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1a2b5c]/50 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Transforming the real estate landscape through <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary/80 to-secondary">strategic insight</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto mb-8"></div>
            <div className="prose prose-lg text-slate-300 mx-auto max-w-3xl">
              <p className="mb-6 text-xl leading-relaxed">
                Founded with a singular vision to elevate the standard of real estate advisory, Vantage has grown from a boutique firm into a premier agency trusted by visionaries, leaders, and institutional investors worldwide.
              </p>
              <p className="mb-12 text-lg">
                Our approach is fundamentally different. We view real estate not merely as transactions, but as strategic assets that require meticulous management, precise valuation, and bold positioning.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Glowing connecting lines */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 opacity-50 pointer-events-none"></div>

            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="group p-10 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-secondary/50 rounded-3xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 group-hover:to-secondary/20 transition-all duration-500"></div>
                <div className="relative z-10 flex flex-col items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a2b5c] to-primary border border-secondary/30 flex items-center justify-center shadow-[0_0_20px_rgba(220,53,69,0.2)] group-hover:shadow-[0_0_30px_rgba(220,53,69,0.4)] transition-all duration-300">
                    <val.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-2xl tracking-wide">{val.title}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
