const Footer = () => {
  const dexscreenerLogo = 'https://cdn.prod.website-files.com/6421d264d066fd2b24b91b20/661375b92a7e161501f4b5e5_dexscreener.322a5a2d.png';
  const telegramLogo = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg';
  const xLogo = 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg';

  const copyToClipboard = () => {
    navigator.clipboard.writeText('DFkp2Jd5y4rCuPJAz9djtqUMHyVF5FxRkVgjztyGpump').then(() => {
      alert('CA copied to clipboard!');
    });
  };

  const logo1 = 'https://static.cdnlogo.com/logos/d/9/deepseek-icon.svg';
  const logo2 = 'https://static.cdnlogo.com/logos/o/38/openai.svg';
  const logo3 = 'https://static.cdnlogo.com/logos/s/85/solana.svg';
  const logo4 = 'https://static.cdnlogo.com/logos/t/58/tailwind-css.svg';
  const logo5 = 'https://static.cdnlogo.com/logos/r/63/react.svg';

  return (
    <footer className="bg-primary/95 backdrop-blur-md border-t border-accent/30">
      {/* Removed fixed positioning */}
      {/* Contract Address Section */}
      <div className="flex justify-center items-center py-2 border-b border-accent/30">
        <div className="flex items-center space-x-3">
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
          <h3 className="font-tomorrow text-xs text-accent">$CRAFT</h3>

          {/* CA Text - Clickable to Copy */}
          <div
            onClick={copyToClipboard}
            className="font-tomorrow text-xs text-textPrimary/80 cursor-pointer hover:text-accent transition-colors duration-300"
          >
            DFkp2Jd5y4rCuPJAz9djtqUMHyVF5FxRkVgjztyGpump
          </div>
        </div>
      </div>

      {/* Tech Logos and Social Logos Section */}
      <div className="flex justify-center items-center py-4 border-b border-accent/30">
        <div className="flex items-center space-x-6 md:space-x-10">
          {/* Tech Logos */}
          <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo1}
              alt="DeepSeek Logo"
              className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://openai.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo2}
              alt="OpenAI Logo"
              className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://solana.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo3}
              alt="Solana Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <img
              src={logo4}
              alt="Tailwind CSS Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo5}
              alt="React Logo"
              className="h-6 w-6 md:h-8 md:w-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          {/* Vertical Divider */}
          <div className="h-8 border-l border-accent/20"></div>

          {/* Social Logos */}
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
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4">
        <p className="font-tomorrow text-xs md:text-sm text-textPrimary/80">
          &copy; {new Date().getFullYear()} CodeCraft AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;