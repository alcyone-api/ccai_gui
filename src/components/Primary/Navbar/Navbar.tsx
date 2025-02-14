import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaWallet, FaGithub, FaUserCircle, FaCopy, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ccaiLogo from '../../../assets/ccai_logo.svg';
import { useGlobalState } from '../../Context/GlobalStateContext'; // Import the global state hook

interface NavbarProps {
  onGitHubLogin: (isLoggedIn: boolean) => void;
  balance: { usd: number; craft: number };
}

const Navbar: React.FC<NavbarProps> = ({ onGitHubLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isGitHubLoggedIn, setIsGitHubLoggedIn] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showWalletOptions, setShowWalletOptions] = useState(false); // For wallet options dropdown
  const [walletAddress, setWalletAddress] = useState<string | null>(null); // Store wallet address

  // Access global state for profile picture, username, and balance
  const { selectedIconUrl, username, balance, setBalance } = useGlobalState();

  // Create a ref for the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowAccountDropdown(false);
        setShowWalletOptions(false); // Close wallet options dropdown
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mock function to connect wallet (replace with actual wallet connection logic)
  const connectWallet = async () => {
    try {
      // Replace this with your wallet provider's connection logic
      const provider = [String] // Assuming MetaMask or similar wallet provider
      if (provider) {
        const accounts: string[] = [];
        const address = accounts[0];
        setWalletAddress(address);
        setIsWalletConnected(true);
        setShowWalletOptions(false); // Close wallet options dropdown after connecting

        // Update balance (mock data)
        setBalance({ usd: 100, craft: 50 }); // Replace with actual balance fetch logic
      } else {
        alert('Please install a wallet like MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet.');
    }
  };

  const handleGitHubLogin = () => {
    setIsGitHubLoggedIn(!isGitHubLoggedIn);
    onGitHubLogin(!isGitHubLoggedIn); // Notify the parent component
  };

  const handleCopyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      alert('Wallet address copied to clipboard!');
    }
  };

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress(null);
    setShowWalletOptions(false); // Close wallet options dropdown after disconnecting
    setBalance({ usd: 0, craft: 0 }); // Reset balance
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-md border-b border-accent/30 bg-gradient-to-r from-accent/50 to-primary/50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side of the navbar */}
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
            <Link to="/education" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Prompting 101
            </Link>
          </div>
        </div>

        {/* Right side of the navbar */}
        <div className="hidden md:flex items-center space-x-4 ml-auto mr-4">
          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary/80 transition-all"
            >
              {selectedIconUrl ? (
                // If selectedIconUrl is a CDN URL, render an image
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={selectedIconUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(0) invert(1)', // Convert black to white
                    }}
                  />
                </div>
              ) : (
                // Fallback to a default icon
                <FaUserCircle className="w-8 h-8 text-textPrimary" />
              )}
              {username && <span className="text-textPrimary">{username}</span>}
            </button>
            {showAccountDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-primary rounded-xl border border-accent/30 shadow-lg shadow-accent/20 z-50">
                <div className="p-4">
                  {/* Wallet and GitHub Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={isWalletConnected ? () => setShowWalletOptions(!showWalletOptions) : connectWallet}
                      className={`${
                        isWalletConnected
                          ? 'bg-green-500/10 border-green-500 text-green-500'
                          : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
                      } w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <FaWallet className="w-4 h-4" />
                      <span>{isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}</span>
                    </button>
                    {isWalletConnected && showWalletOptions && (
                        <div className="text-textPrimary space-y-2 text-left">
                        <button
                          onClick={handleCopyAddress}
                          className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-start space-x-2 bg-primary hover:bg-secondary/80"
                        >
                          <FaCopy className="text-textPrimary w-4 h-4" />
                          <span>Copy Address</span>
                        </button>
                        <button
                          onClick={() => {
                          // Handle changing wallet
                          alert('Change Wallet functionality');
                          }}
                          className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-start space-x-2 bg-primary hover:bg-secondary/80"
                        >
                          <FaExchangeAlt className="text-textPrimary w-4 h-4" />
                          <span>Change Wallet</span>
                        </button>
                        <button
                          onClick={handleDisconnectWallet}
                          className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-start space-x-2 bg-primary hover:bg-secondary/80"
                        >
                          <FaSignOutAlt className="text-textPrimary w-4 h-4" />
                          <span>Disconnect Wallet</span>
                        </button>
                        </div>
                    )}
                    <button
                      onClick={handleGitHubLogin}
                      className={`${
                        isGitHubLoggedIn
                          ? 'bg-green-500/10 border-green-500 text-green-500'
                          : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
                      } w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>{isGitHubLoggedIn ? 'Connected' : 'Connect GitHub'}</span>
                    </button>
                  </div>
                  {/* Manage Account Button (Conditional) */}
                  {isWalletConnected && (
                    <div className="my-4">
                      <Link
                        to="/account"
                        onClick={() => setShowAccountDropdown(false)}
                        className="w-full px-4 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                      >
                        <FaUserCircle className="w-5 h-5" />
                        <span className="font-semibold">Manage Account</span>
                      </Link>
                    </div>
                  )}
                  {/* Balances (Conditional) */}
                  {isWalletConnected && (
                    <div className="space-y-2">
                      <h3 className="text-textPrimary font-bold">Balances</h3>
                      <div className="flex justify-between">
                        <span className="text-textPrimary">USD:</span>
                        <span className="text-textPrimary font-bold">${balance?.usd.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-textPrimary">CRAFT:</span>
                        <span className="text-textPrimary font-bold">${balance?.craft.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
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
              Saved Projects
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
            to="/education"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2"
          >
            Prompting 101
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2"
          >
            FAQ
          </Link>
          {/* Account Dropdown for Mobile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary/80 transition-all w-full"
            >
              {selectedIconUrl ? (
                // If selectedIconUrl is a CDN URL, render an image
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={selectedIconUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(0) invert(1)', // Convert black to white
                    }}
                  />
                </div>
              ) : (
                // Fallback to a default icon
                <FaUserCircle className="w-8 h-8 text-textPrimary" />
              )}
              {username && <span className="text-textPrimary">Account</span>}
            </button>
            {showAccountDropdown && (
              <div className="mt-2 w-full bg-primary rounded-xl border border-accent/30 shadow-lg shadow-accent/20 z-50">
                <div className="p-4">
                  {/* Wallet and GitHub Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={isWalletConnected ? () => setShowWalletOptions(!showWalletOptions) : connectWallet}
                      className={`${
                        isWalletConnected
                          ? 'bg-green-500/10 border-green-500 text-green-500'
                          : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
                      } w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <FaWallet className="w-4 h-4" />
                      <span>{isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}</span>
                    </button>
                    {isWalletConnected && showWalletOptions && (
                      <div className="space-y-2">
                        <button
                          onClick={handleCopyAddress}
                          className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-primary hover:bg-secondary/80"
                        >
                          <FaCopy className="w-4 h-4" />
                          <span>Copy Address</span>
                        </button>
                        <button
                          onClick={() => {
                            // Handle changing wallet
                            alert('Change Wallet functionality');
                          }}
                          className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-primary hover:bg-secondary/80"
                        >
                          <FaExchangeAlt className="w-4 h-4" />
                          <span>Change Wallet</span>
                        </button>
                        <button
                          onClick={handleDisconnectWallet}
                          className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-primary hover:bg-secondary/80"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span>Disconnect Wallet</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={handleGitHubLogin}
                      className={`${
                        isGitHubLoggedIn
                          ? 'bg-green-500/10 border-green-500 text-green-500'
                          : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
                      } w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>{isGitHubLoggedIn ? 'Connected' : 'Connect GitHub'}</span>
                    </button>
                  </div>
                  {/* Manage Account Button (Conditional) */}
                  {isWalletConnected && (
                    <div className="my-4">
                      <Link
                        to="/account"
                        onClick={() => setShowAccountDropdown(false)}
                        className="w-full px-4 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                      >
                        <FaUserCircle className="w-5 h-5" />
                        <span className="font-semibold">Manage Account</span>
                      </Link>
                    </div>
                  )}
                  {/* Balances (Conditional) */}
                  {isWalletConnected && (
                    <div className="space-y-2">
                      <h3 className="text-textPrimary font-bold">Balances</h3>
                      <div className="flex justify-between">
                        <span className="text-textPrimary">USD:</span>
                        <span className="text-textPrimary font-bold">${balance?.usd.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-textPrimary">CRAFT:</span>
                        <span className="text-textPrimary font-bold">${balance?.craft.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;