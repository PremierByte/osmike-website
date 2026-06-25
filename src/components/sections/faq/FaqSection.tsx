import Accordion from "@/components/ui/Accordion";

const allFaqs = [
  {
    question: "What geographical areas do you service?",
    answer: "We primarily service major metropolitan areas globally, specializing in prime residential neighborhoods, high-traffic commercial districts, and emerging luxury markets. Our reach extends to international hubs through our established network of partners."
  },
  {
    question: "How is your property valuation process different?",
    answer: "We combine traditional comparative market analysis with proprietary predictive algorithms. This dual approach allows us to determine not just the current market value, but also the future potential and investment viability of the asset."
  },
  {
    question: "Do you handle international corporate relocations?",
    answer: "Yes, our concierge team is fully equipped to manage international corporate relocations. This includes sourcing temporary and permanent housing, coordinating logistics, and navigating local legal documentation to ensure a seamless transition for executives."
  },
  {
    question: "What is your fee structure?",
    answer: "Our fee structure is transparent and tailored to the specific services engaged. Whether it's a flat fee for valuation services or a commission-based model for brokerage, we ensure all costs are clearly outlined and agreed upon prior to engagement."
  },
  {
    question: "Can you assist with off-market property acquisitions?",
    answer: "Absolutely. A significant portion of our transactions occur off-market. Through our extensive network and established industry relationships, we provide our clients with exclusive access to premium properties before they are publicly listed."
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer: "We employ enterprise-grade security protocols for all digital communications and data storage. Client confidentiality is paramount; we adhere strictly to NDAs and operate with the utmost discretion in all our dealings."
  }
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <Accordion items={allFaqs} />
      </div>
    </section>
  );
}
