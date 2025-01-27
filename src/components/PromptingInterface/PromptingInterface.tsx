import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaCode, FaRocket, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Background from "../Background/Background";

const PromptingInterface = () => {
  const [prompt, setPrompt] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("JavaScript");
  const [infrastructure, setInfrastructure] = useState("AWS");
  const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = () => {
    console.log("Generating code for:", prompt, programmingLanguage, infrastructure);

    // Navigate to the GenerationResult page with data
    navigate("/generation-result", {
      state: {
        prompt,
        repoUrl: "https://github.com/your-repo", // Replace with dynamic data
        description: "This is a detailed description...", // Replace with dynamic data
        rawOutput: "// Raw generated code output goes here", // Replace with dynamic data
      },
    });
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* Content */}
      <div className="mt-10 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="mb-24 text-center max-w-4xl space-y-4 md:space-y-8">
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            Generate Project
          </h1>

          {/* Instructions Section */}
          <div className="w-full bg-secondary/70 border border-textPrimary/20 rounded-2xl shadow-card backdrop-blur-md">
            {/* Instructions Header */}
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={() => setIsInstructionsExpanded(!isInstructionsExpanded)}
            >
              <h2 className="text-2xl font-bold text-accent">Instructions</h2>
              <button className="text-textPrimary/80 hover:text-accent transition-colors">
                {isInstructionsExpanded ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
              </button>
            </div>

            {/* Instructions Content */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isInstructionsExpanded ? "max-h-120" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 space-y-6">
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
                  <li className="flex items-start space-x-8">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      <FaRocket className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-textPrimary text-left">Click "Generate Code" to create your app.</p>
                      <p className="text-sm text-textPrimary/80 text-left">Sit back and watch your idea come to life!</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-8">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      <FaGithub className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-textPrimary text-left">Connect your GitHub account to deploy to your own repository.</p>
                      <p className="text-sm text-textPrimary/80 text-left">Click the "Connect GitHub" button below to get started.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Large Text Input Box */}
          <div className="relative">
            <textarea
              className="w-full h-56 p-5 bg-secondary/70 text-textPrimary rounded-2xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-textPrimary/50 shadow-input"
              placeholder="Enter your app idea here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              data-tooltip-id="prompt-tooltip"
              data-tooltip-content="Describe your app idea in detail to generate the best results."
            />
          </div>

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
                data-tooltip-id="language-tooltip"
                data-tooltip-content="Select the programming language for your project."
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
                data-tooltip-id="infrastructure-tooltip"
                data-tooltip-content="Select the infrastructure for deploying your project."
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

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-12 w-full">
            {/* Generate Button */}
            <button
              className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 w-full md:w-auto"
              onClick={handleGenerate}
              data-tooltip-id="generate-tooltip"
              data-tooltip-content="Generate your project based on the provided details."
            >
              Generate Project
            </button>

            {/* Connect GitHub Button */}
            <button
              className="font-tomorrow bg-transparent border-2 border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2 w-full md:w-auto"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Connect your GitHub account to deploy your project."
            >
              <FaGithub className="w-6 h-6" />
              <span>Connect GitHub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tooltips */}
      <ReactTooltip id="prompt-tooltip" className="z-[9999]" />
      <ReactTooltip id="language-tooltip" className="z-[9999]" />
      <ReactTooltip id="infrastructure-tooltip" className="z-[9999]" />
      <ReactTooltip id="generate-tooltip" className="z-[9999]" />
      <ReactTooltip id="github-tooltip" className="z-[9999]" />
    </div>
  );
};

export default PromptingInterface;