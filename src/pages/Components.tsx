import { ComponentSection } from "../components/ComponentSections";
import HeroSaas from "../components/sections/HeroSaas";
import { SaasHero } from "../components/sections/SaasHero";
import HeroSection from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import { Pricing3 } from "../components/sections/Pricing3";
import { Pricing3big } from "../components/sections/Pricing3big";
import GridGallery from "../components/sections/GridGallery";
import { GalleryExamples } from "../components/sections/GalleryExamples";
import { MarqueeText } from "../components/sections/MarqueeText";
import { MarqueeLogo } from "../components/sections/MarqueeLogo";
import { HeroImages } from "../components/sections/HeroImages";
import { MarqueeImages2 } from "../components/sections/MarqueeImages2";
import LogoSlider from "../components/sections/LogoTicker";
import Ecommerce1 from "../components/sections/Ecommerce1";
import Ecommerce2 from "../components/sections/Ecommerce2";
import EcommerceSlider from "../components/sections/EcommerceSlider";
import EcommerceGrid from "../components/sections/EcommerceGrid";
import { HeaderExamples } from "../components/sections/HeaderExamples";
import { FooterNewsletter } from "../components/sections/FooterNewsletter";
import { FooterApp2 } from "../components/sections/FooterApp2";
import { FooterMinimal } from "../components/sections/FooterMinimal";
import { HeroSections } from "../components/sections/HeroSections";
import { PricingTables } from "../components/sections/PricingTables";
import { Pricing2 } from "../components/sections/Pricing2";
import { FormExamples } from "../components/sections/FormExamples";

// Import raw source code for all components
import HeroSaasSource from "../components/sections/HeroSaas.tsx?raw";
import SaasHeroSource from "../components/sections/SaasHero.tsx?raw";
import HeroImagesSource from "../components/sections/HeroImages.tsx?raw";
import HeroSectionSource from "../components/sections/HeroSection.tsx?raw";
import FeatureSectionSource from "../components/sections/FeatureSection.tsx?raw";
import Pricing3Source from "../components/sections/Pricing3.tsx?raw";
import Pricing3bigSource from "../components/sections/Pricing3big.tsx?raw";
import GridGallerySource from "../components/sections/GridGallery.tsx?raw";
import GalleryExamplesSource from "../components/sections/GalleryExamples.tsx?raw";
import MarqueeTextSource from "../components/sections/MarqueeText.tsx?raw";
import MarqueeLogoSource from "../components/sections/MarqueeLogo.tsx?raw";
import MarqueeImages2Source from "../components/sections/MarqueeImages2.tsx?raw";
import LogoSliderSource from "../components/sections/LogoTicker.tsx?raw";
import Ecommerce1Source from "../components/sections/Ecommerce1.tsx?raw";
import Ecommerce2Source from "../components/sections/Ecommerce2.tsx?raw";
import EcommerceSliderSource from "../components/sections/EcommerceSlider.tsx?raw";
import EcommerceGridSource from "../components/sections/EcommerceGrid.tsx?raw";
import HeaderExamplesSource from "../components/sections/HeaderExamples.tsx?raw";
import FooterNewsletterSource from "../components/sections/FooterNewsletter.tsx?raw";
import FooterApp2Source from "../components/sections/FooterApp2.tsx?raw";
import FooterMinimalSource from "../components/sections/FooterMinimal.tsx?raw";
import HeroSectionsSource from "../components/sections/HeroSections.tsx?raw";
import PricingTablesSource from "../components/sections/PricingTables.tsx?raw";
import Pricing2Source from "../components/sections/Pricing2.tsx?raw";
import FormExamplesSource from "../components/sections/FormExamples.tsx?raw";
import { ComponentSidebar } from "../components/ComponentSidebar";
import { useState, useEffect } from "react";

const components = [
  {
    title: "Hero Saas With Image",
    component: <HeroSaas />,
    code: HeroSaasSource,
  },
  {
    title: "Hero Section",
    component: <HeroSection />,
    code: HeroSectionSource,
  },
  {
    title: "Hero Images",
    component: <HeroImages />,
    code: HeroImagesSource,
  },
  {
    title: "SaaS Hero Section",
    component: <SaasHero />,
    code: SaasHeroSource,
  },

  {
    title: "Hero Sections",
    component: <HeroSections />,
    code: HeroSectionsSource,
  },
  {
    title: "Feature Section",
    component: <FeatureSection />,
    code: FeatureSectionSource,
  },
  {
    title: "Pricing Tables",
    component: <PricingTables />,
    code: PricingTablesSource,
  },
  {
    title: "Pricing 2",
    component: <Pricing2 />,
    code: Pricing2Source,
  },
  {
    title: "Pricing 3",
    component: <Pricing3 />,
    code: Pricing3Source,
  },
  {
    title: "Pricing 3 Big",
    component: <Pricing3big />,
    code: Pricing3bigSource,
  },
  {
    title: "Grid Gallery",
    component: <GridGallery />,
    code: GridGallerySource,
  },
  {
    title: "Gallery Examples",
    component: <GalleryExamples />,
    code: GalleryExamplesSource,
  },
  {
    title: "Marquee Text",
    component: <MarqueeText />,
    code: MarqueeTextSource,
  },
  {
    title: "Marquee Logo",
    component: <MarqueeLogo />,
    code: MarqueeLogoSource,
  },
  {
    title: "Marquee Images",
    component: <MarqueeImages2 />,
    code: MarqueeImages2Source,
  },
  {
    title: "Logo Slider",
    component: <LogoSlider />,
    code: LogoSliderSource,
  },
  {
    title: "Simple E-commerce",
    component: <Ecommerce1 />,
    code: Ecommerce1Source,
  },
  {
    title: "E-commerce with Button",
    component: <Ecommerce2 />,
    code: Ecommerce2Source,
  },
  {
    title: "E-commerce Slider",
    component: <EcommerceSlider />,
    code: EcommerceSliderSource,
  },
  {
    title: "E-commerce Grid",
    component: <EcommerceGrid />,
    code: EcommerceGridSource,
  },
  {
    title: "Header Examples",
    component: <HeaderExamples />,
    code: HeaderExamplesSource,
  },
  {
    title: "Footer Newsletter",
    component: <FooterNewsletter />,
    code: FooterNewsletterSource,
  },
  {
    title: "Footer App Style",
    component: <FooterApp2 />,
    code: FooterApp2Source,
  },
  {
    title: "Footer Minimal",
    component: <FooterMinimal />,
    code: FooterMinimalSource,
  },
  {
    title: "Form Examples",
    component: <FormExamples />,
    code: FormExamplesSource,
  },
];

export const Components = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveSection(
              entry.target.id
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            );
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        rootMargin: "-100px 0px -300px 0px",
      }
    );

    components.forEach((component) => {
      const element = document.getElementById(
        component.title.replace(/\s+/g, "-").toLowerCase()
      );
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ComponentSidebar components={components} activeSection={activeSection} />

      <div className="lg:ml-64">
        <section className="py-16 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Component Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16">
              Browse our collection of beautiful React components
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {components.map((item, index) => (
            <div key={index} id={item.title.replace(/\s+/g, "-").toLowerCase()}>
              <ComponentSection title={item.title} code={item.code}>
                {item.component}
              </ComponentSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
