import { useState } from 'react';

const PromptingInterface = () => {
  const [prompt, setPrompt] = useState(''); // State to hold the user's prompt
  const [appType, setAppType] = useState('React Python'); // State to hold the selected app type
  const [deploymentType, setDeploymentType] = useState('Docker Container'); // State to hold the selected deployment type

  const handleGenerate = () => {
    // Handle the generate button click
    console.log('Generating code for:', prompt, appType, deploymentType);
    // You can add your logic here to send the prompt and options to the backend
  };

  return (
    <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
      <div className="text-center max-w-4xl space-y-8 md:space-y-14">
        <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100 leading-tight animate-fade-in-up">
          Describe Your App Idea
        </h1>

        {/* Large Text Input Box */}
        <textarea
          className="w-full h-48 p-4 bg-gray-800 text-gray-100 rounded-lg border border-orange-500/50 focus:border-orange-500 focus:outline-none"
          placeholder="Enter your app idea here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {/* Dashboard Elements */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* App Type Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300">App Type</label>
            <select
              className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-orange-500/50 focus:border-orange-500 focus:outline-none"
              value={appType}
              onChange={(e) => setAppType(e.target.value)}
            >
              <option value="React Python">React Python</option>
              <option value="React Node.js">React Node.js</option>
              <option value="Vue.js Django">Vue.js Django</option>
              <option value="Angular Flask">Angular Flask</option>
            </select>
          </div>

          {/* Deployment Type Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300">Deployment Type</label>
            <select
              className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-orange-500/50 focus:border-orange-500 focus:outline-none"
              value={deploymentType}
              onChange={(e) => setDeploymentType(e.target.value)}
            >
              <option value="Docker Container">Docker Container</option>
              <option value="Desktop App">Desktop App</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Web App">Web App</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <button
          className="font-tomorrow bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20"
          onClick={handleGenerate}
        >
          Generate Code
        </button>

        {/* Instructions Section */}
        <div className="text-left text-gray-300">
          <h2 className="text-xl font-bold mb-2">Instructions</h2>
          <ul className="list-disc list-inside">
            <li>Describe your app idea in the text box above.</li>
            <li>Select the appropriate app type and deployment type from the dropdowns.</li>
            <li>Click "Generate Code" to create your app.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromptingInterface;