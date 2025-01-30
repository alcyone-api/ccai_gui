import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaCode, FaRocket, FaToolbox, FaRegClipboard, FaCheckCircle, FaGithub } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const GenerationResult = () => {
  const [isRawOutputExpanded, setIsRawOutputExpanded] = useState(false);
  const [isPromptExpanded, setIsPromptExpanded] = useState(false);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample data for technologies and deployment steps
  const technologies = [
    { name: "React", icon: "⚛️", description: "Frontend library for building user interfaces" },
    { name: "Node.js", icon: "🟢", description: "JavaScript runtime for backend services" },
    { name: "AWS Lambda", icon: "λ", description: "Serverless compute service" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework for styling" },
  ];

  const nextSteps = [
    "Review the generated project structure",
    "Customize the code to fit your specific needs",
    "Set up your development environment",
    "Run the project locally to test functionality",
    "Consider adding additional features or integrations",
    "Prepare for deployment to your preferred platform"
  ];

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden font-tomorrow">
      <div className="mt-10 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="mb-24 text-center max-w-4xl space-y-8 md:space-y-12 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            AI Chatbot
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-secondary/70 border border-textPrimary/20 rounded-2xl p-6 backdrop-blur-md shadow-card">
            <div className="flex items-center space-x-4">
              <FaCheckCircle className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <h2 className="text-2xl font-bold text-textPrimary">Generation Status: <span className="text-green-500">Success</span></h2>
                <p className="text-textPrimary/80">Your project has been successfully generated and deployed.</p>
              </div>
            </div>
            <a
              href={"https://github.com/your-repo"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center space-x-3 group"
            >
              <FaGithub className="w-6 h-6" />
              <span>View Project on GitHub</span>
            </a>
          </div>
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
                  {"Create a web app for managing tasks with user authentication and a responsive design."}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
            <div className="bg-secondary/70 border border-textPrimary/20 rounded-2xl p-6 backdrop-blur-md shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FaRocket className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-accent">Next Steps</h3>
              </div>
              <ol className="space-y-4">
                {nextSteps.map((step, index) => (
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
              <pre className="text-sm p-6 bg-primary/50 text-textPrimary overflow-auto">
                raw output
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationResult;