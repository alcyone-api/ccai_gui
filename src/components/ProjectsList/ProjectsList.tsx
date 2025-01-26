import { useState } from 'react';
import { Info } from 'react-feather'; // Info icon for tooltips
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Corrected import
import UpdateProjectModal from './UpdateProjectModal'; // Import the modal component
import Background from '../Background/Background'; // Import the Background component

// Define the Project type
interface Project {
  id: number;
  name: string;
  description: string;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'E-commerce App', description: 'A full-stack e-commerce platform.' },
    { id: 2, name: 'Portfolio Website', description: 'A personal portfolio built with React.' },
    { id: 3, name: 'Chatbot', description: 'An AI-powered chatbot for customer support.' },
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

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Component */}
      <Background />

      {/* Content */}
      <div className="mt-24 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
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
                <h2 className="font-tomorrow text-xl font-bold text-textPrimary mb-2">
                  {project.name}
                </h2>
                <p className="font-tomorrow text-textPrimary/80 mb-4">
                  {project.description}
                </p>

                {/* Update Button with Tooltip */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleUpdateClick(project)}
                    className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                    data-tooltip-id="update-tooltip"
                    data-tooltip-content="Click to update this project."
                  >
                    Update
                  </button>
                  <Info
                    data-tooltip-id="info-tooltip"
                    data-tooltip-content="This button allows you to update the project with new changes."
                    className="w-4 h-4 text-textPrimary/80 hover:text-accent cursor-pointer"
                  />
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
      <ReactTooltip
        id="update-tooltip"
        className="z-[9999]" // Add a high z-index
      />
      <ReactTooltip
        id="info-tooltip"
        className="z-[9999]" // Add a high z-index
      />
    </div>
  );
};

export default ProjectsList;