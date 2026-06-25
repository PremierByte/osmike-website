import PageHeader from "@/components/ui/PageHeader";
import ServicesList from "@/components/sections/services/ServicesList";
import CtaBanner from "@/components/sections/home/CtaBanner";

export const metadata = {
  title: "Services | Vantage Real Estate",
  description: "Comprehensive real estate services tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Bespoke solutions designed to maximize asset value and streamline your real estate journey."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />
      
      <ServicesList />

      <CtaBanner />
    </>
  );
}
