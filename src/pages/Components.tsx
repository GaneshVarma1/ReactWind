import { ComponentSection } from "../components/ComponentSection";
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
import { HeroVideo } from "../components/sections/HeroVideo";
import FeaturesImage from "../components/sections/FeaturesImage";
import { FormExamples } from "../components/sections/FormExamples";
import {
  ComponentThemeProvider,
  useComponentTheme,
} from "../context/ComponentThemeContext";
import { Sun, Moon } from "lucide-react";
import { ThreeDCardDemo } from "../components/sections/ThreeDCard";
import { SparklesPreview } from "../components/sections/SparklesText";
import { CardHoverEffect } from "../components/sections/CardHoverEffect";
import { WavyBackground } from "../components/sections/WavyBackground";
import { GradientBlob } from "../components/sections/GradientBlob";
import { ParticleField } from "../components/sections/ParticleField";
import { NebulaBackground } from "../components/sections/NebulaBackground";

// Import raw source code for all components
import HeroSaasSource from "../components/sections/HeroSaas.tsx?raw";
import SaasHeroSource from "../components/sections/SaasHero.tsx?raw";
import FeaturesImageSource from "../components/sections/FeaturesImage.tsx?raw";
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
import AnimatedBeamSource from "../components/ui/animated-beam.tsx?raw";
import PricingTablesSource from "../components/sections/PricingTables.tsx?raw";
import Pricing2Source from "../components/sections/Pricing2.tsx?raw";
import HeroVideoSource from "../components/sections/HeroVideo.tsx?raw";
import FormExamplesSource from "../components/sections/FormExamples.tsx?raw";
import { ComponentSidebar } from "../components/ComponentSidebar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeDCardSource from "../components/sections/ThreeDCard.tsx?raw";
import SparklesPreviewSource from "../components/sections/SparklesText.tsx?raw";
import CardHoverEffectSource from "../components/sections/CardHoverEffect.tsx?raw";
import WavyBackgroundSource from "../components/sections/WavyBackground.tsx?raw";
import GradientBlobSource from "../components/sections/GradientBlob.tsx?raw";
import ParticleFieldSource from "../components/sections/ParticleField.tsx?raw";
import NebulaBackgroundSource from "../components/sections/NebulaBackground.tsx?raw";

const components = [
  // Hero Sections
  {
    title: "Hero Video",
    component: <HeroVideo />,
    code: HeroVideoSource,
  },
  {
    title: "Hero With Image",
    component: <HeroSaas />,
    code: HeroSaasSource,
  },
  {
    title: "Hero With Grid Images",
    component: <HeroSection />,
    code: HeroSectionSource,
  },
  {
    title: "Hero With Images",
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

  // Background Effects (NEW)
  {
    title: "Nebula Background",
    component: <NebulaBackground />,
    code: NebulaBackgroundSource,
    isNew: true,
  },
  {
    title: "Gradient Blobs",
    component: <GradientBlob />,
    code: GradientBlobSource,
    isNew: true,
  },
  {
    title: "Particle Field",
    component: <ParticleField />,
    code: ParticleFieldSource,
    isNew: true,
  },
  {
    title: "Wavy Background",
    component: <WavyBackground />,
    code: WavyBackgroundSource,
    isNew: true,
  },

  // Cards & Interactive Elements (NEW)
  {
    title: "3D Hover Cards",
    component: <ThreeDCardDemo />,
    code: ThreeDCardSource,
    isNew: true,
  },
  {
    title: "Card Hover Effects",
    component: <CardHoverEffect />,
    code: CardHoverEffectSource,
    isNew: true,
  },
  {
    title: "Sparkles Text Effect",
    component: <SparklesPreview />,
    code: SparklesPreviewSource,
    isNew: true,
  },

  // Feature Sections
  {
    title: "Features Image",
    component: <FeaturesImage />,
    code: `// FeaturesImage.tsx
${FeaturesImageSource}

// animated-beam.tsx
${AnimatedBeamSource}`,
  },
  {
    title: "Feature Section",
    component: <FeatureSection />,
    code: FeatureSectionSource,
  },

  // Pricing Sections
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
    title: "Pricing 3 Detailed",
    component: <Pricing3big />,
    code: Pricing3bigSource,
  },

  // Gallery & Media
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

  // Marquee & Sliders
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

  // E-commerce Components
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

  // Headers & Footers
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

  // Forms
  {
    title: "Form Examples",
    component: <FormExamples />,
    code: FormExamplesSource,
  },
];

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useComponentTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-300" />
      )}
    </button>
  );
};

const ComponentsContent = () => {
  const { theme } = useComponentTheme();
  const [activeSection, setActiveSection] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#0B0F17]" : "bg-white"
      }`}
    >
      <ThemeSwitch />
      {/* Background Effects */}
      <div
        className={`fixed inset-0 ${
          theme === "dark" ? "bg-[#0B0F17]/90" : "bg-white/90"
        } backdrop-blur-3xl`}
      />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-40">
        <div
          className={`
          fixed top-0 left-0 h-full w-64 
          ${theme === "dark" ? "bg-[#0B0F17]/50" : "bg-white/50"} 
          backdrop-blur-xl
          border-r ${
            theme === "dark" ? "border-gray-800/50" : "border-gray-200/50"
          } 
          shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
        `}
        >
          <ComponentSidebar
            components={components}
            activeSection={activeSection}
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`
            absolute top-1/2 -translate-y-1/2
            ${sidebarOpen ? "left-64" : "left-0"}
            w-6 h-24 bg-[#0B0F17]/50 backdrop-blur-xl
            border-y border-r border-gray-800/50 rounded-r-xl
            flex items-center justify-center
            transition-all duration-300 hover:bg-gray-800/50
            shadow-lg
          `}
        >
          <span className="absolute transform -rotate-90 whitespace-nowrap text-xs text-gray-300">
            {sidebarOpen ? "Close Menu" : "Open Menu"}
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`
          relative transition-all duration-300 ease-in-out z-10
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-0"}
        `}
      >
        {/* Hero Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 to-secondary-400/10" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Component Library
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Browse our collection of beautiful React components
              </p>
            </motion.div>
          </div>
        </section>

        {/* Components Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-32">
            {components.map((item, index) => (
              <motion.div
                key={index}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 to-secondary-400/5 rounded-3xl -m-8" />
                <ComponentSection title={item.title} code={item.code}>
                  {item.isNew && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                      NEW
                    </span>
                  )}
                  {item.component}
                </ComponentSection>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Components = () => {
  return (
    <ComponentThemeProvider>
      <ComponentsContent />
    </ComponentThemeProvider>
  );
};
