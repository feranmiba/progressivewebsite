"use client"


import React, { useState } from 'react';
import { FaGithub, FaNpm, FaCode, FaPalette, FaRocket, FaCopy } from 'react-icons/fa';
import { CircularProgress, Heart, Star, Diamond, Triangle, Donut } from "progressive-shapes";

export default function ProgressiveShapesWebsite() {
  const [currentStep, setCurrentStep] = useState(5);
  const [totalSteps, setTotalSteps] = useState(8);
  const [size, setSize] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState('#FFE4E6');
  const [progressColor, setProgressColor] = useState('#DC2626');
  const [thickness, setThickness] = useState(0.3);
  const [copied, setCopied] = useState('');

  const shapes = [
    { 
      id: 'circular', 
      name: 'CircularProgress',
      component: CircularProgress,
      props: { currentStep, totalSteps, size, backgroundColor, progressColor }
    },
    { 
      id: 'heart', 
      name: 'Heart',
      component: Heart,
      props: { currentStep, totalSteps, size, backgroundColor, progressColor }
    },
    { 
      id: 'star', 
      name: 'Star',
      component: Star,
      props: { currentStep, totalSteps, size, backgroundColor, progressColor }
    },
    { 
      id: 'diamond', 
      name: 'Diamond',
      component: Diamond,
      props: { currentStep, totalSteps, size, backgroundColor, progressColor }
    },
    { 
      id: 'triangle', 
      name: 'Triangle',
      component: Triangle,
      props: { currentStep, totalSteps, size, backgroundColor, progressColor }
    },
    { 
      id: 'donut', 
      name: 'Donut',
      component: Donut,
      props: { currentStep, totalSteps, size, backgroundColor, progressColor, thickness }
    },
  ];

  const generateCode = (shape: any) => {
    const hasThickness = shape.id === 'donut';
    return `import { ${shape.name} } from "progressive-shapes";

function MyComponent() {
  return (
    <${shape.name}
      currentStep={${currentStep}}
      totalSteps={${totalSteps}}
      size={${size}}
      backgroundColor="${backgroundColor}"
      progressColor="${progressColor}"${hasThickness ? `\n      thickness={${thickness}}` : ''}
    />
  );
}`;
  };

  const handleCopy = (code: any, shapeName: any) => {
    navigator.clipboard.writeText(code);
    setCopied(shapeName);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10" />
        <nav className="relative container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <FaPalette className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Progressive Shapes
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.npmjs.com/package/progressive-shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-medium shadow-lg"
            >
              <FaNpm className="text-xl" />
              <span>NPM</span>
            </a>
            <a
              href="https://github.com/feranmiba/progressive-shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg transition font-medium shadow-lg"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <h2 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Beautiful Progress Indicators
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A lightweight, customizable React component library for creating stunning visual progress indicators. 
            Built by <span className="font-bold">developers</span> for developers who love colorful UIs.
          </p>

          {/* Installation */}
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-6 text-left shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-auto text-gray-400 text-sm">Terminal</span>
            </div>
            <code className="text-green-400 text-lg">npm install progressive-shapes</code>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <FaCode className="text-indigo-600" />
            Interactive Playground
          </h3>
          <p className="text-gray-600 mb-8">Adjust the values below and watch all shapes update in real-time!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Step: <span className="text-indigo-600">{currentStep}</span>
              </label>
              <input
                type="range"
                min="0"
                max={totalSteps}
                value={currentStep}
                onChange={(e) => setCurrentStep(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Steps: <span className="text-purple-600">{totalSteps}</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={totalSteps}
                onChange={(e) => setTotalSteps(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Size: <span className="text-pink-600">{size}px</span>
              </label>
              <input
                type="range"
                min="50"
                max="200"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Background Color
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Progress Color
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  value={progressColor}
                  onChange={(e) => setProgressColor(e.target.value)}
                  className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-300"
                />
                <input
                  type="text"
                  value={progressColor}
                  onChange={(e) => setProgressColor(e.target.value)}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Donut Thickness: <span className="text-indigo-600">{thickness.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0.1"
                max="0.5"
                step="0.05"
                value={thickness}
                onChange={(e) => setThickness(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Shapes Grid */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800 mb-3">Available Shapes</h3>
          <p className="text-lg text-gray-600">See how each shape renders with your custom settings</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {shapes.map((shape) => {
            const ShapeComponent = shape.component;
            const code = generateCode(shape);
            
            return (
              <div key={shape.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                {/* Preview Section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center min-h-[280px]">
                  <ShapeComponent {...shape.props} />
                </div>
                
                {/* Info Section */}
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">{shape.name}</h4>
                  <div className="bg-gray-900 rounded-lg p-4 mb-4 relative">
                    <button
                      onClick={() => handleCopy(code, shape.name)}
                      className="absolute top-2 right-2 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm flex items-center gap-1"
                    >
                      <FaCopy />
                      {copied === shape.name ? 'Copied!' : 'Copy'}
                    </button>
                    <pre className="text-green-400 text-xs overflow-x-auto pr-20">
                      <code>{code}</code>
                    </pre>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Progress: <strong>{Math.round((currentStep / totalSteps) * 100)}%</strong></span>
                    <span>{currentStep} / {totalSteps}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 mt-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Progressive Shapes?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Lightweight</h4>
              <p className="text-gray-600">Zero dependencies. Pure CSS and SVG. Minimal bundle size impact on your project.</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">TypeScript Ready</h4>
              <p className="text-gray-600">Full TypeScript support with type definitions included out of the box.</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPalette className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Fully Customizable</h4>
              <p className="text-gray-600">Every color, size, and property is customizable to match your design system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution CTA */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold text-white mb-6">Open Source & Community Driven</h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Progressive Shapes was built by <a href="https://github.com/feranmiba" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-white">feranmiba</a> to help developers 
            create more colorful and engaging UIs. <strong>We welcome contributions!</strong>
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Have an idea for a new shape? Want to improve existing ones? The project is open for contributions. 
            Help us make UI development more fun and colorful for everyone! 🎨
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/feranmiba/progressive-shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-indigo-600 font-bold rounded-xl transition shadow-xl flex items-center gap-2 text-lg"
            >
              <FaGithub className="text-2xl" />
              Contribute on GitHub
            </a>
            <a
              href="https://github.com/feranmiba/progressive-shapes/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold rounded-xl transition shadow-xl flex items-center gap-2 text-lg"
            >
              <FaCode className="text-2xl" />
              Request a Shape
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-2">Progressive Shapes</h4>
            <p className="text-gray-400">Making progress indicators beautiful, one shape at a time.</p>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://github.com/feranmiba/progressive-shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.npmjs.com/package/progressive-shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaNpm className="text-2xl" />
            </a>
          </div>
          <p className="text-center text-gray-400">
            Created with ❤️ by{' '}
            <a
              href="https://github.com/feranmiba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              feranmiba
            </a>
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">Open Source • MIT License</p>
        </div>
      </footer>
    </div>
  );
}
