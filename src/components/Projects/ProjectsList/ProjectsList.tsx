import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import UpdateProjectModal from './UpdateProjectModal';

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
          <div className="w-full space-y-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border border-textPrimary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex items-center justify-between"
              >
                {/* Left Section: Project Details */}
                <div className="flex-1 pr-6">
                  <h2 className="font-tomorrow text-xl font-bold text-textPrimary break-all overflow-hidden overflow-ellipsis mb-2">
                    {project.name}
                  </h2>
                  <p className="font-tomorrow text-textPrimary/80 text-left break-words mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-tomorrow text-sm text-textPrimary/80">Repo:</span>
                    <span className="font-tomorrow text-sm text-textPrimary break-all">
                      {project.githubRepo}
                    </span>
                  </div>
                </div>

                {/* Right Section: GitHub Button */}
                <div className="flex-shrink-0">
                  <a
                    href={`https://github.com/${project.githubRepo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary/80 hover:text-accent transition-colors"
                    data-tooltip-id="github-tooltip"
                    data-tooltip-content="View on GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
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

      {/* Tooltips */}
      <ReactTooltip id="update-tooltip" className="z-[9999]" />
      <ReactTooltip id="github-tooltip" className="z-[9999]" />
      <ReactTooltip id="remove-tooltip" className="z-[9999]" />
    </div>
  );
};

export default ProjectsList;