import { useState } from 'react';
import { FaBars, FaTimes, FaSave } from 'react-icons/fa'; // Added FaSave for the Saved Projects icon
import { Link } from 'react-router-dom';
import ccaiLogo from '../../assets/ccai_logo.svg';
const gh = 'https://static.cdnlogo.com/logos/g/69/github-icon.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-md border-b border-accent/30 bg-gradient-to-r from-accent/50 to-primary/50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Docs/FAQ Links (Far Left) */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img src={ccaiLogo} alt="CodeCraft AI Logo" className="h-8 md:h-12 w-auto mr-4" />
            <Link to="/" className="font-tomorrow text-xl md:text-2xl font-bold text-textPrimary">
              CodeCraft AI
            </Link>
          </div>

          {/* Generate Project, Saved Projects, Docs, and FAQ Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/prompt" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Generate Project
            </Link>
            <Link
              to="/projects"
              className="font-tomorrow text-accent/80 hover:text-accent transition-colors text-sm font-semibold flex items-center space-x-2"
            >
              <FaSave className="w-4 h-4" /> {/* Saved Projects icon */}
              <span>Saved Projects</span>
            </Link>
            <Link to="/docs" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Docs
            </Link>
            <Link to="/faq" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              FAQ
            </Link>
          </div>
        </div>

        {/* Login Buttons (Far Right) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="font-tomorrow bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
            Connect Wallet
          </button>
          <button
            className="font-tomorrow bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md shadow-accent/10 hover:shadow-accent/20 border border-accent/20 hover:border-accent/40 flex items-center space-x-2"
          >
            <img
              src={gh}
              alt="GitHub"
              className="h-4 w-4 md:h-4 md:w-4 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <span>GitHub Login</span>
          </button>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-textPrimary focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/prompt" className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-bold px-4 py-2">
            Generate Project
          </Link>
          <Link
            to="/projects"
            className="block w-full font-tomorrow text-accent/80 hover:text-accent text-sm font-semibold px-4 py-2 flex items-center space-x-2"
          >
            <FaSave className="w-4 h-4" /> {/* Saved Projects icon */}
            <span>Saved Projects</span>
          </Link>
          <Link to="/docs" className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2">
            Docs
          </Link>
          <Link to="/faq" className="block w-full font-tomorrow text-textPrimary/70 hover:text-textPrimary text-sm font-semibold px-4 py-2">
            FAQ
          </Link>
          <button className="w-full font-tomorrow bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
            Connect Wallet
          </button>
          <button
            className="w-full font-tomorrow bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md shadow-accent/10 hover:shadow-accent/20 border border-accent/20 hover:border-accent/40"
          >
            GitHub Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;