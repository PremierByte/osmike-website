import { Building2, Globe, Shield, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity First", desc: "Absolute transparency in every transaction." },
  { icon: Target, title: "Precision", desc: "Data-backed decisions for optimal outcomes." },
  { icon: Globe, title: "Global Reach", desc: "Access to international prime markets." },
  { icon: Building2, title: "Excellence", desc: "Uncompromising standards in service delivery." }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
              Transforming the real estate landscape through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-orange-500">strategic insight</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto mb-8"></div>
            <div className="prose prose-lg text-slate-600 mx-auto max-w-3xl">
              <p className="mb-6 text-xl leading-relaxed">
                Founded with a singular vision to elevate the standard of real estate advisory, Vantage has grown from a boutique firm into a premier agency trusted by visionaries, leaders, and institutional investors worldwide.
              </p>
              <p className="mb-12 text-lg">
                Our approach is fundamentally different. We view real estate not merely as transactions, but as strategic assets that require meticulous management, precise valuation, and bold positioning.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="group p-10 bg-white border border-slate-100 hover:border-secondary/30 rounded-3xl transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(220,53,69,0.1)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 group-hover:to-secondary/10 transition-all duration-500"></div>
                <div className="relative z-10 flex flex-col items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-secondary/10 transition-all duration-300">
                    <val.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3 text-2xl tracking-wide">{val.title}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{val.desc}</p>
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
