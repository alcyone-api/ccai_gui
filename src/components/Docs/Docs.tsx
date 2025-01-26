import { useState } from 'react';
import Background from '../Background/Background'; // Import the Background component

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
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* Docs Content */}
      <div className="relative z-40 flex items-center justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32">
        {/* Floating Docs Widget */}
        <div className="font-tomorrow w-72 bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-2xl mx-8 z-30">
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
        <div className="font-tomorrow w-[calc(100%-20rem)] max-w-4xl p-8 overflow-y-auto z-40">
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
                  <li>Sign up for an account on our website.</li>
                  <li>Create a new project in the dashboard.</li>
                  <li>Follow the setup instructions to configure your environment.</li>
                  <li>Start building and deploying your AI models.</li>
                </ol>
              </div>
            )}

            {activeSection === 'api-reference' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  API Reference
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  The CodeCraft AI API allows you to interact with our platform programmatically. Here are some key endpoints:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>GET /projects</strong> - Retrieve a list of your projects.</li>
                  <li><strong>POST /projects</strong> - Create a new project.</li>
                  <li><strong>GET /projects/:id</strong> - Retrieve details of a specific project.</li>
                  <li><strong>PUT /projects/:id</strong> - Update a specific project.</li>
                  <li><strong>DELETE /projects/:id</strong> - Delete a specific project.</li>
                </ul>
              </div>
            )}

            {activeSection === 'examples' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Examples
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  Here are some example projects to help you get started:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Project 1:</strong> A simple chatbot using natural language processing.</li>
                  <li><strong>Project 2:</strong> An image recognition system using deep learning.</li>
                  <li><strong>Project 3:</strong> A recommendation engine using collaborative filtering.</li>
                </ul>
              </div>
            )}

            {activeSection === 'troubleshooting' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Troubleshooting
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  If you encounter any issues, here are some common troubleshooting steps:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li>Check the documentation for any known issues.</li>
                  <li>Ensure your environment is set up correctly.</li>
                  <li>Contact our support team for further assistance.</li>
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