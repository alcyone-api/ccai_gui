import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ccaiLogo from '../../assets/ccai_logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-4 backdrop-blur-md border-b border-orange-500/30 bg-gradient-to-r from-orange-500/50 to-[#201f1e]/50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={ccaiLogo} alt="CodeCraft AI Logo" className="h-8 md:h-12 w-auto mr-4" />
          <div className="text-xl md:text-2xl font-tomorrow font-bold text-gray-100">CodeCraft AI</div>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-100 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-orange-500 font-tomorrow hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
            Connect Wallet
          </button>
          <button
            className="bg-gray-800 font-tomorrow hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 border border-orange-500 hover:shadow-orange-500/50 hover:border-orange-400"
            style={{ boxShadow: '0 0 8px 2px rgba(249, 115, 22, 0.5)' }}
          >
            GitHub Login
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <button className="w-full bg-orange-500 font-tomorrow hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
            Connect Wallet
          </button>
          <button
            className="w-full bg-gray-800 font-tomorrow hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 border border-orange-500 hover:shadow-orange-500/50 hover:border-orange-400"
            style={{ boxShadow: '0 0 8px 2px rgba(249, 115, 22, 0.5)' }}
          >
            GitHub Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;