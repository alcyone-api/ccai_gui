import { useState, useRef, useEffect } from 'react'; // Add useRef and useEffect
import { FaBars, FaTimes, FaSave, FaCheck, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ccaiLogo from '../../../assets/ccai_logo.svg';

const gh = 'https://static.cdnlogo.com/logos/g/69/github-icon.svg';

interface NavbarProps {
  onGitHubLogin: (isLoggedIn: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGitHubLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isGitHubLoggedIn, setIsGitHubLoggedIn] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);

  // Create a ref for the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowWalletDropdown(false); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleConnectWallet = () => {
    if (!isWalletConnected) {
      setIsWalletConnected(true);
    } else {
      setShowWalletDropdown(!showWalletDropdown); // Toggle dropdown
    }
  };

  const handleGitHubLogin = () => {
    if (!isGitHubLoggedIn) {
      setIsGitHubLoggedIn(true);
      onGitHubLogin(true); // Notify the parent component
    } else {
      setIsGitHubLoggedIn(false);
      onGitHubLogin(false); // Notify the parent component
    }
  };

  interface WalletActionProps {
    action: 'Disconnect Wallet' | 'Change Wallet' | 'Copy Address';
  }

  const handleWalletAction = ({ action }: WalletActionProps) => {
    if (action === 'Disconnect Wallet') {
      setIsWalletConnected(false);
    }
    setShowWalletDropdown(false); // Close the dropdown after an action
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-md border-b border-accent/30 bg-gradient-to-r from-accent/50 to-primary/50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <Link to="/" className="font-tomorrow text-xl md:text-2xl font-bold text-textPrimary">
              <img src={ccaiLogo} alt="CodeCraft AI Logo" className="h-8 md:h-12 w-auto mr-4" />
            </Link>
            <Link to="/" className="font-tomorrow text-xl md:text-2xl font-bold text-textPrimary">
              CodeCraft AI
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/prompt" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Generate Project
            </Link>
            {isWalletConnected && (
              <Link to="/projects" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
                Saved Projects
              </Link>
            )}
            <Link to="/docs" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Docs
            </Link>
            <Link to="/faq" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              FAQ
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 ml-auto mr-4">
          {/* Wallet Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleConnectWallet}
              className={`${
                isWalletConnected
                  ? 'bg-green-500/10 border-green-500 text-green-500'
                  : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
              } px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2`}
            >
              <FaWallet className="w-4 h-4" />
              <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
              {isWalletConnected && <FaCheck className="w-4 h-4 text-green-500" />}
            </button>
            {showWalletDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-primary rounded-xl border border-accent/30 shadow-lg shadow-accent/20 z-50">
                <div className="py-2">
                  <button
                    onClick={() => handleWalletAction({ action: 'Disconnect Wallet' })}
                    className="block w-full px-4 py-2 text-sm text-textPrimary/80 hover:bg-accent/10 transition-colors"
                  >
                    Disconnect Wallet
                  </button>
                  <button
                    onClick={() => handleWalletAction({ action: 'Change Wallet' })}
                    className="block w-full px-4 py-2 text-sm text-textPrimary/80 hover:bg-accent/10 transition-colors"
                  >
                    Change Wallet
                  </button>
                  <button
                    onClick={() => handleWalletAction({ action: 'Copy Address' })}
                    className="block w-full px-4 py-2 text-sm text-textPrimary/80 hover:bg-accent/10 transition-colors"
                  >
                    Copy Address
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* GitHub Button */}
          <button
            onClick={handleGitHubLogin}
            className={`${
              isGitHubLoggedIn
                ? 'bg-green-500/10 border-green-500 text-green-500'
                : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
            } px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2`}
          >
            <img
              src={gh}
              alt="GitHub"
              className="w-4 h-4 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <span>{isGitHubLoggedIn ? 'Connected' : 'Connect GitHub'}</span>
            {isGitHubLoggedIn && <FaCheck className="w-4 h-4 text-green-500" />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-textPrimary focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/prompt"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-bold px-4 py-2"
          >
            Generate Project
          </Link>
          {isWalletConnected && (
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2"
            >
              <span>Saved Projects</span>
            </Link>
          )}
          <Link
            to="/docs"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2"
          >
            Docs
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2"
          >
            FAQ
          </Link>
          {/* Wallet Button for Mobile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleConnectWallet}
              className={`${
                isWalletConnected
                  ? 'bg-green-500/10 border-green-500 text-green-500'
                  : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
              } px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2 w-full`}
            >
              <FaWallet className="w-4 h-4" />
              <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
              {isWalletConnected && <FaCheck className="w-4 h-4 text-green-500" />}
            </button>
            {showWalletDropdown && (
              <div className="mt-2 w-full bg-primary rounded-xl border border-accent/30 shadow-lg shadow-accent/20 z-50">
                <div className="py-2">
                  <button
                    onClick={() => handleWalletAction({ action: 'Disconnect Wallet' })}
                    className="block w-full px-4 py-2 text-sm text-textPrimary/80 hover:bg-accent/10 transition-colors"
                  >
                    Disconnect Wallet
                  </button>
                  <button
                    onClick={() => handleWalletAction({ action: 'Change Wallet' })}
                    className="block w-full px-4 py-2 text-sm text-textPrimary/80 hover:bg-accent/10 transition-colors"
                  >
                    Change Wallet
                  </button>
                  <button
                    onClick={() => handleWalletAction({ action: 'Copy Address' })}
                    className="block w-full px-4 py-2 text-sm text-textPrimary/80 hover:bg-accent/10 transition-colors"
                  >
                    Copy Address
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* GitHub Button for Mobile */}
          <button
            onClick={handleGitHubLogin}
            className={`${
              isGitHubLoggedIn
                ? 'bg-green-500/10 border-green-500 text-green-500'
                : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
            } px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2 w-full`}
          >
            <img
              src={gh}
              alt="GitHub"
              className="w-4 h-4 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <span>{isGitHubLoggedIn ? 'Connected' : 'Connect GitHub'}</span>
            {isGitHubLoggedIn && <FaCheck className="w-4 h-4 text-green-500" />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;