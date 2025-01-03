import { ComponentSection } from "../components/ComponentSections";
import { HeroSections } from "../components/sections/HeroSections";
import { HeaderExamples } from "../components/sections/HeaderExamples";
import { PricingTables } from "../components/sections/PricingTables";
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

const components = [
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
