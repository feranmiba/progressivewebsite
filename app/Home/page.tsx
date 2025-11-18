"use client";
import React, { useState } from "react";
import { CircularProgress, Heart  } from "progressive-shapes";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const handleNext = () => {
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-700">Progressive Shapes</h1>
        <a
          href="https://github.com/feranmiba/progressive-shapes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-700 hover:text-indigo-900 transition text-xl"
        >
          <FaGithub />
        </a>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-16 space-y-12">
        {/* Explanation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center bg-indigo-100 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">What is Progressive Shapes?</h2>
          <p className="text-lg text-indigo-700 leading-relaxed">
            <strong>Progressive Shapes</strong> is a lightweight, customizable component library
            for visual progress indicators. Whether you're building onboarding flows, step-based
            wizards, or visual meters, Progressive Shapes makes it easy and beautiful. <br />
            <br />
            Built for developers by developers — open-source and ready for contribution on GitHub!
          </p>
        </motion.div>

        {/* Examples */}
        <div className="flex flex-col items-center space-y-10">
          {/* Default style */}
          <div className="flex flex-col items-center space-y-2">
            <CircularProgress currentStep={currentStep} totalSteps={totalSteps} />
            <p className="text-sm text-gray-600">Default Style</p>
          </div>

          {/* Custom style */}
          <div className="flex flex-col items-center space-y-2">
            <CircularProgress
              currentStep={currentStep}
              totalSteps={totalSteps}
              radius={40}
              stroke={10}
              strokeBackgroundColor="#E0E7FF"
              strokeProgressColor="#4F46E5"
              className="relative w-[80px] h-[80px]"
              textClassName="absolute inset-0 flex items-center justify-center text-lg font-semibold text-indigo-700"
            />
            <p className="text-sm text-gray-600">Custom Style</p>
          </div>
        </div>


        <div className="flex flex-col items-center space-y-2">
  <Heart
    currentStep={currentStep}
    totalSteps={totalSteps}
    size={100}
    backgroundColor="#FFE4E6"
    progressColor="#DC2626"
  />
  <p className="text-sm text-gray-600">Heart Progress</p>
</div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="mt-4 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition cursor-pointer"
        >
          Next Step
        </motion.button>
      </main>
    </div>
  );
};

export default App;
