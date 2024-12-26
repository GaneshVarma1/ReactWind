import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const HeroSections = () => {
  return (
    <section className="py-16" id="hero-sections">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Hero Sections</h2>

        {/* Hero 1: Gradient with Image */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <div className="container mx-auto px-4 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl font-bold mb-6">
                    Build faster with<br />premium components
                  </h1>
                  <p className="text-xl opacity-90 mb-8">
                    Beautiful, responsive React components for your next project.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Get Started
                    </button>
                    <button className="px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero"
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero 2: Centered with Background Pattern */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <div className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="container mx-auto px-4 py-24 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="text-yellow-400" />
                  <span className="text-sm font-medium">Rated 4.9/5 from over 1000+ reviews</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">
                  The fastest way to build<br />modern applications
                </h1>
                <p className="text-xl opacity-90 mb-8">
                  Ship your next project faster with our production-ready components.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 bg-primary-500 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-8 py-3 bg-white bg-opacity-10 rounded-lg font-semibold hover:bg-opacity-20 transition-colors">
                    View Components
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero 3: Modern Responsive with Images */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <div className="relative bg-gradient-to-b from-white to-blue-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold  !text-gray-900 leading-tight mb-6">
                    We’re changing the way people <span className="!text-blue-500">Connect</span>
                </h1>
                <p className="text-black text-lg mb-8">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                  cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                </p>
                {/* Buttons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold shadow-md"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-md text-lg font-semibold"
                  >
                    Live demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-wrap justify-end gap-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg w-1/2"
                />
                <img
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Work Together"
                  className="rounded-lg shadow-lg w-1/3 mt-12"
                />
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern Office"
                  className="rounded-lg shadow-lg w-1/2"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
