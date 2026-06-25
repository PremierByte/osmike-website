Role: You are an expert Senior Frontend Developer and UI/UX Designer specializing in modern, high-performance web applications.

Task: Build a complete, highly responsive, light-theme multi-page Real Estate Agency website using the given project structure, Tailwind CSS, TypeScript, and Framer Motion.

Design Philosophy: High-fidelity, vibrant, and corporate-premium. Move completely away from strict minimalism. The UI must look colorful, dynamic, and production-ready by utilizing rich multi-color gradients, colored glassmorphism components, intentional background tint layers, micro-patterns, and energetic visual accents that guide the user's eye.

Brand Identity & Color Tokens:
- Primary Color: `#0A1229` (Deep, premium midnight navy) -> Maps to `bg-primary`, `text-primary`, `border-primary`.
- Secondary Color: `#dc3545` (Vibrant accent red) -> Maps to `bg-secondary`, `text-secondary`, `border-secondary`.
- Accent Gradient Tracks: Combine primary and secondary tones into modern linear gradients (e.g., `from-[#0A1229] via-[#1a2b5c] to-[#dc3545]`) for headers, image overlays, and high-impact background spots.
- Background Layering: Prevent flat layouts by alternating soft tinted backgrounds (e.g., `#f4f6fc`, `bg-slate-50`) with vibrant, deep color-blocked sections (`bg-primary`) featuring glowing colorful mesh patterns and sharp secondary accent outlines.

### 1. Repository & File Structure
Adhere strictly to a granular, component-driven architecture. Every logical visual section wrapped in a `<section>` tag must live in its own standalone file under the `sections/` directory. Implement this exact structure without omitting any files:

- tailwind.config.ts (Configured with custom brand color extensions, custom gradients, and container defaults)
- src/app/global.css (Tailwind base layers, background mesh classes, and global smooth scrolling)
- src/app/layout.tsx (Global layout wrapper, metadata, and Plus Jakarta Sans font loading)

- src/app/page.tsx (Home Page route - purely orchestrates modular section components)
- src/app/about/page.tsx (Dedicated About Page route featuring the shared PageHeader and unique About sections)
- src/app/services/page.tsx (Main Services Page route summarizing the 5 key services)
- src/app/faq/page.tsx (Dedicated interactive FAQ Page route utilizing the shared PageHeader)
- src/app/contact/page.tsx (Contact Page route featuring the PageHeader and the functional form grid layout)

- src/components/layout/Navbar.tsx (Responsive vibrant header with a multi-service hover dropdown card)
- src/components/layout/Footer.tsx (Comprehensive deep-primary footer with site links and secondary CTA)

- src/components/ui/PageHeader.tsx (Vibrant inner-page header utilizing colorful linear gradients, dynamic breadcrumbs, and secondary accent dividers)
- src/components/ui/Dropdown.tsx (Reusable Framer Motion navigation dropdown component with rich hover-color states)
- src/components/ui/Accordion.tsx (Reusable Framer Motion accordion for FAQs with open-state background shifts)
- src/components/ui/ContactForm.tsx (Fully styled, controlled validation contact form featuring active focused shadows)

- src/components/sections/home/Hero.tsx (High-converting hero section component featuring a full, rich `bg-primary` deep navy background, glowing mesh gradients, high-contrast text, and primary/secondary button triggers)
- src/components/sections/home/Features.tsx (Feature section grid component showcasing agency strengths using colorful card borders and glowing active states)
- src/components/sections/home/AboutTeaser.tsx (Standalone section component presenting an energetic summary of the agency's history and metrics)
- src/components/sections/home/Testimonials.tsx (Standalone section component featuring stylized, colorful client feedback cards with Framer Motion entry physics)
- src/components/sections/home/FaqTeaser.tsx (Standalone teaser section component funneling users toward the deep FAQ page)
- src/components/sections/home/CtaBanner.tsx (High-impact standalone section component styled with a vibrant brand gradient mesh over a `bg-primary` container to maximize navigation to the contact page)
- src/components/sections/services/ServiceCard.tsx (Reusable service item component utilizing rich multi-color icon backdrops)

### 2. Page & Feature Requirements
- **No Property Listings:** Do NOT include apartment/property listings, property grids, or map/search bars for buying/renting.
- **Navigation Dropdown:** The Navbar must feature an interactive "Services" dropdown linking directly to these 5 distinct services:
  1. Residential Property Management
  2. Commercial Brokerage & Leasing
  3. Real Estate Investment Advisory
  4. Luxury Property Valuation
  5. Relocation & Concierge
- **Strict Section-Extraction Pattern:** Ensure that EVERY page router file (`page.tsx`) across the entire project (including subpages like `/services/residential/page.tsx`) contains zero direct layout markup inside raw `<section>` elements. All `<section>` blocks must be meticulously extracted into their designated component files inside the `src/components/sections/` directory and imported into the `page.tsx`.
- **Form Component:** The Contact page must contain an elegant, functional form grid (Name, Email, Service Choice via select dropdown, Message) with vibrant custom focused active border states using `#dc3545` and `#0A1229`.
- **Framer Motion Transitions:** Implement global layout page fade-through transitions and lively spring-based hover states for all interactive buttons, cards, and dropdown panels. Use `lucide-react` for premium layout iconography, styled with colorful dual-tone classes.

### 3. Technical Constraints & Code Output
- **Next.js Features:** Use `next/link` for all client-side page routing (no raw HTML standard `<a>` tags). Ensure appropriate placement of the `"use client"` directive at the top of client-side interactive files (like Navbar dropdowns, Accordions, and Contact forms using Framer Motion or React state), while keeping page routes clean.
- Use TypeScript with strict typing (no `any`). Use explicit React functional component typing (`React.FC` or standard typed props).
- Write complete, production-ready code blocks for each file. Do not use `// TODO`, `// ... rest of code`, or shorten code with placeholders.
- Ensure full mobile-first responsiveness across all viewport breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
- Utilize the extended Tailwind color configuration exclusively (`text-primary`, `bg-secondary`, `bg-gradient-to-r`, `bg-primary`, etc.) to demonstrate rigid adherence to the brand design system.