import { motion } from "framer-motion";
import { Book, Code2, Palette, Zap, Layout, Github, Coffee, ExternalLink } from "lucide-react";

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
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      gradient: "from-blue-500/20 to-purple-500/20",
      items: [
        {
          title: "Quick Setup",
          description: (
            <>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
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
      icon: <Layout className="w-6 h-6 text-primary-500" />,
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
      icon: <Palette className="w-6 h-6 text-primary-500" />,
      items: [
        { title: "Theming" },
        { title: "Dark Mode" },
        { title: "Styling" },
      ],
    },
    {
      title: "API Reference 📚",
      icon: <Book className="w-6 h-6 text-primary-500" />,
      items: [
        { title: "Component Props" },
        { title: "Hooks" },
        { title: "Utilities" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dot-pattern">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 dark:bg-secondary-400/10 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-950/90 backdrop-blur-3xl" />

      <div className="relative z-10">
        {/* Hero Section - Matching Components page style */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to build amazing React applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                  <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-800/50 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="group/item">
                          {item.description ? (
                            <div className="space-y-4">{item.description}</div>
                          ) : (
                            <a className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                              <span className="text-gray-600 dark:text-gray-300 group-hover/item:text-primary-500 transition-colors">
                                {item.title}
                              </span>
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-800/50">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Need Help Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-primary-50 dark:bg-primary-900/30">
                          <Code2 className="w-6 h-6 text-primary-500" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Need Help? 🤝
                        </h2>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
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
                        <div className="p-2 rounded-xl bg-green-50 dark:bg-green-900/30">
                          <Coffee className="w-6 h-6 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Support Project ❤️
                        </h2>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Your contributions help us create more components and keep the project alive.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <SocialButton
                          href="https://github.com/GaneshVarma1"
                          icon={<Github className="w-5 h-5" />}
                          text="Contribute"
                          color="green"
                        />
                        <SocialButton
                          href="https://buymeacoffee.com/sriganeshshiram"
                          icon={<Coffee className="w-5 h-5" />}
                          text="Buy me a coffee"
                          variant="outline"
                          color="green"
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

// Helper Components
const InstallStep = ({ title, package: pkg }: { title: string; package: string }) => (
  <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden">
    <div className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-sm text-gray-200">
      {title}
    </div>
    <div className="p-4">
      <code className="text-sm text-gray-100">{pkg}</code>
    </div>
  </div>
);

const SocialButton = ({
  href,
  icon,
  text,
  variant = "solid",
  color = "primary"
}: {
  href: string;
  icon?: React.ReactNode;
  text: string;
  variant?: "solid" | "outline";
  color?: "primary" | "green";
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200";
  const colorStyles = {
    primary: {
      solid: "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:shadow-lg",
      outline: "border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
    },
    green: {
      solid: "bg-green-500 text-white hover:shadow-lg",
      outline: "border border-green-500 text-green-500 dark:border-green-400 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
    }
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
