import { useState } from 'react';
import { FaGithub, FaTrash } from 'react-icons/fa'; // Added FaGithub and FaTrash
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Tooltip component
import UpdateProjectModal from './UpdateProjectModal'; // Import the modal component
import Background from '../Background/Background'; // Import the Background component

// Define the Project type
interface Project {
  id: number;
  name: string;
  description: string;
  githubRepo: string; // Added GitHub repo name
}

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'E-commerce App', description: 'A full-stack e-commerce platform built with React and Node.js.', githubRepo: 'ecommerce-app' },
    { id: 2, name: 'Portfolio Website', description: 'A personal portfolio website showcasing projects and skills.', githubRepo: 'portfolio-website' },
    { id: 3, name: 'Chatbot', description: 'An AI-powered chatbot for customer support using Python and TensorFlow.', githubRepo: 'chatbot-ai' },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = (updatePrompt: string) => {
    console.log('Updating project:', selectedProject?.name, 'with prompt:', updatePrompt);
    // Add your logic to update the project here
    setIsModalOpen(false);
  };

  const handleRemoveProject = (projectId: number) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* Content */}
      <div className="mt-24 mb-24 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-4xl space-y-12 md:space-y-14">
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            Your Projects
          </h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border border-textPrimary/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Name and GitHub Repo */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-tomorrow text-xl font-bold text-textPrimary">
                    {project.name}
                  </h2>
                  <a
                    href={`https://github.com/${project.githubRepo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary/80 hover:text-accent transition-colors"
                    data-tooltip-id="github-tooltip"
                    data-tooltip-content="View on GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>

                {/* Project Description */}
                <p className="font-tomorrow text-textPrimary/80 mb-4">
                  {project.description}
                </p>

                {/* GitHub Repo Name */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-tomorrow text-sm text-textPrimary/80">Repo:</span>
                  <span className="font-tomorrow text-sm text-textPrimary">
                    {project.githubRepo}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between">
                  {/* Update Button */}
                  <button
                    onClick={() => handleUpdateClick(project)}
                    className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                    data-tooltip-id="update-tooltip"
                    data-tooltip-content="Click to update this project."
                  >
                    Update
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveProject(project.id)}
                    className="font-tomorrow bg-transparent border-2 border-accent text-accent hover:bg-accent/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center space-x-2"
                    data-tooltip-id="remove-tooltip"
                    data-tooltip-content="Remove this project from CodeCraft."
                  >
                    <FaTrash className="w-4 h-4" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Update Project Modal */}
      {isModalOpen && selectedProject && (
        <UpdateProjectModal
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleUpdateSubmit}
        />
      )}

      {/* Tooltips */}
      <ReactTooltip id="update-tooltip" className="z-[9999]" />
      <ReactTooltip id="github-tooltip" className="z-[9999]" />
      <ReactTooltip id="remove-tooltip" className="z-[9999]" />
    </div>
  );
};

export default ProjectsList;