import { useState } from 'react';

const ContractAddress = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dexscreenerLogo = 'https://cdn.prod.website-files.com/6421d264d066fd2b24b91b20/661375b92a7e161501f4b5e5_dexscreener.322a5a2d.png';
  const telegramLogo = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg';
  const xLogo = 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg';

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('DFkp2Jd5y4rCuPJAz9djtqUMHyVF5FxRkVgjztyGpump').then(() => {
      alert('CA copied to clipboard!');
    });
  };

  return (
    <div className="fixed top-24 left-12 z-[9999] flex items-center bg-primary/50 backdrop-blur-sm rounded-full p-2 pl-3 pr-4 space-x-3">
      <button
        onClick={toggleCollapse}
        className="md:hidden p-1 rounded-full hover:bg-secondary/80 transition-colors duration-300"
        aria-label={isCollapsed ? 'Expand Socials' : 'Collapse Socials'}
      >
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-textPrimary/80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-textPrimary/80"
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
          {/* DexScreener Logo */}
          <a
            href="https://dexscreener.com/solana/DFkp2Jd5y4rCuPJAz9djtqUMHyVF5FxRkVgjztyGpump" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={dexscreenerLogo}
              alt="DexScreener Logo"
              className="h-5 w-5 object-contain filter brightness-0 invert"
            />
          </a>

          {/* $CRAFT Text */}
          <h3 className="font-tomorrow text-xs text-accent">
            $CRAFT
          </h3>

          {/* CA Text - Clickable to Copy */}
          <div
            onClick={copyToClipboard}
            className="font-tomorrow text-xs text-textPrimary/80 cursor-pointer hover:text-accent transition-colors duration-300"
          >
            DFkp2Jd5y4rCuPJAz9djtqUMHyVF5FxRkVgjztyGpump
          </div>
        </>
      )}
    </div>
  );
};

export default ContractAddress;