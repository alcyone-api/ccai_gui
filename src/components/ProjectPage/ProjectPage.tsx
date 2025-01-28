import { FaGithub } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useNavigate, useParams } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  description: string;
  githubRepo: string;
  technologies: string[];
  requirements: string[];
  updates: { date: string; description: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    name: 'E-commerce App',
    description: 'A full-stack e-commerce platform built with React and Node.js.',
    githubRepo: 'ecommerce-app',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
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
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    requirements: ['Build me a portfolio website.'],
    updates: [
      { date: '2023-09-20', description: 'Add a resume section' },
      { date: '2023-09-25', description: 'Add a blog section' },
    ],
  },
];

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id || ''));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="mt-24 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="text-center max-w-6xl w-full space-y-8">
          {/* Back to Projects Button */}
        <button
            onClick={() => navigate('/projects')}
            className="absolute top-10 left-40 font-tomorrow bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
            Back to Projects
        </button>

          {/* Header Section */}
          <h1 className="font-tomorrow text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            {project.name}
          </h1>

          {/* Two-column layout for sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Technologies Section */}
              <div className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 shadow-lg transition-all duration-300">
                <h2 className="font-tomorrow text-2xl font-bold text-textPrimary mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="font-tomorrow text-sm text-textPrimary/80 bg-secondary px-3 py-1 rounded-full border border-accent/20 hover:border-accent/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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

              {/* Requirements Section */}
              <div className="bg-secondary/70 backdrop-blur-md p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 shadow-lg transition-all duration-300">
                <h2 className="font-tomorrow text-2xl font-bold text-textPrimary mb-4">Requirements</h2>
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
        </div>
      </div>

      {/* Tooltips */}
      <ReactTooltip id="github-tooltip" className="z-[9999]" />
    </div>
  );
};

export default ProjectPage;