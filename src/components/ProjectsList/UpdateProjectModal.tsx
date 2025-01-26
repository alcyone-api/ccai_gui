import { useState } from 'react';
import { Info } from 'react-feather'; // Info icon for tooltips
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Corrected import

// Define the Project type
interface Project {
  id: number;
  name: string;
  description: string;
}

// Define the props for UpdateProjectModal
interface UpdateProjectModalProps {
  project: Project;
  onClose: () => void;
  onSubmit: (updatePrompt: string) => void;
}

const UpdateProjectModal = ({ project, onClose, onSubmit }: UpdateProjectModalProps) => {
  const [updatePrompt, setUpdatePrompt] = useState('');

  const handleSubmit = () => {
    onSubmit(updatePrompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      {/* Modal Content */}
      <div className="bg-secondary/90 backdrop-blur-md p-8 rounded-2xl border border-textPrimary/20 shadow-2xl w-full max-w-2xl animate-fade-in-up">
        <h2 className="font-tomorrow text-2xl font-bold text-textPrimary mb-4">
          Update {project.name}
        </h2>

        {/* Update Prompt Textarea with Tooltip */}
        <div className="mb-6">
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

        {/* Buttons with Tooltips */}
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

      {/* Tooltips */}
      <ReactTooltip id="modal-tooltip" />
      <ReactTooltip id="cancel-tooltip" />
      <ReactTooltip id="submit-tooltip" />
    </div>
  );
};

export default UpdateProjectModal;