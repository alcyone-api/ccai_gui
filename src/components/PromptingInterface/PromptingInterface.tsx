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
          {/* Programming Language Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-3"> {/* Added mb-3 for more space */}
              Programming Language
            </label>
            <select
              className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-orange-500/50 focus:border-orange-500 focus:outline-none"
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
            <label className="block text-sm font-medium text-gray-300 mb-3"> {/* Added mb-3 for more space */}
              Infrastructure
            </label>
            <select
              className="w-full p-2 bg-gray-800 text-gray-100 rounded-lg border border-orange-500/50 focus:border-orange-500 focus:outline-none"
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
          className="font-tomorrow bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20"
          onClick={handleGenerate}
        >
          Generate Code
        </button>

        {/* Instructions Section */}
        <div className="w-full p-6 bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4 text-orange-500">Instructions</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <div className="p-2 bg-orange-500/10 rounded-lg flex-shrink-0">
                <FaLightbulb className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-100 text-left">Describe your app idea in the text box above.</p>
                <p className="text-sm text-gray-400 text-left">Be as detailed as possible to get the best results.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="p-2 bg-orange-500/10 rounded-lg flex-shrink-0">
                <FaCode className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-100 text-left">Select the appropriate programming language and infrastructure from the dropdowns.</p>
                <p className="text-sm text-gray-400 text-left">Choose the tools and platforms that best suit your needs.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="p-2 bg-orange-500/10 rounded-lg flex-shrink-0">
                <FaRocket className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-100 text-left">Click "Generate Code" to create your app.</p>
                <p className="text-sm text-gray-400 text-left">Sit back and watch your idea come to life!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromptingInterface;