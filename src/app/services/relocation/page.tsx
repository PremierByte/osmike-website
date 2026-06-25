import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/sections/home/CtaBanner";
import RelocationSection from "@/components/sections/services/RelocationSection";
import ServiceProcessSection from "@/components/sections/services/ServiceProcessSection";
import ServiceBenefitsSection from "@/components/sections/services/ServiceBenefitsSection";
import { Plane, Home, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Relocation & Concierge | Vantage Real Estate",
  description: "Seamless transitions for corporate executives and private wealth clients.",
};

export default function RelocationPage() {
  return (
    <>
      <PageHeader 
        title="Relocation & Concierge" 
        description="Executing flawless transitions for global executives and high-net-worth individuals."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Relocation", href: "/services/relocation" }
        ]}
      />
      <RelocationSection />
      <ServiceProcessSection 
        title="Concierge Relocation Process"
        steps={[
          { title: "Consultation", description: "Understanding family needs, schooling requirements, and lifestyle preferences." },
          { title: "Area Orientation", description: "Guided tours of prospective neighborhoods and communities." },
          { title: "Home Selection", description: "Securing the perfect primary residence or temporary executive housing." },
          { title: "Settling In", description: "Assistance with utilities, logistics, and local integration." }
        ]}
      />
      <ServiceBenefitsSection 
        title="The Concierge Difference"
        benefits={[
          { title: "Seamless Transitions", description: "We handle the logistics so you can focus on your life and career.", icon: <Plane className="w-7 h-7 text-secondary" /> },
          { title: "Local Expertise", description: "Deep knowledge of neighborhoods, schools, and local amenities.", icon: <Home className="w-7 h-7 text-secondary" /> },
          { title: "White-Glove Service", description: "Personalized care and attention to every detail of your move.", icon: <HeartHandshake className="w-7 h-7 text-secondary" /> }
        ]}
      />
      <CtaBanner />
    </>
  );
}
