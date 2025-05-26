"use client";

import { useApp } from "@/contexts/AppContext";
import dynamic from "next/dynamic";

// Dynamic component map for section types and variants - moved to client component
const SECTION_MAP = {
  header_1: dynamic(() => import("@/components/sections/VijayKumarOrsuHeader1")),
  hero_1: dynamic(() => import("@/components/sections/VijayKumarOrsuHero")),
  services_1: dynamic(() => import("@/components/sections/VijayKumarOrsuServices")),
  team_1: dynamic(() => import("@/components/sections/VijayKumarOrsuTeam1")),
  gallery_1: dynamic(() => import("@/components/sections/VijayKumarOrsuGallery1")),
  contact_1: dynamic(() => import("@/components/sections/VijayKumarOrsuContact")),
  footer_1: dynamic(() => import("@/components/sections/VijayKumarOrsuFooter")),
};

export default function PageContent({ page, sections, theme, config }) {
  // Use the app context to get theme values
  const { theme: contextTheme } = useApp();

  // Merge provided theme with context theme, with context taking precedence
  const themeToUse = { ...theme, ...(contextTheme || {}) };

  // Debug logging
  console.log('PageContent received sections:', sections);

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      {sections.map((section) => {
        // Get the component using the original type and variant format
        const sectionKey = `${section.type}_${section.variant}`;
        const DynamicSection = SECTION_MAP[sectionKey];

        // Debug logging
        console.log('Processing section:', {
          id: section.id,
          type: section.type,
          variant: section.variant,
          key: sectionKey,
          hasComponent: !!DynamicSection,
          content: section.content,
          items: section.items
        });

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
