import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-brand-gradient opacity-20"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-brand-gradient"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-medium mb-6">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-secondary" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-secondary">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-slate-400 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          
          <div className="w-24 h-1 bg-secondary mb-6 rounded-full"></div>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
