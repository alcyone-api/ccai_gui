import { useState } from 'react';

const SocialsPill = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const telegramLogo = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg';
  const xLogo = 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg';

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="fixed bottom-8 md:bottom-48 left-4 md:left-16 z-[9999] flex items-center bg-secondary/50 backdrop-blur-sm rounded-full p-2 pl-4 pr-6">
      <button
        onClick={toggleCollapse}
        className="md:hidden p-2 rounded-full hover:bg-secondary/80 transition-colors duration-300"
        aria-label={isCollapsed ? 'Expand Socials' : 'Collapse Socials'}
      >
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-textPrimary/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-textPrimary/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        )}
      </button>

      {!isCollapsed && (
        <>
          <div className="px-2 py-1">
            <h3 className="font-tomorrow text-sm text-textPrimary/80">Socials</h3>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 border-l border-accent/20 pl-4">
            <a
              href="https://t.co/ERfXkaw0Nz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={telegramLogo}
                alt="Telegram Logo"
                className="h-6 w-6 md:h-8 md:w-8 object-contain opacity-80"
              />
            </a>
            <a
              href="https://x.com/CodeCraftiAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={xLogo}
                alt="X/Twitter Logo"
                className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80"
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialsPill;