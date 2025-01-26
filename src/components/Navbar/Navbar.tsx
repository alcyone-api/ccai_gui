import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ccaiLogo from '../../assets/ccai_logo.svg';

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

          {/* Generate Project, Docs and FAQ Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/prompt" className="font-tomorrow text-textPrimary/70 hover:text-textPrimary transition-colors text-sm font-semibold">
              Generate Project
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
            className="font-tomorrow bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/30 border border-accent hover:shadow-accent/50 hover:border-accent/80"
          >
            GitHub Login
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
            className="w-full font-tomorrow bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/30 border border-accent hover:shadow-accent/50 hover:border-accent/80"
          >
            GitHub Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;