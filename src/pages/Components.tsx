import { ComponentSection } from "../components/ComponentSections";
import { HeroSections } from "../components/sections/HeroSections";
import { HeaderExamples } from "../components/sections/HeaderExamples";
import { PricingTables } from "../components/sections/PricingTables";
import { Pricing2 } from "../components/sections/Pricing2";
import { GalleryExamples } from "../components/sections/GalleryExamples";
import { MarqueeText } from "../components/sections/MarqueeText";
import { MarqueeLogo } from "../components/sections/MarqueeLogo";
import { MarqueeImages2 } from "../components/sections/MarqueeImages2";
import { FormExamples } from "../components/sections/FormExamples";
import { SaasHero } from "../components/sections/SaasHero";
import { FeatureSection } from "../components/sections/FeatureSection";
import { FooterNewsletter } from "../components/sections/FooterNewsletter";
import { FooterApp2 } from "../components/sections/FooterApp2";
import { FooterMinimal } from "../components/sections/FooterMinimal";
import { Pricing3 } from "../components/sections/Pricing3";
import NewHeader from "../components/sections/NewHeader";
import NewHeader2 from "../components/sections/NewHeader2";
import Ecommerce1 from "../components/sections/Ecommerce1";
import Ecommerce2 from "../components/sections/Ecommerce2";
import EcommerceSlider from "../components/sections/EcommerceSlider";
import EcommerceGrid from "../components/sections/EcommerceGrid";
import { Pricing3big } from "../components/sections/Pricing3big";
import HeroSection from "../components/sections/HeroSection";
import LogoSlider from "../components/sections/LogoTicker";

const components = [
  // {
  //   title: "SaaS Hero Section",
  //   component: <BorderBeam />,
  //   code: ``,
  // },
  {
    title: "SaaS Hero Section",
    component: <SaasHero />,
    code: `
    import { motion } from 'framer-motion';
    import Lottie from 'lottie-react';
    import { ArrowRight, CheckCircle } from 'lucide-react';
    
    // Import Lottie JSON locally
    import analyticsAnimation from '../../assets/saas.json';
    
    export const SaasHero = () => {
      const features = [
        'Real-time analytics dashboard',
        'Team collaboration tools',
        'Advanced reporting features',
      ];
    
      return (
        <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium mb-6">
                  New Features Available
                </span>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Transform Your Business with{' '}
                  <span className="gradient-text">Advanced Analytics</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Get actionable insights and make data-driven decisions with our powerful analytics platform.
                </p>
                <ul className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold inline-flex items-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <button className="px-8 py-4 border border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-lg font-semibold">
                    Watch Demo
                  </button>
                </div>
              </motion.div>
    
              {/* Right Side Lottie Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Lottie Animation */}
                <div className="relative">
                  <Lottie animationData={analyticsAnimation} className="w-full h-auto" />
                </div>
    
                {/* Dark Mode Overlay */}
                <div className="absolute" />
              </motion.div>
            </div>
          </div>
        </section>
      );
    };
    `,
  },
  {
    title: "SaaS Hero Section",
    component: <HeroSection />,
    code: `
    import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="w-8 h-8 text-indigo-600">💻</p>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Company
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Log in →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-white">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                {/* Text Content */}
                <div className="sm:text-center lg:text-left lg:col-span-6 flex flex-col justify-center">
                  <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    We're changing the way people connect
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non
                    deserunt sunt.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-xl shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Grid */}
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                    <div className="relative grid grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div className="relative h-64 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative h-80 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Office workspace"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6 mt-12">
                        <div className="relative h-80 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt="Team meeting"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2049&q=80"
                            alt="People working"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
    
    `,
  },
  {
    title: "Feature Section",
    component: <FeatureSection />,
    code: `
    import React from 'react';
    import { motion } from 'framer-motion';
    import Lottie from 'lottie-react';
    import { Shield, Zap, BarChart } from 'lucide-react';
    
    // Import the local Lottie JSON
    import featureAnimationData from '../../assets/bike.json';
    
    export const FeatureSection = () => {
      const features = [
        {
          icon: <Shield className="w-6 h-6 text-primary-500" />,
          title: 'Enterprise Security',
          description: 'Bank-grade security with end-to-end encryption and compliance.',
        },
        {
          icon: <Zap className="w-6 h-6 text-primary-500" />,
          title: 'Lightning Fast',
          description: 'Optimized performance with sub-second response times.',
        },
        {
          icon: <BarChart className="w-6 h-6 text-primary-500" />,
          title: 'Advanced Analytics',
          description: 'Deep insights with customizable dashboards and reports.',
        },
      ];
    
      return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4"
              >
                Powerful Features for Your Business
              </motion.h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Everything you need to scale your business effectively
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover-card"
                >
                  <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative">
              <Lottie
                 animationData={featureAnimationData}
                  style={{ width: '300px', height: '300px', margin: '0 auto' }}
              />
              </div>
            </motion.div>
          </div>
        </section>
      );
    };
    `,
  },
  {
    title: "Hero Sections",
    component: <HeroSections />,
    code: `
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
                    <p className="text-gray-600 text-lg mb-8">
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
    `,
  },
  {
    title: "Modren Header",
    component: <NewHeader />,
    code: `
    import React from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown, Moon, Sun, Download } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient Border Wrapper */}
      <div className="p-[0.5px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-gradient">
        <div className="bg-white dark:bg-black backdrop-blur-md rounded-full shadow-lg">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="flex items-center"
                ></motion.div>
                <span className="font-bold text-gray-900 dark:text-white text-xl">
                  ReactWind
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                {["Resources", "Pricing", "Documentation", "GitHub"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-all"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                {/* Dark/Light Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                >
                  <Moon className="dark:hidden w-5 h-5 text-black" />
                  <Sun className="hidden dark:block w-5 h-5 text-white" />
                </motion.button>

                {/* Profile Avatar */}
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
                  />
                </motion.div>

                {/* Dropdown Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
                >
                  Dashboard
                  <ChevronDown className="ml-2 w-4 h-4" />
                </motion.button>

                {/* Hamburger Menu for Mobile */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="md:hidden p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                >
                  <Menu className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;    
    `,
  },
  {
    title: "",
    component: <NewHeader2 />,
    code: `
import React from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, CircleUser } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient Border Wrapper */}
      <div className="p-[0.5px] rounded-full bg-gradient-to-r from-white via-white-500 to-gray-500 animate-spin-gradient">
        <div className="bg-white dark:bg-black backdrop-blur-md rounded-full shadow-lg">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo (Centered) */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="flex items-center space-x-2"
                >
                  {/* Image */}
                  <img
                    src="src/icon.png"
                    alt="Logo"
                    className="w-auto h-6 rounded-full border border-gray-300 dark:border-gray-700"
                  />
                  {/* Text */}
                  <span className="font-bold text-gray-900 dark:text-white text-xl">
                    ReactWind
                  </span>
                </motion.div>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6 absolute left-6">
                {["Resources", "Pricing", "Documentation", "GitHub"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-all"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 absolute right-6">
                {/* Dark/Light Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                >
                  <Moon className="dark:hidden w-5 h-5 text-black" />
                  <Sun className="hidden dark:block w-5 h-5 text-white" />
                </motion.button>

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
                >
                  Login
                  <CircleUser className="ml-2 w-4 h-4" />
                </motion.button>

                {/* Hamburger Menu for Mobile */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="md:hidden p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                >
                  <Menu className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;    
    `,
  },
  {
    title: "Header Examples",
    component: <HeaderExamples />,
    code: `
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

export const HeaderExamples = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="headers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Headers</h2>

        {/* Header 1: Modern with Search */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto">
              <div className="flex items-center h-16 px-4">
                <div className="flex items-center flex-1">
                  <span className="text-xl font-bold text-primary-600">SRI</span>
                  <nav className="hidden md:flex ml-8 space-x-4">
                    <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Products
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative hidden md:block">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  <button className="p-2 text-gray-600 hover:text-primary-600">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="md:hidden p-2 text-gray-600 hover:text-primary-600">
                    <Menu className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Header 2: E-commerce Style */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <header className="bg-white dark:bg-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col">
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-bold text-primary-600">Yamazon</span>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-600 hover:text-primary-600">
                      <Search className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary-600">
                      <User className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary-600 relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        3
                      </span>
                    </button>
                  </div>
                </div>
                <nav className="flex items-center justify-center h-12 space-x-8">
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">New</a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Women</a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Men</a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Sale</a>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};`,
  },
  {
    title: "2 Blocks Pricing",
    component: <Pricing2 />,
    code: `import { Check } from "lucide-react";

    const tiers = [
      {
        name: "Hobby",
        id: "tier-hobby",
        href: "https://buymeacoffee.com/sriganeshshiram",
        priceMonthly: "$10",
        description: "The perfect plan if you're getting started.",
        features: [
          "10 products",
          "Free Guide",
          "Access to links",
          "24-hour support response time",
        ],
        featured: false,
      },
      {
        name: "Enterprise",
        id: "tier-enterprise",
        href: "https://buymeacoffee.com/sriganeshshiram",
        priceMonthly: "$99",
        description: "Dedicated support and infrastructure for your company.",
        features: [
          "Unlimited Components",
          "Unlimited Access",
          "Advanced Support",
          "Dedicated support Person",
          "Git Acess",
        ],
        featured: true,
      },
    ];
    
    function classNames(...classes: string[]) {
      return classes.filter(Boolean).join(" ");
    }
    
    export const Pricing2 = () => {
      return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#8b71de] to-[#3b30d8] opacity-30"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Find the perfect plan tailored to your needs🚀.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
            Select a plan tailored to your needs, packed with powerful features to
            captivate your audience, build lasting customer loyalty, and boost your
            sales.
          </p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-gray-900 shadow-2xl"
                    : "bg-white sm:mx-8 lg:mx-0",
                  tier.featured
                    ? ""
                    : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                    : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                  "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-indigo-400" : "text-indigo-600",
                    "text-base/7 font-semibold"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-semibold tracking-tight"
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base"
                    )}
                  >
                    /month
                  </span>
                </p>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-6 text-base/7"
                  )}
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-8 space-y-3 text-sm/6 sm:mt-10"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        aria-hidden="true"
                        className={classNames(
                          tier.featured ? "text-indigo-400" : "text-indigo-600",
                          "h-6 w-5 flex-none"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                    "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                  )}
                >
                  Lets Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    };    
    `,
  },
  {
    title: "3 Blocks Pricing Full Detailed",
    component: <Pricing3big />,
    code: `
    "use client";

    import { useState } from "react";
    import { Radio, RadioGroup } from "@headlessui/react";
    import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
    
    type Frequency = "monthly" | "annually";
    type TierName = "Free" | "Pro" | "Ultimate";
    
    const frequencies: { value: Frequency; label: string }[] = [
      { value: "monthly", label: "Monthly" },
      { value: "annually", label: "Annually" },
    ];
    
    const tiers = [
      {
        name: "Free",
        id: "tier-free",
        href: "#",
        featured: false,
        description: "Get started with limited access to job applications.",
        price: { monthly: "$0", annually: "$0" },
        mainFeatures: [
          "Limited job applications",
          "Basic AI matching",
          "Upload and edit your resume",
        ],
      },
      {
        name: "Ultimate",
        id: "tier-ultimate",
        href: "#",
        featured: true,
        description: "Unlimited applications with personalized AI-driven support.",
        price: { monthly: "$60", annually: "$576" },
        mainFeatures: [
          "Unlimited job applications",
          "AI writes resume and cover letter",
          "Advanced AI job matching with 99% accuracy",
          "Personalized email alerts for job matches",
          "24/7 customer support",
          "Personalized job search support",
        ],
      },
      {
        name: "Pro",
        id: "tier-pro",
        href: "#",
        featured: false,
        description: "Unlock more applications and let AI craft your resume.",
        price: { monthly: "$30", annually: "$288" },
        mainFeatures: [
          "Apply to a higher number of jobs",
          "AI writes your resume",
          "Basic AI job matching",
          "Custom job alerts",
        ],
      },
    ];
    
    const sections = [
      {
        name: "Features",
        features: [
          {
            name: "Job Applications",
            tiers: {
              Free: "Limited",
              Pro: "Increased limit",
              Ultimate: "Unlimited",
            },
          },
          {
            name: "AI-Generated Resume",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "AI-Generated Cover Letter",
            tiers: { Free: false, Pro: false, Ultimate: true },
          },
          {
            name: "Job Matching Accuracy",
            tiers: { Free: "Basic", Pro: "Standard", Ultimate: "99% accuracy" },
          },
          {
            name: "Personalized Email Alerts",
            tiers: { Free: false, Pro: false, Ultimate: true },
          },
          {
            name: "24/7 Customer Support",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
        ],
      },
      {
        name: "Other Perks",
        features: [
          {
            name: "Personalized Job Search Support",
            tiers: { Free: false, Pro: false, Ultimate: true },
          },
          {
            name: "Custom Job Alerts",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "Mobile and Web Access",
            tiers: { Free: true, Pro: true, Ultimate: true },
          },
          {
            name: "Priority Support",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "Advanced Analytics Dashboard",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "Interview Preparation Resources",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "Dedicated Account Manager",
            tiers: { Free: false, Pro: false, Ultimate: true },
          },
          {
            name: "Weekly Progress Reports",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "Networking Opportunities",
            tiers: { Free: false, Pro: true, Ultimate: true },
          },
          {
            name: "Early Access to New Features",
            tiers: { Free: false, Pro: false, Ultimate: true },
          },
        ],
      },
    ];
    
    function classNames(...classes: string[]) {
      return classes.filter(Boolean).join(" ");
    }
    
    export const Pricing3big = () => {
      const [frequency, setFrequency] = useState<{
        value: Frequency;
        label: string;
      }>(frequencies[0]);
    
      return (
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-gray-900 dark:bg-gray-800 pb-16 pt-24 sm:pt-32 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white dark:text-gray-100">
                  Simple pricing, no commitment
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60 dark:text-gray-400">
                  Choose the plan that fits your career goals. Start with our free
                  plan, or upgrade for more powerful features.
                </p>
                <div className="mt-16 flex justify-center">
                  <fieldset aria-label="Payment frequency">
                    <RadioGroup
                      value={frequency}
                      onChange={setFrequency}
                      className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 dark:bg-gray-700 p-1 text-center text-xs font-semibold leading-5 text-white"
                    >
                      {frequencies.map((option) => (
                        <Radio
                          key={option.value}
                          value={option}
                          className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-indigo-500"
                        >
                          {option.label}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
              </div>
              <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse
                    cx={604}
                    cy={512}
                    rx={604}
                    ry={512}
                    fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                  />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#7775D9" />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  aria-hidden="true"
                  className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                />
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? "z-10 bg-white dark:bg-gray-900 shadow-xl ring-1 ring-gray-900/10 dark:ring-white/20"
                        : "bg-gray-800/80 dark:bg-gray-700/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                      "relative rounded-2xl"
                    )}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.featured
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-white",
                          "text-sm font-semibold leading-6"
                        )}
                      >
                        {tier.name}
                      </h3>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className="mt-2 flex items-center gap-x-4">
                          <p
                            className={classNames(
                              tier.featured
                                ? "text-gray-900 dark:text-gray-100"
                                : "text-white",
                              "text-4xl font-bold tracking-tight"
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                          <div className="text-sm leading-5">
                            <p
                              className={
                                tier.featured
                                  ? "text-gray-900 dark:text-gray-100"
                                  : "text-white"
                              }
                            >
                              USD
                            </p>
                          </div>
                        </div>
                        <a
                          href={tier.href}
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? "bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
                              : "bg-white/10 hover:bg-white/20 focus-visible:outline-white",
                            "rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          )}
                        >
                          Buy this plan
                        </a>
                      </div>
                      <div className="mt-8 flow-root sm:mt-10">
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured
                              ? "divide-gray-900/5 border-gray-900/5 text-gray-600 dark:text-gray-400"
                              : "divide-white/5 border-white/5 text-white",
                            "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                          )}
                        >
                          {tier.mainFeatures.map((mainFeature) => (
                            <li key={mainFeature} className="flex gap-x-3 py-2">
                              <CheckIcon
                                aria-hidden="true"
                                className={classNames(
                                  tier.featured
                                    ? "text-indigo-600"
                                    : "text-gray-500",
                                  "h-6 w-5 flex-none"
                                )}
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-gray-50 dark:bg-gray-900 lg:pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              {/* Feature comparison (up to lg) */}
              <section
                aria-labelledby="mobile-comparison-heading"
                className="lg:hidden"
              >
                <h2 id="mobile-comparison-heading" className="sr-only">
                  Feature comparison
                </h2>
    
                <div className="mx-auto max-w-2xl space-y-16">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className="border-t border-gray-900/10 dark:border-gray-700"
                    >
                      <div
                        className={classNames(
                          tier.featured
                            ? "border-indigo-600"
                            : "border-transparent",
                          "-mt-px w-72 border-t-2 pt-10 md:w-80"
                        )}
                      >
                        <h3
                          className={classNames(
                            tier.featured
                              ? "text-indigo-600"
                              : "text-gray-900 dark:text-gray-100",
                            "text-sm font-semibold leading-6"
                          )}
                        >
                          {tier.name}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {tier.description}
                        </p>
                      </div>
    
                      <div className="mt-10 space-y-10">
                        {sections.map((section) => (
                          <div key={section.name}>
                            <h4 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                              {section.name}
                            </h4>
                            <div className="relative mt-6">
                              {/* Fake card background */}
                              <div
                                aria-hidden="true"
                                className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white dark:bg-gray-800 shadow-sm sm:block"
                              />
    
                              <div
                                className={classNames(
                                  tier.featured
                                    ? "ring-2 ring-indigo-600"
                                    : "ring-1 ring-gray-900/10 dark:ring-gray-700",
                                  "relative rounded-lg bg-white dark:bg-gray-800 shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0"
                                )}
                              >
                                <dl className="divide-y divide-gray-200 dark:divide-gray-700 text-sm leading-6">
                                  {section.features.map((feature) => (
                                    <div
                                      key={feature.name}
                                      className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                    >
                                      <dt className="pr-4 text-gray-600 dark:text-gray-400">
                                        {feature.name}
                                      </dt>
                                      <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                        {typeof feature.tiers[
                                          tier.name as TierName
                                        ] === "string" ? (
                                          <span
                                            className={
                                              tier.featured
                                                ? "font-semibold text-indigo-600"
                                                : "text-gray-900 dark:text-gray-100"
                                            }
                                          >
                                            {feature.tiers[tier.name as TierName]}
                                          </span>
                                        ) : (
                                          <>
                                            {feature.tiers[
                                              tier.name as TierName
                                            ] === true ? (
                                              <CheckIcon
                                                aria-hidden="true"
                                                className="mx-auto h-5 w-5 text-indigo-600"
                                              />
                                            ) : (
                                              <XMarkIcon
                                                aria-hidden="true"
                                                className="mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                                              />
                                            )}
    
                                            <span className="sr-only">
                                              {feature.tiers[
                                                tier.name as TierName
                                              ] === true
                                                ? "Yes"
                                                : "No"}
                                            </span>
                                          </>
                                        )}
                                      </dd>
                                    </div>
                                  ))}
                                </dl>
                              </div>
    
                              {/* Fake card border */}
                              <div
                                aria-hidden="true"
                                className={classNames(
                                  tier.featured
                                    ? "ring-2 ring-indigo-600"
                                    : "ring-1 ring-gray-900/10 dark:ring-gray-700",
                                  "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
                                )}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
    
              {/* Feature comparison (lg+) */}
              <section
                aria-labelledby="comparison-heading"
                className="hidden lg:block"
              >
                <h2 id="comparison-heading" className="sr-only">
                  Feature comparison
                </h2>
    
                <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 dark:border-gray-700 before:block">
                  {tiers.map((tier) => (
                    <div key={tier.id} aria-hidden="true" className="-mt-px">
                      <div
                        className={classNames(
                          tier.featured
                            ? "border-indigo-600"
                            : "border-transparent",
                          "border-t-2 pt-10"
                        )}
                      >
                        <p
                          className={classNames(
                            tier.featured
                              ? "text-indigo-600"
                              : "text-gray-900 dark:text-gray-100",
                            "text-sm font-semibold leading-6"
                          )}
                        >
                          {tier.name}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {tier.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
    
                <div className="-mt-6 space-y-16">
                  {sections.map((section) => (
                    <div key={section.name}>
                      <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                        {section.name}
                      </h3>
                      <div className="relative -mx-8 mt-10">
                        {/* Fake card backgrounds */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                        >
                          <div className="h-full w-full rounded-lg bg-white dark:bg-gray-800 shadow-sm" />
                          <div className="h-full w-full rounded-lg bg-white dark:bg-gray-800 shadow-sm" />
                          <div className="h-full w-full rounded-lg bg-white dark:bg-gray-800 shadow-sm" />
                        </div>
    
                        <table className="relative w-full border-separate border-spacing-x-8">
                          <thead>
                            <tr className="text-left">
                              <th scope="col">
                                <span className="sr-only">Feature</span>
                              </th>
                              {tiers.map((tier) => (
                                <th key={tier.id} scope="col">
                                  <span className="sr-only">{tier.name} tier</span>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.features.map((feature, featureIdx) => (
                              <tr key={feature.name}>
                                <th
                                  scope="row"
                                  className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900 dark:text-gray-100"
                                >
                                  {feature.name}
                                  {featureIdx !== section.features.length - 1 ? (
                                    <div className="absolute inset-x-8 mt-3 h-px bg-gray-200 dark:bg-gray-700" />
                                  ) : null}
                                </th>
                                {tiers.map((tier) => (
                                  <td
                                    key={tier.id}
                                    className="relative w-1/4 px-4 py-0 text-center"
                                  >
                                    <span className="relative h-full w-full py-3">
                                      {typeof feature.tiers[
                                        tier.name as TierName
                                      ] === "string" ? (
                                        <span
                                          className={classNames(
                                            tier.featured
                                              ? "font-semibold text-indigo-600"
                                              : "text-gray-900 dark:text-gray-100",
                                            "text-sm leading-6"
                                          )}
                                        >
                                          {feature.tiers[tier.name as TierName]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name as TierName] ===
                                          true ? (
                                            <CheckIcon
                                              aria-hidden="true"
                                              className="mx-auto h-5 w-5 text-indigo-600"
                                            />
                                          ) : (
                                            <XMarkIcon
                                              aria-hidden="true"
                                              className="mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                                            />
                                          )}
    
                                          <span className="sr-only">
                                            {feature.tiers[
                                              tier.name as TierName
                                            ] === true
                                              ? "Yes"
                                              : "No"}
                                          </span>
                                        </>
                                      )}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
    
                        {/* Fake card borders */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                        >
                          {tiers.map((tier) => (
                            <div
                              key={tier.id}
                              className={classNames(
                                tier.featured
                                  ? "ring-2 ring-indigo-600"
                                  : "ring-1 ring-gray-900/10 dark:ring-gray-700",
                                "rounded-lg"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    };    
     `,
  },
  {
    title: "3 Blocks Pricing",
    component: <Pricing3 />,
    code: `
    
    
    `,
  },
  {
    title: "Pricing Tables",
    component: <PricingTables />,
    code: `import { motion } from 'framer-motion';
    import { Check } from 'lucide-react';
    
    export const PricingTables = () => {
      return (
        <section className="py-16" id="pricing">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Pricing Tables</h2>
    
            {/* Modern Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Basic Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <h3 className="text-lg font-semibold mb-4">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['5 Projects', '10GB Storage', 'Basic Support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Get Started
                </button>
              </motion.div>
    
              {/* Pro Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary-600 text-white rounded-xl shadow-lg p-8 relative"
              >
                <div className="absolute -top-4 right-4 bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Popular
                </div>
                <h3 className="text-lg font-semibold mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-primary-200">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['15 Projects', '50GB Storage', 'Priority Support', 'Advanced Features'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                  Get Started
                </button>
              </motion.div>
    
              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              >
                <h3 className="text-lg font-semibold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited Projects', 'Unlimited Storage', '24/7 Support', 'Custom Features'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };`,
  },
  {
    title: "E Commerce with Button",
    component: <Ecommerce2 />,
    code: `
    const products = [
      {
        id: 1,
        name: "Milk Chocolate Bar",
        href: "",
        imageSrc:
          "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Delicious milk chocolate bar.",
        price: "$5",
        color: "Milk Chocolate",
      },
      {
        id: 2,
        name: "Dark Chocolate Truffles",
        href: "",
        imageSrc:
          "https://www.happyfoodstube.com/wp-content/uploads/2016/12/dark-chocolate-truffles-6.jpg",
        imageAlt: "Gourmet dark chocolate truffles.",
        price: "$12",
        color: "Dark Chocolate",
      },
      {
        id: 3,
        name: "White Chocolate Bark",
        href: "",
        imageSrc:
          "https://milkhousechocolates.net/cdn/shop/files/WhiteChocolatePeppermintBarkforweb4_1200x1200.jpg?v=1695243013",
        imageAlt: "White chocolate bark with nuts and fruits.",
        price: "$8",
        color: "White Chocolate",
      },
      {
        id: 4,
        name: "Assorted Chocolate Box",
        href: "",
        imageSrc:
          "https://www.li-lacchocolates.com/cdn/shop/files/ThanksgivingBox20_2000x1500_8a31c1a6-8b5b-4f4b-91d1-891dfb183e45.jpg?v=1695077708",
        imageAlt: "Premium assorted chocolate box.",
        price: "$25",
        color: "Assorted",
      },
      {
        id: 5,
        name: "Hazelnut Chocolate",
        href: "",
        imageSrc:
          "https://harvestcraftchocolate.com/cdn/shop/files/IMG_3158.heic?v=1725981510&width=1445",
        imageAlt: "Creamy hazelnut chocolate bar.",
        price: "$7",
        color: "Hazelnut Chocolate",
      },
      {
        id: 6,
        name: "Belgian Chocolate Box",
        href: "",
        imageSrc:
          "https://media-cdn2.greatbritishchefs.com/media/5t2bqaen/history-of-belgian-chocolate-guylian.whqc_1426x713q80.jpg",
        imageAlt: "Assorted Belgian chocolate box.",
        price: "$30",
        color: "Belgian Chocolate",
      },
      {
        id: 7,
        name: "Caramel Chocolate Bar",
        href: "",
        imageSrc:
          "https://itsallgoodvegan.com/wp-content/uploads/2020/05/IMG_4365.jpg",
        imageAlt: "Caramel-filled chocolate bar.",
        price: "$10",
        color: "Caramel Chocolate",
      },
      {
        id: 8,
        name: "Mint Chocolate Bar",
        href: "",
        imageSrc:
          "https://robard.com/wp-content/uploads/2024/08/ChocolateMintBar-wCocolate.jpg.webp",
        imageAlt: "Refreshing mint chocolate bar.",
        price: "$9",
        color: "Mint Chocolate",
      },
    ];
    
    export default function Ecommerce2() {
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customers also purchased
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View More &rarr;
              </a>
            </div>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                  <button className="mt-4 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }    
    `,
  },
  {
    title: "Simple E-commerce",
    component: <Ecommerce1 />,
    code: `const products = [
      {
        id: 1,
        name: "Milk Chocolate Bar",
        href: "#",
        imageSrc:
          "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Delicious milk chocolate bar.",
        price: "$5",
        color: "Milk Chocolate",
      },
      {
        id: 2,
        name: "Dark Chocolate Truffles",
        href: "#",
        imageSrc:
          "https://www.happyfoodstube.com/wp-content/uploads/2016/12/dark-chocolate-truffles-6.jpg",
        imageAlt: "Gourmet dark chocolate truffles.",
        price: "$12",
        color: "Dark Chocolate",
      },
      {
        id: 3,
        name: "White Chocolate Bark",
        href: "#",
        imageSrc:
          "https://milkhousechocolates.net/cdn/shop/files/WhiteChocolatePeppermintBarkforweb4_1200x1200.jpg?v=1695243013",
        imageAlt: "White chocolate bark with nuts and fruits.",
        price: "$8",
        color: "White Chocolate",
      },
      {
        id: 4,
        name: "Assorted Chocolate Box",
        href: "#",
        imageSrc:
          "https://www.li-lacchocolates.com/cdn/shop/files/ThanksgivingBox20_2000x1500_8a31c1a6-8b5b-4f4b-91d1-891dfb183e45.jpg?v=1695077708",
        imageAlt: "Premium assorted chocolate box.",
        price: "$25",
        color: "Assorted",
      },
    ];
    
    export default function Ecommerce1() {
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    `,
  },
  {
    title: "E-Commerce Slider",
    component: <EcommerceSlider />,
    code: `
    import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Milk Chocolate Bar",
    href: "",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Delicious milk chocolate bar.",
    price: "$5",
    color: "Milk Chocolate",
  },
  {
    id: 2,
    name: "Dark Chocolate Truffles",
    href: "",
    imageSrc:
      "https://www.happyfoodstube.com/wp-content/uploads/2016/12/dark-chocolate-truffles-6.jpg",
    imageAlt: "Gourmet dark chocolate truffles.",
    price: "$12",
    color: "Dark Chocolate",
  },
  {
    id: 3,
    name: "White Chocolate Bark",
    href: "",
    imageSrc:
      "https://milkhousechocolates.net/cdn/shop/files/WhiteChocolatePeppermintBarkforweb4_1200x1200.jpg?v=1695243013",
    imageAlt: "White chocolate bark with nuts and fruits.",
    price: "$8",
    color: "White Chocolate",
  },
  {
    id: 4,
    name: "Assorted Chocolate Box",
    href: "",
    imageSrc:
      "https://www.li-lacchocolates.com/cdn/shop/files/ThanksgivingBox20_2000x1500_8a31c1a6-8b5b-4f4b-91d1-891dfb183e45.jpg?v=1695077708",
    imageAlt: "Premium assorted chocolate box.",
    price: "$25",
    color: "Assorted",
  },
  {
    id: 5,
    name: "Hazelnut Chocolate",
    href: "",
    imageSrc:
      "https://harvestcraftchocolate.com/cdn/shop/files/IMG_3158.heic?v=1725981510&width=1445",
    imageAlt: "Creamy hazelnut chocolate bar.",
    price: "$7",
    color: "Hazelnut Chocolate",
  },
  {
    id: 6,
    name: "Belgian Chocolate Box",
    href: "",
    imageSrc:
      "https://media-cdn2.greatbritishchefs.com/media/5t2bqaen/history-of-belgian-chocolate-guylian.whqc_1426x713q80.jpg",
    imageAlt: "Assorted Belgian chocolate box.",
    price: "$30",
    color: "Belgian Chocolate",
  },
  {
    id: 7,
    name: "Caramel Chocolate Bar",
    href: "",
    imageSrc:
      "https://itsallgoodvegan.com/wp-content/uploads/2020/05/IMG_4365.jpg",
    imageAlt: "Caramel-filled chocolate bar.",
    price: "$10",
    color: "Caramel Chocolate",
  },
  {
    id: 8,
    name: "Mint Chocolate Bar",
    href: "",
    imageSrc:
      "https://robard.com/wp-content/uploads/2024/08/ChocolateMintBar-wCocolate.jpg.webp",
    imageAlt: "Refreshing mint chocolate bar.",
    price: "$9",
    color: "Mint Chocolate",
  },
];

export default function EcommerceCarousel() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">
          Customers also purchased
        </h2>
        <div className="relative mt-6">
          {/* Carousel Container */}
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] flex-none bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-56 w-full object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.color}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            Slide to see more
          </p>
        </div>
      </div>
    </div>
  );
}
    
    `,
  },
  {
    title: "E-Commerce Grid",
    component: <EcommerceGrid />,
    code: `"use client";

    import { useState } from "react";
    import { StarIcon } from "@heroicons/react/20/solid";
    import { Radio, RadioGroup } from "@headlessui/react";
    
    const product = {
      name: "KitKat",
      price: "$19.2",
      href: "#",
      breadcrumbs: [
        { id: 1, name: "Chocalate", href: "#" },
        { id: 2, name: "Waffer", href: "#" },
      ],
      images: [
        {
          src: "https://i5.walmartimages.com/seo/Kit-Kat-Milk-Chocolate-Wafer-Candy-Bar-1-5-oz_42f36920-0142-4315-aee0-18299b5bc319.c1a169f294848b52f2be58ff1d446b05.jpeg",
          alt: "Single Choclate.",
        },
        {
          src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRY-WyeqVkWvd8Q52gr6HynlXpC-YfJZ2VExFSqT8n_YHCyJgL5WIXbXT1qE7pSsZZTDgaqhH_uAw7mEC2SGuJw4oHPuVHrGG7hz0x2jiw3FaGYSjsCRDo5wg",
          alt: "36-Pack",
        },
        {
          src: "https://shop.hersheys.com/on/demandware.static/-/Sites-master-us/default/dw22bfc750/images/hi-res/034000226702_1.jpg",
          alt: "Mini Kitkat",
        },
        {
          src: "https://www.efanews.eu/resources/originals/04c9926a5751ac8dee7e4f8b668fe558.jpg",
          alt: "Coco Flavour Kitkat.",
        },
      ],
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
      sizes: [
        { name: "1", inStock: false },
        { name: "6", inStock: true },
        { name: "12", inStock: true },
        { name: "15", inStock: true },
        { name: "25", inStock: true },
        { name: "35", inStock: true },
        { name: "100", inStock: true },
        { name: "200", inStock: true },
      ],
      description:
        "The KitKat Chocolate 6-Pack lets you indulge your sweet cravings with three delectable options. Feeling classic? Enjoy the smooth milk chocolate. Craving something unique? Try our exclusive dark chocolate flavor. Need a little extra sweetness in your day? Our white chocolate KitKat has you covered.",
      highlights: [
        "Carefully crafted for the perfect crunch",
        "Made with premium cocoa sourced responsibly",
        "Individually wrapped for freshness",
        "Loved worldwide for its iconic flavor",
      ],
      details:
        'The 6-Pack includes two milk chocolate, two dark chocolate, and two white chocolate KitKats. Sign up for our subscription service to be the first to try new, exciting flavors, like our upcoming "Caramel Delight" limited edition.',
    };
    const reviews = { href: "#", average: 4, totalCount: 117 };
    
    function classNames(...classes: string[]) {
      return classes.filter(Boolean).join(" ");
    }
    
    export default function EcommerceGrid() {
      const [selectedColor, setSelectedColor] = useState(product.colors[0]);
      const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
    
      return (
        <div className="bg-white">
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                {product.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a
                        href={breadcrumb.href}
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        {breadcrumb.name}
                      </a>
                      <svg
                        fill="currentColor"
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                ))}
                <li className="text-sm">
                  <a
                    href={product.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>
    
            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="hidden size-full rounded-lg object-cover lg:block"
              />
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <img
                  alt={product.images[1].alt}
                  src={product.images[1].src}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
                <img
                  alt={product.images[2].alt}
                  src={product.images[2].src}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
              <img
                alt={product.images[3].alt}
                src={product.images[3].src}
                className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
              />
            </div>
    
            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>
    
              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>
    
                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-500"
                              : "text-gray-200",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>
    
                <form className="mt-10">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Flavour</h3>
    
                    <fieldset aria-label="Choose a color" className="mt-4">
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="flex items-center gap-x-3"
                      >
                        {product.colors.map((color) => (
                          <Radio
                            key={color.name}
                            value={color}
                            aria-label={color.name}
                            className={classNames(
                              color.selectedClass,
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "size-8 rounded-full border border-black/10"
                              )}
                            />
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>
    
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">Count</h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Count Guide
                      </a>
                    </div>
    
                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                            )}
                          >
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  className="absolute inset-0 size-full stroke-2 text-gray-200"
                                >
                                  <line
                                    x1={0}
                                    x2={100}
                                    y1={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>
    
                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
    
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>
    
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                  </div>
                </div>
    
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
    
                  <div className="mt-4">
                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
    
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>
    
                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }    
    `,
  },
  {
    title: "Gallery Examples",
    component: <GalleryExamples />,
    code: `
"use client";
import { useEffect, useState } from "react";
import { motion, MotionConfig, useMotionTemplate, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=300&fit=crop",
];

export const GalleryExamples = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="galleries">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Gallery Examples</h2>
        {/* Grid Gallery */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Grid Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg aspect-video"
              >
                <img
                  src={image}
                  alt={\`Gallery image \${index + 1}\`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Masonry Gallery */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Masonry Gallery</h3>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-4 overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={\`Gallery image \${index + 1}\`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Carousel */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Image Carousel</h3>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

function Carousel() {
  let [index, setIndex] = useState(0);
  let x = index * 100;
  let xSpring = useSpring(x, { bounce: 0 });
  let xPercentage = useMotionTemplate\`-\${xSpring}%\`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0 }}>
      <div className="relative mt-6 overflow-hidden">
        <motion.div style={{ x: xPercentage }} className="flex">
          {images.map((image, i) => (
            <motion.img
              key={image}
              src={image}
              animate={{ opacity: i === index ? 1 : 0.4 }}
              className="aspect-[1.85] h-screen max-h-[70vh] w-full flex-shrink-0 object-cover"
            />
          ))}
        </motion.div>
        {index > 0 && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            onClick={() => setIndex(index - 1)}
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
        )}
        {index < images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            onClick={() => setIndex(index + 1)}
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        )}
      </div>
    </MotionConfig>
  );
}
    `,
  },

  {
    title: "SaaS Hero Section",
    component: <LogoSlider />,
    code: `
  type LogoProps = {
    src: string;
    alt: string;
  };
  
  function Logo({ src, alt }: LogoProps) {
    return (
      <img
        src={src}
        alt={alt}
        className="max-h-12 w-auto object-contain dark:invert dark:brightness-0 dark:contrast-200"
      />
    );
  }
  
  export default function LogoSlider() {
    const logos = [
      "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
      "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
      "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
      "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
      "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    ];
  
    return (
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-10">
            Trusted by
          </h2>
  
          {/* Slider 1: Left to Right */}
          <div className="relative flex overflow-hidden">
            <div className="flex space-x-8 animate-marquee">
              {logos.map((src, index) => (
                <Logo
                  key={\`slider1-\${index}\`}
                  src={src}
                  alt={\`Logo \${index + 1}\`}
                />
              ))}
              {logos.map((src, index) => (
                <Logo
                  key={\`slider1-repeat-\${index}\`}
                  src={src}
                  alt={\`Logo \${index + 1}\`}
                />
              ))}
            </div>
          </div>
  
          {/* Slider 2: Right to Left */}
          <div className="relative flex overflow-hidden mt-10">
            <div className="flex space-x-8 animate-marquee-reverse">
              {logos.map((src, index) => (
                <Logo
                  key={\`slider2-\${index}\`}
                  src={src}
                  alt={\`Logo \${index + 1}\`}
                />
              ))}
              {logos.map((src, index) => (
                <Logo
                  key={\`slider2-repeat-\${index}\`}
                  src={src}
                  alt={\`Logo \${index + 1}\`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
      `,
  },

  {
    title: "Marquee Logo",
    component: <MarqueeLogo />,
    code: `
  import React from 'react';
  import { motion } from 'framer-motion';
  
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    "https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
    "https://download.logo.wine/logo/Porsche/Porsche-Logo.wine.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    "https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
    "https://download.logo.wine/logo/Porsche/Porsche-Logo.wine.png",
  ];
  
  const LogoComponent = ({ src, index }: { src: string; index: number }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex-shrink-0 px-8"
    >
      <img
        src={src}
        alt={\`Brand logo \${index + 1}\`}
        className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 
                   dark:brightness-90 dark:hover:brightness-110 hover:cursor-pointer transform-gpu"
      />
    </motion.div>
  );
  
  export const MarqueeLogo = () => {
    return (
      <div className="relative bg-gradient-to-r from-white via-gray-50 to-white 
                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                      py-12 overflow-hidden backdrop-blur-sm">
        <div className="flex flex-col gap-12">
          {/* First row */}
          <div className="relative h-12">
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex absolute"
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoComponent key={\`row1-\${index}\`} src={logo} index={index} />
              ))}
            </motion.div>
          </div>
  
          {/* Second row - reverse direction */}
          <div className="relative h-12">
            <motion.div
              animate={{
                x: [-2000, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex absolute"
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoComponent key={\`row2-\${index}\`} src={logo} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
    `,
  },
  {
    title: "Marquee Text",
    component: <MarqueeText />,
    code: `
  import React from 'react';
  import { motion } from 'framer-motion';
  
  const texts = [
    "Beautiful React Components ✨",
    "Production Ready 🚀",
    "Fully Customizable 🎨",
    "Dark Mode Support 🌙",
    "Responsive Design 📱",
    "Modern & Clean UI 💅",
  ];
  
  export const MarqueeText = () => {
    return (
      <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 
                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                      py-8 overflow-hidden">
        <div className="relative h-8 overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex absolute whitespace-nowrap"
          >
            {[...texts, ...texts].map((text, index) => (
              <div
                key={index}
                className="mx-8 text-xl font-semibold text-gray-900 dark:text-white transform-gpu"
              >
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };
    `,
  },
  {
    title: "Marquee Image Slider",
    component: <MarqueeImages2 />,
    code: `
  import React from 'react';
  import { motion } from 'framer-motion';
  
  const images = [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
    // Duplicate images for animation continuity
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
  ];
  
  const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="flex-shrink-0 px-2 transition-all duration-300"
    >
      <img
        src={src}
        alt={alt}
        className="w-[400px] h-[250px] rounded-xl shadow-lg object-cover 
                   transition-all duration-300 dark:brightness-90 dark:hover:brightness-110
                   hover:shadow-2xl transform-gpu"
      />
    </motion.div>
  );
  
  export const MarqueeImages2 = () => {
    return (
      <div className="relative bg-gradient-to-r from-gray-50/50 via-white to-gray-50/50 
                      dark:from-gray-900/50 dark:via-gray-800 dark:to-gray-900/50 
                      py-16 overflow-hidden backdrop-blur-sm">
        <div className="flex flex-col gap-8">
          {/* First row */}
          <div className="relative h-[250px] overflow-hidden">
            <motion.div
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex absolute gap-4"
            >
              {[...images, ...images, ...images].map((image, index) => (
                <ImageComponent
                  key={\`row1-\${index}\`}
                  src={image}
                  alt={\`Tech \${index + 1}\`}
                />
              ))}
            </motion.div>
          </div>
  
          {/* Second row - reverse direction */}
          <div className="relative h-[250px] overflow-hidden">
            <motion.div
              animate={{
                x: [-2400, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex absolute gap-4"
            >
              {[...images, ...images, ...images].map((image, index) => (
                <ImageComponent
                  key={\`row2-\${index}\`}
                  src={image}
                  alt={\`Tech \${index + 1}\`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
    `,
  },
  {
    title: "Form Examples",
    component: <FormExamples />,
    code: `
    import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export const FormExamples = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="forms">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Form Examples</h2>

        {/* Login Form */}
        <div className="max-w-md mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Sign In</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-12 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                  placeholder="Doe"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
    `,
  },
  {
    title: "Footer Newsletter",
    component: <FooterNewsletter />,
    code: `
    import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Logo } from '../Header/Logo';
import { SocialLinks } from './SocialLinks';

export const FooterNewsletter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Footer Sections</h2>  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Logo />
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Join 10,000+ developers 👩‍💻 who get our weekly newsletter with new components, tips, and resources! ✨
            </p>
            <form className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg inline-flex items-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:justify-end">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Components 🎨</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Documentation 📚</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Changelog 🚀</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">About us 👋</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Blog ✍️</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Contact 📧</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Buildeasy. All rights reserved. 🔒
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};`,
  },
  {
    title: "Footer App Style",
    component: <FooterApp2 />,
    code: `import React from 'react';
    import { motion } from 'framer-motion';
    import { Download, Star, Heart } from 'lucide-react';
    import { Logo } from '../Header/Logo';
    
    export const FooterApp2 = () => {
      return (
        <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <Logo />
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful React components for your next project ✨ Made with love for developers 💖
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </motion.button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources 📚</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Components</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Examples</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Company 🏢</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">About</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Blog</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Made with</span>
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">by Buildeasy Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">5.0/5 from 1000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };`,
  },
  {
    title: "Footer Minimal",
    component: <FooterMinimal />,
    code: `import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, Instagram, Linkedin, Heart } from 'lucide-react';
    import { Logo } from '../Header/Logo';
    
    export const FooterMinimal = () => {
      return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2">
                <Logo />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Made with <Heart className="inline w-4 h-4 text-red-500" /> by Sri Shiamshetty
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/GaneshVarma1"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.instagram.com/varmaaa.x_/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com/company/buildeasy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </footer>
      );
    };`,
  },
];

export const Components = () => {
  return (
    <div className="min-h-screen">
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
          <ComponentSection key={index} title={item.title} code={item.code}>
            {item.component}
          </ComponentSection>
        ))}
      </div>
    </div>
  );
};
