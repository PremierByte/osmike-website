import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata = {
  title: "Contact Us | OSMIKE BDM NIG LIMITED",
  description: "Get in touch with our advisory team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact OSMIKE BDM" 
        description="Connect with our global advisors to discuss your real estate objectives."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      
      <ContactSection />
    </>
  );
}
