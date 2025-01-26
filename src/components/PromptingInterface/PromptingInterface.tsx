import { useState } from 'react';
import { FaLightbulb, FaCode, FaRocket } from 'react-icons/fa'; // Importing icons from react-icons

const PromptingInterface = () => {
  const [prompt, setPrompt] = useState(''); // State to hold the user's prompt
  const [programmingLanguage, setProgrammingLanguage] = useState('JavaScript'); // State to hold the selected programming language
  const [infrastructure, setInfrastructure] = useState('AWS'); // State to hold the selected infrastructure

  const handleGenerate = () => {
    // Handle the generate button click
    console.log('Generating code for:', prompt, programmingLanguage, infrastructure);
    // You can add your logic here to send the prompt and options to the backend
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Particle Canvas (Reuse from HeroSection) */}
      <canvas
        className="absolute inset-0 w-full h-full opacity-20 z-0"
        width={typeof window !== 'undefined' ? window.innerWidth : 0}
        height={typeof window !== 'undefined' ? window.innerHeight : 0}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/30 z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="mt-8 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-4xl space-y-4 md:space-y-8">
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            Generate Project
          </h1>

          {/* Instructions Section */}
          <div className="w-full p-8 bg-secondary/70 border border-textPrimary/20 rounded-2xl shadow-card backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 text-accent">Instructions</h2>
            <ul className="space-y-6">
              <li className="flex items-start space-x-6">
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <FaLightbulb className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-textPrimary text-left">Describe your app idea in the text box below.</p>
                  <p className="text-sm text-textPrimary/80 text-left">Be as detailed as possible to get the best results.</p>
                </div>
              </li>
              <li className="flex items-start space-x-6">
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <FaCode className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-textPrimary text-left">Select the appropriate programming language and infrastructure from the dropdowns.</p>
                  <p className="text-sm text-textPrimary/80 text-left">Choose the tools and platforms that best suit your needs.</p>
                </div>
              </li>
              <li className="flex items-start space-x-6">
                <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                  <FaRocket className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-textPrimary text-left">Click "Generate Code" to create your app.</p>
                  <p className="text-sm text-textPrimary/80 text-left">Sit back and watch your idea come to life!</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Large Text Input Box */}
          <textarea
            className="w-full h-56 p-5 bg-secondary/70 text-textPrimary rounded-2xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-textPrimary/50 shadow-input"
            placeholder="Enter your app idea here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          {/* Dashboard Elements */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Programming Language Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-textPrimary/80 mb-3">
                Programming Language
              </label>
              <select
                className="w-full p-3 bg-secondary/70 text-textPrimary rounded-2xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-input"
                value={programmingLanguage}
                onChange={(e) => setProgrammingLanguage(e.target.value)}
              >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
                <option value="Go">Go</option>
                <option value="Ruby">Ruby</option>
              </select>
            </div>

            {/* Infrastructure Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-textPrimary/80 mb-3">
                Infrastructure
              </label>
              <select
                className="w-full p-3 bg-secondary/70 text-textPrimary rounded-2xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-input"
                value={infrastructure}
                onChange={(e) => setInfrastructure(e.target.value)}
              >
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
                <option value="Google Cloud">Google Cloud</option>
                <option value="Docker">Docker</option>
                <option value="Kubernetes">Kubernetes</option>
                <option value="Terraform">Terraform</option>
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <button
            className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            onClick={handleGenerate}
          >
            Generate Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptingInterface;