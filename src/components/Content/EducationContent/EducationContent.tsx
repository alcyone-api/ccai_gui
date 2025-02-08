import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons for the dropdown

const EducationContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage dropdown visibility

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'new-projects', title: 'New Projects' },
    { id: 'updating-projects', title: 'Updating Projects' },
    { id: 'examples', title: 'Examples' },
  ];

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col md:flex-row items-start justify-center px-4 pt-16 mt-12 md:pt-24 pb-24 md:pb-32 mb-12">
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex justify-between items-center p-3 bg-secondary/90 backdrop-blur-sm rounded-xl border border-accent/20 shadow-lg text-textPrimary/70 hover:bg-secondary/80 transition-all duration-300"
          >
            <span>Prompting 101</span>
            {isMenuOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
          </button>
          {isMenuOpen && (
            <ul className="mt-2 space-y-2 bg-secondary/90 backdrop-blur-sm rounded-xl border border-accent/20 shadow-lg p-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMenuOpen(false); // Close dropdown after selecting a section
                    }}
                    className={`w-full text-left p-2 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-accent text-white shadow-md shadow-accent/20'
                        : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Sidebar Menu */}
        <div className="hidden md:block mt-24 font-tomorrow w-full md:w-72 bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-2xl md:mx-8 mb-8 md:mb-0 z-30">
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
        <div className="mt-16 font-tomorrow w-full md:w-[calc(100%-20rem)] max-w-4xl p-6 md:p-8 overflow-y-auto z-40">
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
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  <strong>Why Prompt Engineering Matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Clarity:</strong> Clear prompts reduce ambiguity and ensure the agents understand your requirements.</li>
                  <li><strong>Efficiency:</strong> Well-structured prompts save time by minimizing back-and-forth iterations.</li>
                  <li><strong>Quality:</strong> Detailed prompts lead to higher-quality outputs that align with your vision.</li>
                </ul>
              </div>
            )}

            {/* Best Practices Section */}
            {activeSection === 'best-practices' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Best Practices
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
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  <strong>Common Mistakes to Avoid:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Vague Prompts:</strong> Ambiguous instructions lead to unpredictable results.</li>
                  <li><strong>Overloading Information:</strong> Too much context can reduce the quality of the output. Start with your core application functionality, and expand with updates.</li>
                </ul>
              </div>
            )}

            {/* New Projects Section */}
            {activeSection === 'new-projects' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  New Projects
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  When generating a new project, focus on <strong>clear context</strong> and <strong>core functionality</strong>. Avoid overly granular requests at this stage — start with a solid foundation and iterate later.
                </p>
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  <strong>Tips for New Projects:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Describe the Purpose:</strong> What problem does the app solve? Who is the target audience?</li>
                  <li><strong>Outline Key Features:</strong> What are the must-have functionalities?</li>
                  <li><strong>Keep It Simple:</strong> Avoid super granular details to start.</li>
                </ul>
              </div>
            )}

            {/* Updating Projects Section */}
            {activeSection === 'updating-projects' && (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Updating Projects
                </h1>
                <p className="text-textPrimary/80 leading-relaxed">
                  Once you have a foundational app, use the <b className="text-accent">Update Project</b> feature to add new features, fix bugs, or refine existing functionality. Updates can be more granular and detailed than initial project prompts.
                </p>
                <p className="text-textPrimary/80 leading-relaxed mt-4">
                  <strong>Tips for Updating Projects:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-textPrimary/80">
                  <li><strong>Be Specific:</strong> Clearly describe the changes or additions you want.</li>
                  <li><strong>Reference Existing Code:</strong> Point to specific parts of the codebase that need updates.</li>
                  <li><strong>Test Incrementally:</strong> Make iterative changes to add new features.</li>
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
                  {/* Example 1: E-Commerce Platform */}
                  <div className="bg-secondary p-6 rounded-lg shadow-card">
                    <h3 className="text-2xl font-semibold text-textPrimary mb-4">E-Commerce Platform</h3>
                    <p className="text-textPrimary/80 mb-4">
                      Generate a foundational e-commerce platform with user authentication, product listings, and a shopping cart.
                    </p>
                    <div className="bg-primary p-4 rounded">
                      <p className="text-textPrimary font-mono">
                        <strong>Generate Prompt:</strong><br />
                        "Create an e-commerce platform with the following core features:<br />
                        - User authentication (login/signup).<br />
                        - Product listings with categories and search functionality.<br />
                        - A shopping cart with checkout functionality.<br />
                      </p>
                    </div>
                    <div className="bg-primary p-4 rounded mt-4">
                      <p className="text-textPrimary font-mono">
                        <strong>Update Prompt:</strong><br />
                        "Add payment integration to the existing e-commerce platform. Include:<br />
                        - Integration with Stripe for payment processing.<br />
                        - A checkout page with payment form and validation.<br />
                        - Error handling for failed transactions.<br />
                        - Update the database to store payment records."
                      </p>
                    </div>
                  </div>

                  {/* Example 2: Task Management App */}
                  <div className="bg-secondary p-6 rounded-lg shadow-card">
                    <h3 className="text-2xl font-semibold text-textPrimary mb-4">Task Management App</h3>
                    <p className="text-textPrimary/80 mb-4">
                      Generate a task management app with user authentication, task creation, and due date reminders.
                    </p>
                    <div className="bg-primary p-4 rounded">
                      <p className="text-textPrimary font-mono">
                        <strong>Generate Prompt:</strong><br />
                        "Create a task management app with the following core features:<br />
                        - User authentication (login/signup).<br />
                        - Task creation, editing, and deletion.<br />
                        - Due date reminders with email notifications.<br />
                      </p>
                    </div>
                    <div className="bg-primary p-4 rounded mt-4">
                      <p className="text-textPrimary font-mono">
                        <strong>Update Prompt:</strong><br />
                        "Add collaboration features to the existing task management app. Include:<br />
                        - Ability to assign tasks to other users.<br />
                        - Real-time updates for task changes.<br />
                        - A comments section for each task.<br />
                        - Update the database to store user assignments and comments."
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