import { FC } from 'react';
import { Portal } from 'react-portal'; // Import the Portal component from react-portal

interface GitHubSuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const GitHubSuccessModal: FC<GitHubSuccessModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-primary p-6 rounded-xl border border-accent/30 shadow-lg shadow-accent/20 animate-zoom-in">
          <p className="font-tomorrow text-textPrimary text-lg font-semibold mb-4">
            {message}
          </p>
          <button
            onClick={onClose}
            className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
          >
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default GitHubSuccessModal;