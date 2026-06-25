import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata = {
  title: "Contact Us | Vantage Real Estate",
  description: "Get in touch with our advisory team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Vantage" 
        description="Connect with our global advisors to discuss your real estate objectives."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      
      <ContactSection />
    </>
  );
}
