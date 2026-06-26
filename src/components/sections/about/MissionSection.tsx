import React from "react";

export default function MissionSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Our Mission</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
              To redefine luxury living and commercial success.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At OSMIKE BDM, we aim to bridge the gap between discerning investors and extraordinary properties. We don't just find spaces; we curate environments that foster growth, prosperity, and unparalleled comfort.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our commitment goes beyond closing deals. We build long-term partnerships through transparency, rigorous market analysis, and a relentless pursuit of excellence that secures our clients' financial futures.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary"></div>
            {/* Soft tint over the image area to match brand */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-secondary/40 z-10"></div>
            {/* Visual placeholder for architectural image */}
            <div className="absolute inset-0 bg-slate-800 opacity-50 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
