import { useState } from 'react';
import Background from '../Background/Background'; // Import the Background component

const Docs = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'features', title: 'Features' },
    { id: 'privacy-security', title: 'Privacy & Security' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* Docs Content */}
      <div className="relative z-40 flex flex-col md:flex-row items-start justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32 mb-24">
        {/* Floating Docs Widget */}
        <div className="mt-24 font-tomorrow w-full md:w-72 bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-2xl md:mx-8 mb-8 md:mb-0 z-30">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Documentation
          </h2>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Section */}
        <div className="mt-24 font-tomorrow w-full md:w-[calc(100%-20rem)] max-w-4xl p-6 md:p-8 overflow-y-auto z-40">
          <div
            key={activeSection}
            className="animate-fade-in-up"
          >
            {activeSection === 'introduction' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Introduction
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  CodeCraft AI is a multi-modal, agentic Generative AI platform designed to streamline software development. By leveraging advanced Large Language Models (LLMs) like GPT-4, DeepSeek, R1, and V3, CodeCraft AI helps you scope projects, create development plans, generate code, and deploy it directly to GitHub repositories. Built as a Web3 application, it integrates with the Solana blockchain for secure payments and supports seamless interactions with OpenAI, DeepSeek, and GitHub APIs.
                </p>
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  The platform is built with a modern tech stack, including React JS and Tailwind CSS for the frontend, and FastAPI for the backend orchestration layer. CodeCraft AI prioritizes user privacy and security, ensuring that no user data is stored without explicit consent and that wallet metadata is never retained.
                </p>
              </div>
            )}

            {activeSection === 'getting-started' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Getting Started
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  Follow these steps to begin using CodeCraft AI:
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Sign Up:</strong> Create an account using your email or connect your Solana wallet for Web3 functionality.</li>
                  <li><strong>Create a Project:</strong> Define your project scope, select the appropriate LLM models, and configure your GitHub repository for deployment.</li>
                  <li><strong>Generate Code:</strong> Let CodeCraft AI analyze your requirements and generate the necessary code.</li>
                  <li><strong>Deploy:</strong> Deploy the generated code directly to your GitHub repository or download it for local use.</li>
                </ol>
              </div>
            )}

            {activeSection === 'features' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Features
                </h1>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Multi-Modal LLMs:</strong> Leverage GPT-4, DeepSeek, R1, and V3 models for diverse use cases.</li>
                  <li><strong>Web3 Integration:</strong> Use Solana for secure, blockchain-based payments.</li>
                  <li><strong>GitHub Deployment:</strong> Seamlessly deploy generated code to your GitHub repositories.</li>
                  <li><strong>Privacy-First Design:</strong> No user data is stored without consent, and wallet metadata is never retained.</li>
                  <li><strong>Project Management:</strong> Store projects indefinitely, with deleted projects permanently removed.</li>
                </ul>
              </div>
            )}

            {activeSection === 'privacy-security' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Privacy & Security
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  CodeCraft AI is designed with privacy and security at its core:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>No Unauthorized Data Storage:</strong> User data is only stored with explicit consent.</li>
                  <li><strong>Wallet Privacy:</strong> Users can log out of their wallets at any time, and no wallet metadata is retained.</li>
                  <li><strong>Anonymized Data for Model Training:</strong> Model outputs may be used for fine-tuning, but all data is anonymized.</li>
                  <li><strong>Project Retention:</strong> Projects are stored indefinitely, but deleted projects are permanently removed.</li>
                </ul>
              </div>
            )}

            {activeSection === 'troubleshooting' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Troubleshooting
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  If you encounter issues, try these steps:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Wallet Connection Issues:</strong> Ensure your Solana wallet is properly connected and has sufficient SOL.</li>
                  <li><strong>Code Generation Errors:</strong> Verify that your project scope is clear and the selected LLM models are appropriate.</li>
                  <li><strong>Deployment Failures:</strong> Check your GitHub repository permissions and ensure the repository is correctly linked.</li>
                  <li><strong>Contact Support:</strong> If issues persist, reach out to support@codecraftai.com.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;