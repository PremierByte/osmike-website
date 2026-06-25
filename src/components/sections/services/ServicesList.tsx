"use client";

import ServiceCard from "@/components/sections/services/ServiceCard";
import { Home, Building2, TrendingUp, Gem, Plane } from "lucide-react";

const servicesList = [
  {
    id: "residential",
    title: "Residential Property Management",
    description: "End-to-end management of luxury residential assets. We handle tenant relations, proactive maintenance, and yield optimization with white-glove precision.",
    icon: Home
  },
  {
    id: "commercial",
    title: "Commercial Brokerage & Leasing",
    description: "Strategic placement and negotiation for prime commercial spaces. We align your operational needs with the optimal geographic footprint.",
    icon: Building2
  },
  {
    id: "investment",
    title: "Real Estate Investment Advisory",
    description: "Data-driven portfolio strategies. We identify high-yield opportunities, conduct rigorous due diligence, and provide ongoing asset performance metrics.",
    icon: TrendingUp
  },
  {
    id: "valuation",
    title: "Luxury Property Valuation",
    description: "Meticulous appraisals combining proprietary market algorithms with nuanced understanding of prestige assets and historical context.",
    icon: Gem
  },
  {
    id: "relocation",
    title: "Relocation & Concierge",
    description: "Seamless transitions for corporate executives and private wealth clients. We manage everything from neighborhood selection to logistical coordination.",
    icon: Plane
  }
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.id}`}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
