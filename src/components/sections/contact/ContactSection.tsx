import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Global Headquarters",
    details: "1200 Luxury Avenue, Suite 400\nNew York, NY 10001"
  },
  {
    icon: Phone,
    title: "Direct Line",
    details: "+1 (555) 123-4567\nAvailable 24/7 for urgent inquiries"
  },
  {
    icon: Mail,
    title: "Email",
    details: "inquiries@vantage.com\npartnerships@vantage.com"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Monday - Friday: 9:00 AM - 6:00 PM EST\nWeekend: By Appointment Only"
  }
];

export default function ContactSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-50">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-secondary/10 via-[#1a2b5c]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
          
          <div className="w-full lg:w-5/12">
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Whether you&apos;re looking to acquire a new asset, manage an existing portfolio, or explore strategic valuation, our dedicated advisory team is ready to assist you.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-4 -ml-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[#1a2b5c] flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(10,18,41,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1 text-lg">{info.title}</h4>
                    <p className="text-slate-600 whitespace-pre-line leading-relaxed">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-[#1a2b5c] rounded-[2.5rem] blur-2xl opacity-20 transform -rotate-2"></div>
            <div className="relative">
              <ContactForm />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
