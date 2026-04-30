"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from 'next/link';
import { FaGithub, FaStar, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Moon, Sun, Code, Accessibility, Settings, Heart, ArrowRight, Sparkles } from "lucide-react";
import { CircularProgress, Heart as HeartShape, Star, Donut, Diamond, Triangle, Moon as MoonShape, Pentagon, Hexagon, Cloud } from "progressive-shapes";

export default function ProgressiveShapesLanding() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [demoStep, setDemoStep] = useState(3);

  // Auto-animate demo step
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setDemoStep(prev => (prev >= 5 ? 1 : prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Free and Open Source",
      description: "Use it without cost or restrictions — built by the community, for the community.",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-100 dark:bg-pink-500/20"
    },
    {
      title: "Customizable",
      description: "Easily tweak colors, sizes, and styles to match your design.",
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      bg: "bg-indigo-100 dark:bg-indigo-500/20"
    },
    {
      title: "Accessible",
      description: "Comes with built-in ARIA support for screen readers and assistive tech.",
      icon: <Accessibility className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-100 dark:bg-emerald-500/20"
    },
    {
      title: "Easy to Use",
      description: "Simple API designed for fast integration.",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-100 dark:bg-blue-500/20"
    }
  ];

  const shapesList = [
    { name: 'Circular', Component: CircularProgress, color: '#6366f1' },
    { name: 'Heart', Component: HeartShape, color: '#ec4899' },
    { name: 'Star', Component: Star, color: '#eab308' },
    { name: 'Donut', Component: Donut, color: '#10b981' },
    { name: 'Diamond', Component: Diamond, color: '#8b5cf6' },
    { name: 'Triangle', Component: Triangle, color: '#f97316' },
    { name: 'Moon', Component: MoonShape, color: '#3b82f6' },
    { name: 'Pentagon', Component: Pentagon, color: '#14b8a6' },
    { name: 'Hexagon', Component: Hexagon, color: '#f43f5e' },
    { name: 'Cloud', Component: Cloud, color: '#0ea5e9' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const marqueeTexts = [
    'import { Donut } from "progressive-shapes"',
    'import { Heart } from "progressive-shapes"',
    'import { Star } from "progressive-shapes"',
    'import { Cloud } from "progressive-shapes"',
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 transition-colors duration-300 flex flex-col overflow-x-hidden">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-bold text-lg leading-none tracking-tighter">PS</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight">progressive-shapes</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/feranmiba/progressive-shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
              GitHub
            </a>
            <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10 opacity-50 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/10 dark:bg-pink-500/10 rounded-full blur-3xl -z-10 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl -z-10 opacity-30"></div>
          
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700">
                <Sparkles size={16} className="text-yellow-500" />
                v1.1.6 Now Available
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Progress Indicators <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Made Elegant.
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                A free, open-source React library providing beautiful, customizable, and accessible progress shapes. Lightweight and built for modern web experiences with zero hassle.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="https://github.com/feranmiba/progressive-shapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 dark:shadow-white/20"
                >
                  <FaStar className="text-yellow-400" />
                  Give it a Star
                </a>
                <Link
                  href="/explore"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-2xl font-bold text-lg hover:bg-indigo-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles size={20} />
                  View Docs
                </Link>
                <div className="hidden lg:flex w-full sm:w-auto px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl items-center justify-center gap-3 shadow-sm font-mono text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400">$</span> npm i progressive-shapes
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Infinite Marquee Slider */}
        <section className="py-6 bg-slate-900 dark:bg-slate-950 border-y border-slate-800 shadow-inner overflow-hidden relative">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-900 dark:from-slate-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-900 dark:from-slate-950 to-transparent z-10"></div>
          <motion.div 
            className="flex gap-8 whitespace-nowrap items-center font-mono text-lg font-medium text-emerald-400"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                {marqueeTexts.map((text, idx) => (
                  <div key={idx} className="flex items-center gap-8">
                    <span>{text}</span>
                    <span className="text-slate-700">•</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </section>

        {/* Shapes Showcase */}
        <section className="py-24 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">10+ Available Shapes</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-xl mx-auto">
              From classic donuts and circles to playful hearts and stars. Whatever your project needs, we have a shape for it.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {shapesList.map((shape, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col items-center justify-center gap-4 group cursor-pointer"
                >
                  <shape.Component 
                    currentStep={demoStep} 
                    totalSteps={5} 
                    size={64} 
                    progressColor={shape.color} 
                    backgroundColor={theme === 'dark' ? '#334155' : '#f1f5f9'} 
                    {...(shape.name === 'Donut' ? { thickness: 0.3 } : {})}
                  />
                  <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 transition-colors">{shape.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Achieve Section */}
        <section className="py-24 relative overflow-hidden">
          {/* subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-pink-50/60 dark:from-indigo-950/30 dark:via-transparent dark:to-pink-950/30 -z-10" />

          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 mb-5">What You Can Achieve</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Build Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Stand Out</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Drop progressive-shapes into any React project and instantly elevate how users experience progress.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  emoji: "✨",
                  color: "from-indigo-500 to-purple-600",
                  bg: "bg-indigo-50 dark:bg-indigo-900/20",
                  border: "border-indigo-100 dark:border-indigo-800/40",
                  title: "Make Your Project Beautiful",
                  desc: "Replace boring progress bars with expressive, colorful shapes that delight users on first glance. Every screen instantly looks more polished and professional."
                },
                {
                  emoji: "🚀",
                  color: "from-pink-500 to-rose-600",
                  bg: "bg-pink-50 dark:bg-pink-900/20",
                  border: "border-pink-100 dark:border-pink-800/40",
                  title: "Enhance Onboarding Flows",
                  desc: "Use a Heart or Star shape to walk users through your app's setup steps. Visual progress motivates users to complete onboarding and reduces drop-off."
                },
                {
                  emoji: "📋",
                  color: "from-emerald-500 to-teal-600",
                  bg: "bg-emerald-50 dark:bg-emerald-900/20",
                  border: "border-emerald-100 dark:border-emerald-800/40",
                  title: "Multi-Step Forms Made Fun",
                  desc: "Show users exactly where they are in a multi-step form. The visual feedback keeps them engaged and reduces abandonment rates drastically."
                },
                {
                  emoji: "🎯",
                  color: "from-yellow-500 to-orange-500",
                  bg: "bg-yellow-50 dark:bg-yellow-900/20",
                  border: "border-yellow-100 dark:border-yellow-800/40",
                  title: "Gamify Task Completion",
                  desc: "Add a game-like feel to task lists and achievement trackers. When progress is visual and rewarding, users stay motivated to keep going."
                },
                {
                  emoji: "📊",
                  color: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-50 dark:bg-blue-900/20",
                  border: "border-blue-100 dark:border-blue-800/40",
                  title: "Dashboards & Analytics",
                  desc: "Embed Donut or Circular shapes into your dashboards to visualize KPIs, completion rates, and data at a glance — no chart library needed."
                },
                {
                  emoji: "⚡",
                  color: "from-violet-500 to-purple-600",
                  bg: "bg-violet-50 dark:bg-violet-900/20",
                  border: "border-violet-100 dark:border-violet-800/40",
                  title: "Zero Setup, Maximum Impact",
                  desc: "Install once, import what you need, and ship. No config files, no theming setup — just beautiful progress shapes in minutes."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, type: "spring", bounce: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`rounded-3xl p-8 border ${item.bg} ${item.border} shadow-lg shadow-slate-200/30 dark:shadow-none cursor-default`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why Use progressive-shapes?</h2>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-10 h-10 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <span className="font-bold text-xs tracking-tighter">PS</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/feranmiba" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/emmanuel_amiola" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/amiola-demilade-5a46801a8/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">amiola_dev 2026&copy;</p>
        </div>
      </footer>
    </div>
  );
}
