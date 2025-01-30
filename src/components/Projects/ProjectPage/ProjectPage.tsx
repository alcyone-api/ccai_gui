import { FaGithub, FaEdit } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react'; // Import useState for modal state management
import UpdateProjectModal from '../ProjectsList/UpdateProjectModal'; // Import the modal component

interface Project {
  id: number;
  name: string;
  description: string;
  githubRepo: string;
  requirements: string[];
  updates: { date: string; description: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    name: 'E-commerce App',
    description: 'A full-stack e-commerce platform built with React and Node.js.',
    githubRepo: 'ecommerce-app',
    requirements: ['Build me an e-commerce app.'],
    updates: [
      { date: '2023-10-01', description: 'Add user authentication' },
      { date: '2023-10-05', description: 'Implement a product catalog' },
    ],
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    githubRepo: 'portfolio-website',
    requirements: ['Build me a portfolio website.'],
    updates: [
      { date: '2023-09-20', description: 'Add a resume section' },
      { date: '2023-09-25', description: 'Add a blog section' },
    ],
  },
  {
    id: 3,
    name: 'AI Chatbot',
    description: 'An AI-powered chatbot for customer support using Python and TensorFlow.',
    githubRepo: 'chatbot-ai',
    requirements: ['Build me an AI-powered chatbot for customer support using Python and TensorFlow.'],
    updates: [
      { date: '2023-09-20', description: 'Add saved chats' },
      { date: '2023-09-25', description: 'Add suggested prompts' },
    ],
  },
  
];

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id || ''));

  // State for managing the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="mt-24 mb-24 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-6xl w-full space-y-8">
          {/* Header Section */}
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            {project.name}
          </h1>

          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            {/* Back to Projects Button */}
            <button
              onClick={() => navigate('/projects')}
              className="w-full md:w-auto font-tomorrow bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Back to Projects
            </button>

            {/* Update Project Button */}
            <button
              onClick={() => setIsModalOpen(true)} // Open the modal
              className="w-full md:w-auto font-tomorrow bg-green-500/10 border-2 border-green-500 text-green-500 hover:bg-green-500/20 px-4 py-2 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20 flex items-center justify-center space-x-2"
            >
              <FaEdit className="w-5 h-5" />
              <span>Update Project</span>
            </button>
          </div>

          {/* Two-column layout for sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Left Column */}
            <div className="space-y-8">
              {/* GitHub Repo Section */}
              <div className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 shadow-lg transition-all duration-300">
                <h2 className="font-tomorrow text-2xl font-bold text-textPrimary mb-4">GitHub Repository</h2>
                <a
                  href={`https://github.com/${project.githubRepo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-textPrimary/80 hover:text-accent transition-colors"
                  data-tooltip-id="github-tooltip"
                  data-tooltip-content="View on GitHub"
                >
                  <FaGithub className="w-6 h-6 mr-2" />
                  <span className="font-tomorrow text-sm">{project.githubRepo}</span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Description Section */}
              <div className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 shadow-lg transition-all duration-300">
                <h2 className="font-tomorrow text-2xl font-bold text-textPrimary mb-4">Description</h2>
                <p className="font-tomorrow text-textPrimary/80 text-left">{project.description}</p>
              </div>


            </div>

          </div>
                        {/* Requirements Section */}
                        <div className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 shadow-lg transition-all duration-300">
                <h2 className="font-tomorrow text-2xl font-bold text-textPrimary mb-4 text-left">Requirements</h2>
                <ul className="list-disc list-inside font-tomorrow text-textPrimary/80 text-left">
                  {project.requirements.map((req, index) => (
                    <p key={index}>{req}</p>
                  ))}
                </ul>

                {/* Additional Requirements Updates */}
                <h3 className="font-tomorrow text-xl font-bold text-textPrimary mt-6 mb-4 text-left">Updates</h3>
                <div className="space-y-4 text-left">
                  {project.updates.map((update, index) => (
                    <div key={index} className="font-tomorrow text-textPrimary/80">
                      <span className="font-bold">{update.date}:</span> {update.description}
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>

      {/* Tooltips */}
      <ReactTooltip id="github-tooltip" className="z-[9999]" />

      {/* Update Project Modal */}
      {isModalOpen && (
        <UpdateProjectModal
          onClose={() => setIsModalOpen(false)} // Close the modal
          project={project} // Pass the project data to the modal
          onSubmit={(updatedProject) => {
            // Handle the submit action
            console.log('Project updated:', updatedProject);
          }}
          onLoadingStart={() => {
            // Handle the loading start action
            console.log('Loading started');
          }}
        />
      )}
    </div>
  );
};

export default ProjectPage;