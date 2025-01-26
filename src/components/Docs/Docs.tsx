import { useState } from 'react';

const Docs = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'api-reference', title: 'API Reference' },
    { id: 'examples', title: 'Examples' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex">
      {/* Sidebar */}
      <div className="mt-24 font-tomorrow w-64 bg-secondary p-6 border-r border-accent/30">
        <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
          Documentation
        </h2>
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left p-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent text-white'
                    : 'text-textPrimary/70 hover:bg-secondary/80'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="mt-24 font-tomorrow flex-1 p-8 overflow-y-auto">
        {activeSection === 'introduction' && (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Introduction
            </h1>
            <p className="text-textPrimary/80 leading-relaxed">
              Welcome to the CodeCraft AI documentation! This guide will help you get started with
              our platform, from setting up your first project to deploying AI-powered coding agents.
            </p>
          </div>
        )}

        {activeSection === 'getting-started' && (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Getting Started
            </h1>
            <p className="text-textPrimary/80 leading-relaxed">
              To get started with CodeCraft AI, follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 text-textPrimary/80">
              <li>Sign up for an account on the CodeCraft AI platform.</li>
              <li>Create a new project and configure your AI agents.</li>
              <li>Deploy your project and monitor its performance.</li>
            </ol>
          </div>
        )}

        {activeSection === 'api-reference' && (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              API Reference
            </h1>
            <p className="text-textPrimary/80 leading-relaxed">
              Explore the CodeCraft AI API to integrate our services into your applications.
            </p>
            <div className="mt-6 bg-secondary p-6 rounded-lg">
              <pre className="text-textPrimary/80">
                <code>
                  {`POST /api/v1/agents
                    Content-Type: application/json

                    {
                      "name": "My AI Agent",
                      "language": "python",
                      "description": "An AI agent for automating tasks."
                    }`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeSection === 'examples' && (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Examples
            </h1>
            <p className="text-textPrimary/80 leading-relaxed">
              Check out these examples to see how you can use CodeCraft AI in your projects:
            </p>
            <div className="mt-6 space-y-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Example 1: Automating Code Reviews</h2>
                <p className="text-textPrimary/80">
                  Use CodeCraft AI to automate code reviews and ensure high-quality code.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Example 2: Building a Chatbot</h2>
                <p className="text-textPrimary/80">
                  Create a chatbot using CodeCraft AI and deploy it in minutes.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'troubleshooting' && (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Troubleshooting
            </h1>
            <p className="text-textPrimary/80 leading-relaxed">
              Having issues? Check out our troubleshooting guide for common problems and solutions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Docs;