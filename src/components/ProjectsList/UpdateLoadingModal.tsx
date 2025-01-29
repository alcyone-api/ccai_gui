import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoadingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateLoadingModal: React.FC<LoadingModalProps> = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(1);
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);

  // Step messages for each progress value
  const steps = [
    "Step 1/8 - Analyzing requirements",
    "Step 2/8 - Generating project plan",
    "Step 3/8 -  Designing application architecture",
    "Step 4/8 -  Writing application code",
    "Step 5/8 - Running tests",
    "Step 6/8 - Optimizing performance",
    "Step 7/8 - Finalizing updates",
    "Step 8/8 - Cleaning up temporary files",
    "Done - Update complete!"
  ];

  useEffect(() => {
    if (isOpen) {
      let currentProgress = 1;
      const interval = setInterval(() => {
        if (currentProgress < 8) {
          currentProgress++;
          setProgress(currentProgress);
        } else {
          clearInterval(interval);
          setIsUpdateSuccessful(true); // Show success message after 8 seconds
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md">
      <div className="bg-secondary/90 border border-textPrimary/20 rounded-2xl shadow-card p-8 max-w-md w-full mx-4 animate-zoom-in">
        <div className="text-center space-y-6">
          {!isUpdateSuccessful ? (
            <>
              <h2 className="text-2xl font-bold text-textPrimary">
                Updating Your Project...
              </h2>
              <p className="text-textPrimary/80">
                {steps[progress - 1]} {/* Display the current step message */}
              </p>
              <div className="w-full bg-primary/50 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-accent h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${(progress / 8) * 100}%` }}
                />
              </div>
              <div className="flex justify-center">
                <FaSpinner className="w-8 h-8 text-accent animate-spin" />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-textPrimary">
                Update Successful!
              </h2>
              <p className="text-textPrimary/80">
                {steps[8]} {/* Display the final success message */}
              </p>
              <button
                onClick={onClose}
                className="mt-4 w-full max-w-[300px] font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
              >
                View Project
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateLoadingModal;