import { useState } from 'react';
import { Info } from 'react-feather';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { FaSpinner } from 'react-icons/fa'; // Import FaSpinner for the loading animation

interface Project {
  id: number;
  name: string;
  description: string;
}

interface UpdateProjectModalProps {
  project: Project;
  onClose: () => void;
  onSubmit: (updatePrompt: string) => void;
  onLoadingStart: () => void; // Prop to trigger the loading modal
}

const UpdateProjectModal = ({ project, onClose, onSubmit, onLoadingStart }: UpdateProjectModalProps) => {
  const [updatePrompt, setUpdatePrompt] = useState('');
  const [progress, setProgress] = useState(0); // Track progress for the loading animation
  const [isLoading, setIsLoading] = useState(false); // Track if the modal is in loading state
  const navigate = useNavigate(); // Hook for navigation

  // Step messages for each progress value
  const steps = [
    "Step 1/8 - Analyzing requirements",
    "Step 2/8 - Generating project plan",
    "Step 3/8 - Designing application architecture",
    "Step 4/8 - Writing application code",
    "Step 5/8 - Running tests",
    "Step 6/8 - Optimizing performance",
    "Step 7/8 - Finalizing updates",
    "Step 8/8 - Cleaning up temporary files",
    "Done - Update complete!",
  ];

  const handleSubmit = () => {
    setIsLoading(true); // Start loading
    onSubmit(updatePrompt); // Call the parent onSubmit handler

    // Simulate a loading process with progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 8) {
          clearInterval(interval); // Stop the interval when progress is complete
          return prev;
        }
        return prev + 1;
      });
    }, 1000); // Update progress every second
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md">
      <div className="bg-secondary/90 border border-textPrimary/20 rounded-2xl shadow-card p-8 max-w-md w-full mx-4 animate-zoom-in">
        {!isLoading ? (
          // Update Prompt Form
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-textPrimary">Update {project.name}</h2>
            <div>
              <label className="font-tomorrow text-textPrimary/80 mb-2 flex items-center">
                Update Prompt
                <Info
                  data-tooltip-id="modal-tooltip"
                  data-tooltip-content="Describe the changes you want to make to your project."
                  className="w-4 h-4 ml-2 cursor-pointer text-textPrimary/80 hover:text-accent"
                />
              </label>
              <textarea
                className="w-full h-32 p-4 bg-secondary/70 text-textPrimary rounded-lg border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-textPrimary/50 shadow-input"
                placeholder="Describe your update..."
                value={updatePrompt}
                onChange={(e) => setUpdatePrompt(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="font-tomorrow bg-transparent border-2 border-accent text-accent hover:bg-accent/10 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                data-tooltip-id="cancel-tooltip"
                data-tooltip-content="Cancel and close this modal."
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                data-tooltip-id="submit-tooltip"
                data-tooltip-content="Submit your update to modify the project."
              >
                Submit Update
              </button>
            </div>
          </div>
        ) : (
          // Loading State
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-textPrimary">
              {progress === 8 ? 'Update Complete!' : 'Updating Your Project...'}
            </h2>
            <p className="text-textPrimary/80">
              {steps[progress]} {/* Display the current step message */}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-primary/50 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-accent h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(progress / 8) * 100}%` }}
              />
            </div>

            {/* Spinner */}
            {progress < 8 && (
              <div className="flex justify-center">
                <FaSpinner className="w-8 h-8 text-accent animate-spin" />
              </div>
            )}

            {/* View Project Button */}
            {progress === 8 && (
              <button
                onClick={onClose}
                className="mt-4 w-full max-w-[300px] font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
              >
                View Project
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-4 w-full max-w-[300px] font-tomorrow bg-transparent border-2 border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Tooltips */}
      <ReactTooltip id="modal-tooltip" />
      <ReactTooltip id="cancel-tooltip" />
      <ReactTooltip id="submit-tooltip" />
    </div>
  );
};

export default UpdateProjectModal;