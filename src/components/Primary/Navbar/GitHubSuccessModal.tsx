import { FC } from 'react';

interface GitHubSuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const GitHubSuccessModal: FC<GitHubSuccessModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md">
      <div className="bg-secondary/90 border border-textPrimary/20 rounded-2xl shadow-card p-8 max-w-md w-full mx-4 animate-zoom-in">
        <div className="text-center space-y-6">
          {/* Modal Title */}
          <h2 className="text-2xl font-bold text-textPrimary">
            {message}
          </h2>

          {/* Close Button */}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={onClose}
              className="w-full max-w-[300px] font-tomorrow bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubSuccessModal;