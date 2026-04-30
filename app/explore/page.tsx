"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from 'next/link';
import { FaCopy, FaGithub, FaCheck } from 'react-icons/fa';
import { Moon, Sun, Menu, X, Home, Layers, BookOpen, GitPullRequest, ChevronRight, Terminal, Package, Code2, AlertCircle } from "lucide-react";
import { CircularProgress, Heart, Star, Diamond, Triangle, Donut, Moon as MoonShape, Pentagon, Hexagon, Cloud } from "progressive-shapes";

const navSections = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: ["introduction", "installation", "quick-start"],
  },
  {
    title: "Available Shapes",
    icon: Layers,
    items: ["circular-progress", "heart", "star", "diamond", "triangle", "donut", "moon", "pentagon", "hexagon", "cloud"],
  },
  {
    title: "API Reference",
    icon: Code2,
    items: ["props", "customization"],
  },
  {
    title: "Contributing",
    icon: GitPullRequest,
    items: ["how-to-contribute", "guidelines"],
  },
];

const navLabels: Record<string, string> = {
  "introduction": "Introduction",
  "installation": "Installation",
  "quick-start": "Quick Start",
  "circular-progress": "CircularProgress",
  "heart": "Heart",
  "star": "Star",
  "diamond": "Diamond",
  "triangle": "Triangle",
  "donut": "Donut",
  "moon": "Moon",
  "pentagon": "Pentagon",
  "hexagon": "Hexagon",
  "cloud": "Cloud",
  "props": "Props",
  "customization": "Customization",
  "how-to-contribute": "How to Contribute",
  "guidelines": "Guidelines",
};

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-slate-800 my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">{language}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? <><FaCheck size={12} className="text-emerald-400" /><span className="text-emerald-400">Copied</span></> : <><FaCopy size={12} /><span>Copy</span></>}
        </button>
      </div>
      <pre className="bg-slate-900 p-5 overflow-x-auto text-sm font-mono leading-relaxed">
        <code className={language === 'bash' ? "text-emerald-400" : "text-slate-200"}>{code}</code>
      </pre>
    </div>
  );
}

function PropTable({ rows }: { rows: { prop: string; type: string; default: string; desc: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 my-6">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            {["Prop", "Type", "Default", "Description"].map(h => (
              <th key={h} className="text-left px-4 py-3 font-bold text-slate-700 dark:text-slate-300">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {rows.map((row, i) => (
            <tr key={i} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-4 py-3 font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{row.prop}</td>
              <td className="px-4 py-3 font-mono text-pink-600 dark:text-pink-400">{row.type}</td>
              <td className="px-4 py-3 font-mono text-slate-500 dark:text-slate-400">{row.default}</td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShapeDemo({ Component, name }: { Component: any; name: string }) {
  const { theme } = useTheme();
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 border border-slate-200 dark:border-slate-700 my-6">
      <Component currentStep={3} totalSteps={5} size={100} progressColor="#6366f1" backgroundColor={theme === 'dark' ? '#334155' : '#e2e8f0'} {...(name === 'Donut' ? { thickness: 0.3 } : {})} />
      <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{name} — 3 of 5 steps</span>
    </div>
  );
}

const allProps = [
  { prop: "currentStep", type: "number", default: "—", desc: "The current step / progress value." },
  { prop: "totalSteps", type: "number", default: "—", desc: "The total number of steps (max value)." },
  { prop: "size", type: "number", default: "100", desc: "Width and height of the shape in pixels." },
  { prop: "backgroundColor", type: "string", default: '"#e2e8f0"', desc: "Color of the unfilled background portion." },
  { prop: "progressColor", type: "string", default: '"#6366f1"', desc: "Color of the filled progress portion." },
  { prop: "thickness", type: "number", default: "0.3", desc: "Donut only — ring thickness as a fraction of size." },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const sections: Record<string, React.ReactNode> = {
    "introduction": (
      <motion.div key="introduction" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">Getting Started</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Introduction</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong>progressive-shapes</strong> is a free, open-source React component library that provides beautiful, customizable, and accessible progress indicators. Drop shapes like circles, hearts, stars, and more into any React app with minimal setup.
          </p>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/40 rounded-2xl p-6 flex gap-4">
          <AlertCircle className="text-indigo-500 shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-bold text-indigo-800 dark:text-indigo-300 mb-1">React 17+ Required</p>
            <p className="text-sm text-indigo-700 dark:text-indigo-400">progressive-shapes requires React 17 or higher. It works great with both JavaScript and TypeScript projects.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-3">Key Features</h2>
        <ul className="space-y-3">
          {[
            "10+ animated progress shapes out of the box",
            "Fully customizable colors, sizes and thickness",
            "TypeScript support with full type definitions",
            "Zero external dependencies — pure CSS & SVG",
            "Built-in ARIA accessibility support",
            "Works with Next.js, Vite, CRA and more",
          ].map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <FaCheck className="text-emerald-500 mt-1 shrink-0" size={14} />
              {f}
            </li>
          ))}
        </ul>
      </motion.div>
    ),
    "installation": (
      <motion.div key="installation" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">Getting Started</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Installation</h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Install the package using your preferred package manager.</p>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-2 flex items-center gap-2"><Package size={22} /> npm</h2>
        <CodeBlock code="npm install progressive-shapes" language="bash" />
        <h2 className="text-2xl font-bold mt-8 mb-2 flex items-center gap-2"><Package size={22} /> yarn</h2>
        <CodeBlock code="yarn add progressive-shapes" language="bash" />
        <h2 className="text-2xl font-bold mt-8 mb-2 flex items-center gap-2"><Package size={22} /> pnpm</h2>
        <CodeBlock code="pnpm add progressive-shapes" language="bash" />
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 flex gap-4">
          <FaCheck className="text-emerald-500 shrink-0 mt-1" />
          <p className="text-sm text-emerald-800 dark:text-emerald-300">That's it! No peer dependencies required. The package ships with everything it needs.</p>
        </div>
      </motion.div>
    ),
    "quick-start": (
      <motion.div key="quick-start" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">Getting Started</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Quick Start</h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Get your first progress shape rendering in under a minute.</p>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-2">1. Import a shape</h2>
        <CodeBlock code={`import { CircularProgress } from "progressive-shapes";`} language="tsx" />
        <h2 className="text-2xl font-bold mt-8 mb-2">2. Use it in your component</h2>
        <CodeBlock language="tsx" code={`function App() {
  return (
    <CircularProgress
      currentStep={3}
      totalSteps={5}
      size={120}
      backgroundColor="#e2e8f0"
      progressColor="#6366f1"
    />
  );
}`} />
        <h2 className="text-2xl font-bold mt-8 mb-2">3. Result</h2>
        <ShapeDemo Component={CircularProgress} name="CircularProgress" />
        <p className="text-slate-600 dark:text-slate-400">That's all you need! Every shape follows the same simple API — <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-sm">currentStep</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-sm">totalSteps</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-sm">size</code>, and your colors.</p>
      </motion.div>
    ),
    "props": (
      <motion.div key="props" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">API Reference</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Props</h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">All components share the same core props. The Donut component has one additional prop — <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-sm">thickness</code>.</p>
        </div>
        <PropTable rows={allProps} />
      </motion.div>
    ),
    "customization": (
      <motion.div key="customization" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">API Reference</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Customization</h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Customize any shape with your own brand colors and size.</p>
        </div>
        <CodeBlock language="tsx" code={`<Heart
  currentStep={4}
  totalSteps={5}
  size={150}
  backgroundColor="#fce7f3"
  progressColor="#ec4899"
/>`} />
        <ShapeDemo Component={Heart} name="Heart" />
        <h2 className="text-2xl font-bold mt-8 mb-2">Donut thickness</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-2">The Donut shape accepts a <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-sm">thickness</code> prop (0.1 – 0.5).</p>
        <CodeBlock language="tsx" code={`<Donut
  currentStep={3}
  totalSteps={5}
  size={120}
  backgroundColor="#d1fae5"
  progressColor="#10b981"
  thickness={0.25}
/>`} />
      </motion.div>
    ),
    "how-to-contribute": (
      <motion.div key="how-to-contribute" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">Contributing</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">How to Contribute</h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We love contributions! Here's how to get started.</p>
        </div>
        <div className="space-y-6">
          {[
            { step: "1", title: "Fork the repository", desc: "Go to the GitHub repo and click Fork to create your own copy.", code: "git clone https://github.com/feranmiba/progressive-shapes.git" },
            { step: "2", title: "Create a branch", desc: "Create a new branch for your feature or bug fix.", code: "git checkout -b feat/my-new-shape" },
            { step: "3", title: "Install dependencies", desc: "Install the project dependencies.", code: "npm install" },
            { step: "4", title: "Make your changes", desc: "Add your new shape or fix. Make sure it follows the existing API pattern." },
            { step: "5", title: "Open a Pull Request", desc: "Push your branch and open a Pull Request on GitHub with a clear description.", code: "git push origin feat/my-new-shape" },
          ].map((s) => (
            <div key={s.step} className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-bold text-lg flex items-center justify-center shrink-0 mt-1">{s.step}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">{s.desc}</p>
                {s.code && <CodeBlock code={s.code} language="bash" />}
              </div>
            </div>
          ))}
        </div>
        <a href="https://github.com/feranmiba/progressive-shapes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg mt-4">
          <FaGithub /> Open on GitHub
        </a>
      </motion.div>
    ),
    "guidelines": (
      <motion.div key="guidelines" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">Contributing</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">Guidelines</h1>
        </div>
        <ul className="space-y-4">
          {[
            "Follow the existing code style and structure.",
            "Each shape must accept the standard props: currentStep, totalSteps, size, backgroundColor, progressColor.",
            "Export your new shape from the main index file.",
            "Write clear, descriptive commit messages.",
            "Keep PRs focused — one feature or fix per PR.",
            "Be respectful and constructive in reviews.",
          ].map((g, i) => (
            <li key={i} className="flex gap-3 items-start p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <ChevronRight className="text-indigo-500 mt-0.5 shrink-0" size={18} />
              <span className="text-slate-700 dark:text-slate-300">{g}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ),
  };

  const shapeComponents: Record<string, any> = {
    "circular-progress": { Component: CircularProgress, name: "CircularProgress" },
    "heart": { Component: Heart, name: "Heart" },
    "star": { Component: Star, name: "Star" },
    "diamond": { Component: Diamond, name: "Diamond" },
    "triangle": { Component: Triangle, name: "Triangle" },
    "donut": { Component: Donut, name: "Donut" },
    "moon": { Component: MoonShape, name: "Moon" },
    "pentagon": { Component: Pentagon, name: "Pentagon" },
    "hexagon": { Component: Hexagon, name: "Hexagon" },
    "cloud": { Component: Cloud, name: "Cloud" },
  };

  if (!sections[activeSection] && shapeComponents[activeSection]) {
    const { Component, name } = shapeComponents[activeSection];
    sections[activeSection] = (
      <motion.div key={activeSection} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        <div>
          <span className="text-sm font-semibold text-indigo-500 uppercase tracking-widest">Available Shapes</span>
          <h1 className="text-4xl font-extrabold mt-2 mb-4">{name}</h1>
        </div>
        <ShapeDemo Component={Component} name={name} />
        <h2 className="text-2xl font-bold mt-8 mb-2">Import</h2>
        <CodeBlock language="tsx" code={`import { ${name} } from "progressive-shapes";`} />
        <h2 className="text-2xl font-bold mt-8 mb-2">Usage</h2>
        <CodeBlock language="tsx" code={`<${name}
  currentStep={3}
  totalSteps={5}
  size={120}
  backgroundColor="#e2e8f0"
  progressColor="#6366f1"${name === 'Donut' ? '\n  thickness={0.3}' : ''}
/>`} />
        <h2 className="text-2xl font-bold mt-8 mb-2">Props</h2>
        <PropTable rows={name === 'Donut' ? allProps : allProps.filter(p => p.prop !== 'thickness')} />
      </motion.div>
    );
  }

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex overflow-hidden font-sans">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -320 }}
        animate={{ x: sidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : -320) }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed lg:static top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 flex flex-col shadow-2xl lg:shadow-none"
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow shadow-indigo-500/30">
              <span className="text-white font-extrabold text-xs tracking-tight">PS</span>
            </div>
            <span className="font-extrabold tracking-tight text-base group-hover:text-indigo-500 transition-colors">Docs</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Home link */}
          <Link href="/" className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
            <Home size={16} /> Back to Home
          </Link>

          {navSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title}>
                <div className="flex items-center gap-2 px-3 mb-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  <Icon size={13} />
                  {section.title}
                </div>
                <div className="space-y-0.5">
                  {section.items.map((id) => (
                    <button
                      key={id}
                      onClick={() => { setActiveSection(id); setSidebarOpen(false); }}
                      className={`w-full text-left flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        activeSection === id
                          ? 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {activeSection === id && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />}
                      {navLabels[id]}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            <Menu size={20} />
          </button>
          <div className="hidden lg:flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Docs</span>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-100 font-medium">{navLabels[activeSection]}</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a href="https://github.com/feranmiba/progressive-shapes" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FaGithub size={16} /> GitHub
            </a>
            {mounted && (
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 max-w-3xl mx-auto w-full px-6 lg:px-10 py-12">
          <AnimatePresence mode="wait">
            {sections[activeSection] ?? (
              <motion.div key="404" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 text-slate-400">Section not found.</motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
