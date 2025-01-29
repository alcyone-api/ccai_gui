import { useState } from 'react';
import { FaBars, FaTimes, FaSave, FaCheck, FaChevronDown, FaCopy, FaSignOutAlt, FaWallet, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ccaiLogo from '../../assets/ccai_logo.svg';
const gh = 'https://static.cdnlogo.com/logos/g/69/github-icon.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isGitHubLoggedIn, setIsGitHubLoggedIn] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleConnectWallet = () => {
    if (!isWalletConnected) {
      setIsWalletConnected(true);
    } else {
      setShowWalletDropdown(!showWalletDropdown);
    }
  };

  const handleGitHubLogin = () => {
    if (!isGitHubLoggedIn) {
      setIsGitHubLoggedIn(true);
      setModalMessage('GitHub Login Successful');
      setShowGitHubModal(true);
    } else {
      setIsGitHubLoggedIn(false);
      setModalMessage('GitHub Log Out Successful');
      setShowGitHubModal(true);
    }
  };

  interface WalletActionProps {
    action: 'Disconnect Wallet' | 'Change Wallet' | 'Copy Address';
  }

  const handleWalletAction = ({ action }: WalletActionProps) => {
    if (action === 'Disconnect Wallet') {
      setIsWalletConnected(false);
    }
    setShowWalletDropdown(false);
  };

  const closeModal = () => {
    setShowGitHubModal(false);
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-md border-b border-accent/30 bg-gradient-to-r from-accent/50 to-primary/50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img src={ccaiLogo} alt="CodeCraft AI Logo" className="h-8 md:h-12 w-auto mr-4" />
            <Link to="/" className="font-tomorrow text-xl md:text-2xl font-bold text-textPrimary">
              CodeCraft AI
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/prompt" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Generate Project
            </Link>
            <Link to="/projects" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Saved Projects
            </Link>
            <Link to="/docs" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Docs
            </Link>
            <Link to="/faq" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              FAQ
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 ml-auto mr-4">
          <div className="relative">
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
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-textPrimary focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/prompt" className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-bold px-4 py-2">
            Generate Project
          </Link>
          <Link
            to="/projects"
            className="block w-full font-tomorrow text-accent/80 hover:text-accent text-sm font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <FaSave className="w-4 h-4" />
            <span>Saved Projects</span>
          </Link>
          <Link to="/docs" className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2">
            Docs
          </Link>
          <Link to="/faq" className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2">
            FAQ
          </Link>
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

      {showGitHubModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-primary p-6 rounded-xl border border-accent/30 shadow-lg shadow-accent/20 animate-zoom-in">
            <p className="font-tomorrow text-textPrimary text-lg font-semibold mb-4">
              {modalMessage}
            </p>
            <button
              onClick={closeModal}
              className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );};

export default Navbar;