import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import UpdateProjectModal from './UpdateProjectModal';
import UpdateLoadingModal from './UpdateLoadingModal';

interface Project {
  id: number;
  name: string;
  description: string;
  githubRepo: string;
}

const ProjectsList = () => {
  const [projects] = useState<Project[]>([
    { id: 1, name: 'E-commerce App', description: 'A full-stack e-commerce platform built with React and Node.js.', githubRepo: 'ecommerce-app' },
    { id: 2, name: 'Portfolio Website', description: 'A personal portfolio website showcasing projects and skills.', githubRepo: 'portfolio-website' },
    { id: 3, name: 'AI Chatbot', description: 'An AI-powered chatbot for customer support using Python and TensorFlow.', githubRepo: 'chatbot-ai' },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);

  const handleUpdateClick = (project: Project) => {
    setSelectedProject(project);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (updatePrompt: string) => {
    console.log('Updating project:', selectedProject?.name, 'with prompt:', updatePrompt);
    setIsLoadingModalOpen(true); // Open the loading modal
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="mb-32 mt-24 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-4xl space-y-12 md:space-y-14">
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            Your Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`} // Link to the project page with the project ID
                className="bg-secondary/70 backdrop-blur-md p-8 rounded-2xl border border-textPrimary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[300px] max-w-[400px] block" // Added 'block' to make the entire card clickable
              >
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
                    onClick={(e) => e.stopPropagation()} // Prevent the Link from being triggered when clicking the GitHub icon
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
                <p className="font-tomorrow text-textPrimary/80 mb-4 text-left">
                  {project.description}
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-tomorrow text-sm text-textPrimary/80">Repo:</span>
                  <span className="font-tomorrow text-sm text-textPrimary">
                    {project.githubRepo}
                  </span>
                </div>
                <div className="flex items-center justify-center w-full mt-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the Link from being triggered
                      handleUpdateClick(project);
                    }}
                    className="mt-12 w-full max-w-[300px] font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                    data-tooltip-id="update-tooltip"
                    data-tooltip-content="Click to update this project."
                  >
                    Update Project
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Update Project Modal */}
      {isUpdateModalOpen && selectedProject && (
        <UpdateProjectModal
          project={selectedProject}
          onClose={() => setIsUpdateModalOpen(false)}
          onSubmit={handleUpdateSubmit}
          onLoadingStart={() => setIsLoadingModalOpen(true)}
        />
      )}

      {/* Loading Modal */}
      <UpdateLoadingModal
        isOpen={isLoadingModalOpen}
        onClose={() => setIsLoadingModalOpen(false)}
      />

      {/* Tooltips */}
      <ReactTooltip id="update-tooltip" className="z-[9999]" />
      <ReactTooltip id="github-tooltip" className="z-[9999]" />
      <ReactTooltip id="remove-tooltip" className="z-[9999]" />
    </div>
  );
};

export default ProjectsList;