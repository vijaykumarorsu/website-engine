"use client";

import { useApp } from "@/contexts/AppContext";
import { getComponentKey } from "@/lib/components/registry";
import dynamic from "next/dynamic";

// Dynamic component map for section types and variants - moved to client component
const SECTION_MAP = {
  header_1: dynamic(() => import("@/components/sections/VijayKumarOrsuHeader1")),
  hero_1: dynamic(() => import("@/components/sections/VijayKumarOrsuHero")),
  about_1: dynamic(() => import("@/components/sections/VijayKumarOrsuAbout")),
  services_1: dynamic(() => import("@/components/sections/VijayKumarOrsuServices")),
  testimonial_1: dynamic(() => import("@/components/sections/VijayKumarOrsuTestimonial1")),
  contact_1: dynamic(() => import("@/components/sections/VijayKumarOrsuContact")),
  footer_1: dynamic(() => import("@/components/sections/VijayKumarOrsuFooter")),
  gallery_1: dynamic(() => import("@/components/sections/VijayKumarOrsuGallery1")),
  pricing_1: dynamic(() => import("@/components/sections/VijayKumarOrsuPricing1")),
  team_1: dynamic(() => import("@/components/sections/VijayKumarOrsuTeam1")),
};

export default function PageContent({ page, sections, theme, config }) {
  // Use the app context to get theme values
  const { theme: contextTheme } = useApp();

  // Merge provided theme with context theme, with context taking precedence
  const themeToUse = { ...theme, ...(contextTheme || {}) };

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      {sections.map((section) => {
        const sectionKey = getComponentKey(section.type, section.variant);
        const DynamicSection = SECTION_MAP[sectionKey];

        if (!DynamicSection) {
          console.warn(`No component found for section type: ${sectionKey}`);
          return null;
        }

        return (
          <section key={section.id} className="section-wrapper">
            <DynamicSection
              content={section.content}
              items={section.items}
              theme={themeToUse}
              config={config}
            />
          </section>
        );
      })}
    </main>
  );
}
