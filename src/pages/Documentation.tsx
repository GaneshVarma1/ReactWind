import { motion } from "framer-motion";
import {
  Book,
  Code2,
  Palette,
  Zap,
  Layout,
  Github,
  Coffee,
  ExternalLink,
  Stars,
} from "lucide-react";

interface SectionItem {
  title: string;
  description?: React.ReactNode;
}

interface Section {
  title: string;
  icon: React.ReactNode;
  gradient?: string;
  items: SectionItem[];
}

export const Documentation = () => {
  const sections: Section[] = [
    {
      title: "Getting Started",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      items: [
        {
          title: "Quick Setup",
          description: (
            <>
              <p className="mb-4 text-gray-300">
                Get your project up and running with these essential packages:
              </p>
              <div className="space-y-4">
                <InstallStep
                  title="1. Animation Library"
                  package="npm install framer-motion"
                />
                <InstallStep
                  title="2. Icon Package"
                  package="npm install lucide-react"
                />
                <InstallStep
                  title="3. Styling Framework"
                  package="npm install -D tailwindcss postcss autoprefixer"
                />
                <InstallStep
                  title="4. Animation Assets"
                  package="npm install lottie-react"
                />
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Components Available 🎨",
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      items: [
        { title: "Hero Sections" },
        { title: "Headers" },
        { title: "Footers" },
        { title: "Pricing Tables" },
        { title: "Galleries" },
        { title: "Marquee Sliders" },
        { title: "More Coming Soon..." },
      ],
    },
    {
      title: "Customization 💅",
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      items: [
        { title: "Theming" },
        { title: "Dark Mode" },
        { title: "Styling" },
      ],
    },
    {
      title: "API Reference 📚",
      icon: <Book className="w-6 h-6 text-indigo-400" />,
      items: [
        { title: "Component Props" },
        { title: "Hooks" },
        { title: "Utilities" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Enhanced Space Theme Background Effects */}
      <div className="fixed inset-0">
        {/* Animated stars background */}
        <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-30" />

        {/* Nebula-like gradients - adjusted for better contrast on black */}
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-[600px] h-[600px] bg-gradient-to-l from-indigo-500/10 to-pink-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                  <Stars className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Documentation
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive guide to building stunning React
                applications with our component library
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Enhanced card background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 h-full hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-white">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="group/item">
                          {item.description ? (
                            <div className="space-y-4">{item.description}</div>
                          ) : (
                            <a className="flex items-center justify-between p-4 rounded-xl bg-black/50 hover:bg-black/70 border border-blue-500/10 hover:border-blue-500/30 transition-all">
                              <span className="text-gray-400 group-hover/item:text-blue-400 transition-colors">
                                {item.title}
                              </span>
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-400" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-24"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Need Help Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-blue-950/50">
                          <Code2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">
                          Need Help? 🤝
                        </h2>
                      </div>
                      <p className="text-gray-400">
                        Check out our GitHub repository or join our community.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <SocialButton
                          href="https://github.com/GaneshVarma1"
                          icon={<Github className="w-5 h-5" />}
                          text="View on GitHub"
                        />
                        <SocialButton
                          href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                          text="Connect with Sri"
                        />
                      </div>
                    </div>

                    {/* Support Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-purple-950/50">
                          <Coffee className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">
                          Support Project ❤️
                        </h2>
                      </div>
                      <p className="text-gray-400">
                        Your contributions help us create more components and
                        keep the project alive.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <SocialButton
                          href="https://github.com/GaneshVarma1"
                          icon={<Github className="w-5 h-5" />}
                          text="Contribute"
                          color="purple"
                        />
                        <SocialButton
                          href="https://buymeacoffee.com/sriganeshshiram"
                          icon={<Coffee className="w-5 h-5" />}
                          text="Buy me a coffee"
                          variant="outline"
                          color="purple"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Update InstallStep component
const InstallStep = ({
  title,
  package: pkg,
}: {
  title: string;
  package: string;
}) => (
  <div className="bg-black rounded-xl overflow-hidden border border-blue-500/20">
    <div className="px-4 py-2 bg-blue-950/30 text-sm text-blue-400 font-medium">
      {title}
    </div>
    <div className="p-4">
      <code className="text-sm text-gray-400">{pkg}</code>
    </div>
  </div>
);

// Update SocialButton component
const SocialButton = ({
  href,
  icon,
  text,
  variant = "solid",
  color = "primary",
}: {
  href: string;
  icon?: React.ReactNode;
  text: string;
  variant?: "solid" | "outline";
  color?: "primary" | "purple";
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200";
  const colorStyles = {
    primary: {
      solid:
        "bg-black/50 text-blue-400 hover:bg-black/70 border border-blue-500/30",
      outline: "border border-blue-500/30 text-blue-400 hover:bg-black/50",
    },
    purple: {
      solid:
        "bg-black/50 text-purple-400 hover:bg-black/70 border border-purple-500/30",
      outline: "border border-purple-500/30 text-purple-400 hover:bg-black/50",
    },
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${colorStyles[color][variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {text}
    </motion.a>
  );
};
