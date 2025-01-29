import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface LoadingModalProps {
  progress: number;
  isOpen: boolean;
  onClose: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ progress, isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md">
      <div className="bg-secondary/90 border border-textPrimary/20 rounded-2xl shadow-card p-8 max-w-md w-full mx-4 animate-zoom-in">
        <div className="text-center space-y-6">
          {/* Progress Text */}
          <h2 className="text-2xl font-bold text-textPrimary">
            {progress === 8 ? "Project Generation Complete!" : "Generating Your Project..."}
          </h2>
          <p className="text-textPrimary/80">
            {steps[progress - 1]} {/* Display the current step message */}
          </p>

          {/* Animated Progress Bar */}
          <div className="w-full bg-primary/50 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-accent h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(progress / 8) * 100}%` }}
            />
          </div>

          {/* Spinner */}
          {progress < 8 && ( // Only show spinner if progress is not complete
            <div className="flex justify-center">
              <FaSpinner className="w-8 h-8 text-accent animate-spin" />
            </div>
          )}

          {/* View Project Button */}
          {progress === 8 && ( // Show the button only when progress is complete
            <button
              onClick={() => navigate("/generation-result")} // Navigate to /generation-result
              className="mt-4 w-full max-w-[300px] font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              View Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;