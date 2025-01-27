import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCopy, FaCode, FaRocket, FaToolbox, FaRegClipboard, FaCheckCircle, FaGithub } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Background from "../Background/Background";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const GenerationResult = ({ prompt, repoUrl, description, rawOutput }) => {
  const [isRawOutputExpanded, setIsRawOutputExpanded] = useState(false);
  const [isPromptExpanded, setIsPromptExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sample data for technologies and deployment steps
  const technologies = [
    { name: "React", icon: "⚛️", description: "Frontend library for building user interfaces" },
    { name: "Node.js", icon: "🟢", description: "JavaScript runtime for backend services" },
    { name: "AWS Lambda", icon: "λ", description: "Serverless compute service" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework for styling" },
  ];

  const deploymentSteps = [
    "Clone the repository: git clone https://github.com/your-repo.git",
    "Navigate to the project directory: cd your-repo",
    "Install dependencies: npm install",
    "Start the development server: npm run dev",
    "Build the project for production: npm run build",
    "Deploy the project: npm run deploy",
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden font-tomorrow">
      <Background />
      <div className="mt-10 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="mb-24 text-center max-w-4xl space-y-8 md:space-y-12 w-full">
          {/* Project Name Header */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            AI Chatbot
          </h1>

          {/* Top Row: Generation Status and GitHub Button */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-secondary/70 border border-textPrimary/20 rounded-2xl p-6 backdrop-blur-md shadow-card">
            <div className="flex items-center space-x-4">
              <FaCheckCircle className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-textPrimary">Generation Status: <span className="text-green-500">Success</span></h2>
                <p className="text-textPrimary/80">Your project has been successfully generated and deployed.</p>
              </div>
            </div>
            <a
              href={repoUrl || "https://github.com/your-repo"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center space-x-3 group"
            >
              <FaGithub className="w-6 h-6" />
              <span>View Project on GitHub</span>
            </a>
          </div>

          {/* Original Prompt Section (Expandable) */}
          <div className="bg-secondary/70 border border-textPrimary/20 rounded-2xl backdrop-blur-md shadow-card overflow-hidden">
            <div
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setIsPromptExpanded(!isPromptExpanded)}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FaRegClipboard className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent">Original Prompt</h3>
              </div>
              <button className="text-textPrimary/80 hover:text-accent transition-colors">
                {isPromptExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            <div className={`transition-all duration-300 ${isPromptExpanded ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="px-6 pb-6">
                <p className="text-textPrimary/90 italic">
                  {prompt || "Create a web app for managing tasks with user authentication and a responsive design."}
                </p>
              </div>
            </div>
          </div>

          {/* Application Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technologies Used */}
            <div className="bg-secondary/70 border border-textPrimary/20 rounded-2xl p-6 backdrop-blur-md shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FaToolbox className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent">Technologies Used</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-4 bg-primary rounded-xl hover:bg-secondary/50 transition-colors cursor-help"
                    data-tooltip-id={`tech-tooltip-${index}`}
                    data-tooltip-content={tech.description}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-textPrimary">{tech.name}</span>
                    </div>
                    <ReactTooltip id={`tech-tooltip-${index}`} className="z-[9999]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Deployment Steps */}
            <div className="bg-secondary/70 border border-textPrimary/20 rounded-2xl p-6 backdrop-blur-md shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FaRocket className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent">Deployment Steps</h3>
              </div>
              <ol className="space-y-4">
                {deploymentSteps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-textPrimary/90 text-left">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Raw Output Section */}
          <div className="bg-secondary/70 border border-textPrimary/20 rounded-2xl backdrop-blur-md shadow-card overflow-hidden">
            <div
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setIsRawOutputExpanded(!isRawOutputExpanded)}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FaCode className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent">Raw Output</h3>
              </div>
              <button className="text-textPrimary/80 hover:text-accent transition-colors">
                {isRawOutputExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            <div className={`transition-all duration-300 ${isRawOutputExpanded ? "max-h-[800px]" : "max-h-0"}`}>
              <div className="relative">
                <button
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 p-2 bg-primary/80 rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <FaCopy className="text-accent" />
                </button>
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  className="text-sm p-6 !bg-primary/50"
                >
                  {rawOutput || `// Project Architecture Overview
/**
 * This project is structured as a modern full-stack application with the following architecture:
 *
 * 1. Frontend:
 *    - Built with React for a dynamic and responsive user interface.
 *    - Styled using Tailwind CSS for rapid and consistent design.
 *    - State management handled by React Context API.
 *
 * 2. Backend:
 *    - Powered by Node.js and Express for RESTful API endpoints.
 *    - User authentication implemented with JWT (JSON Web Tokens).
 *    - Database: MongoDB for storing user data and application state.
 *
 * 3. Deployment:
 *    - Frontend hosted on Vercel for fast global delivery.
 *    - Backend deployed on AWS Lambda for serverless scalability.
 *    - CI/CD pipeline configured using GitHub Actions.
 *
 * 4. Additional Features:
 *    - Real-time updates using WebSockets.
 *    - Unit and integration testing with Jest and React Testing Library.
 *    - Docker support for local development and deployment.
 */
`}
                </SyntaxHighlighter>
                {copied && (
                  <div className="absolute bottom-4 right-4 bg-accent/10 text-accent px-4 py-2 rounded-lg animate-zoom-in">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationResult;