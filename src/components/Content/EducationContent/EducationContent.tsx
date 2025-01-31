import { useState } from 'react';

const EducationContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'common-pitfalls', title: 'Common Pitfalls' },
    { id: 'examples', title: 'Examples' },
  ];

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col md:flex-row items-start justify-center px-4 pt-16 mt-24 md:pt-24 pb-24 md:pb-32 mb-24">
        {/* Sidebar Navigation */}
        <div className="mt-24 font-tomorrow w-full md:w-72 bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-2xl md:mx-8 mb-8 md:mb-0 z-30">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Prompting 101
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

        {/* Main Content */}
        <div className="mt-24 font-tomorrow w-full md:w-[calc(100%-20rem)] max-w-4xl p-6 md:p-8 overflow-y-auto z-40">
          <div key={activeSection} className="animate-fade-in-up">
            {/* Introduction Section */}
            {activeSection === 'introduction' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Introduction
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  Prompt engineering is the art of crafting inputs (prompts) to guide agents to produce desired outputs. Effective prompts are clear, specific, and provide enough context for the agents to understand the task.
                </p>
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  This guide will walk you through the fundamentals of CodeCraft AI prompting, including best practices, common pitfalls, and ready-to-use examples for various use cases.
                </p>
              </div>
            )}

            {/* Best Practices */}
            {activeSection === 'best-practices' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Scoping Projects
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  For best results, when you first generate a project, start with a basic foundation. Explain the core function of your application. From there, use the <b className="text-accent">Update Project</b> feature to make more specific requests.
                </p>
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  <strong>Key Principles:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Define Core Features:</strong> Clearly outline the primary functionality the software should have.</li>
                  <li><strong>Break Down Tasks:</strong> Divide the project into smaller, manageable tasks with specific goals.</li>
                  <li><strong>Iterate and Refine:</strong> Start with a foundational app and use the Update Project feature to add on to it.</li>
                </ul>
              </div>
            )}

            {/* Common Pitfalls Section */}
            {activeSection === 'common-pitfalls' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Common Pitfalls
                </h1>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Vague Prompts:</strong> Ambiguous instructions lead to unpredictable results.</li>
                  <li><strong>Overloading Information:</strong> Too much context can confuse the model.</li>
                  <li><strong>Lack of Examples:</strong> Without examples, the model may misinterpret the task.</li>
                </ul>
              </div>
            )}

            {/* Examples Section */}
            {activeSection === 'examples' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Examples
                </h1>
                <div className="space-y-8">
                  {/* Template 1: Full-Stack Web App */}
                  <div className="bg-secondary p-6 rounded-lg shadow-card">
                    <h3 className="text-2xl font-semibold text-textPrimary mb-4">Full-Stack Web App</h3>
                    <p className="text-textPrimary/80 mb-4">
                      Build a full-stack web application with user authentication, a dashboard, and CRUD functionality for a task management system.
                    </p>
                    <div className="bg-primary p-4 rounded">
                      <p className="text-textPrimary font-mono">
                        <strong>Prompt:</strong><br />
                        "Create a full-stack web application using React for the frontend and Node.js with Express for the backend. The app should include:<br />
                        - User authentication (login/signup) with JWT.<br />
                        - A dashboard displaying user-specific tasks.<br />
                        - CRUD functionality for tasks (create, read, update, delete).<br />
                        - Use MongoDB for the database.<br />
                        - Deploy the app using Docker and provide a CI/CD pipeline configuration."
                      </p>
                    </div>
                  </div>

                  {/* Template 2: API Integration */}
                  <div className="bg-secondary p-6 rounded-lg shadow-card">
                    <h3 className="text-2xl font-semibold text-textPrimary mb-4">API Integration</h3>
                    <p className="text-textPrimary/80 mb-4">
                      Integrate a third-party API into an existing application to fetch and display real-time data.
                    </p>
                    <div className="bg-primary p-4 rounded">
                      <p className="text-textPrimary font-mono">
                        <strong>Prompt:</strong><br />
                        "Integrate the OpenWeatherMap API into an existing React application to display real-time weather data for a user-specified location. Include:<br />
                        - A search bar for entering the location.<br />
                        - Display of current weather conditions (temperature, humidity, wind speed).<br />
                        - Error handling for invalid locations or API failures.<br />
                        - Cache API responses for 10 minutes to reduce load."
                      </p>
                    </div>
                  </div>

                  {/* Template 3: Machine Learning Pipeline */}
                  <div className="bg-secondary p-6 rounded-lg shadow-card">
                    <h3 className="text-2xl font-semibold text-textPrimary mb-4">Machine Learning Pipeline</h3>
                    <p className="text-textPrimary/80 mb-4">
                      Build a machine learning pipeline for sentiment analysis on customer reviews.
                    </p>
                    <div className="bg-primary p-4 rounded">
                      <p className="text-textPrimary font-mono">
                        <strong>Prompt:</strong><br />
                        "Create a machine learning pipeline for sentiment analysis using Python. Include:<br />
                        - Data preprocessing (cleaning, tokenization, stemming).<br />
                        - Training a model using a dataset of customer reviews.<br />
                        - Evaluation metrics (accuracy, precision, recall).<br />
                        - A simple Flask API to serve predictions.<br />
                        - Documentation for deploying the pipeline on AWS SageMaker."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;