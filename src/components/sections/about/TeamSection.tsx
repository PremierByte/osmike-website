import React from "react";

const team = [
  {
    name: "Eleanor Sterling",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Marcus Vance",
    role: "Head of Commercial Real Estate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sophia Chen",
    role: "Director of Global Investments",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Leadership Team</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Guiding OSMIKE BDM with decades of combined experience, our leadership is dedicated to securing the best outcomes for our clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-4">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
