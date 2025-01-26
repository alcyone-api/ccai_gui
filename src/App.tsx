import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import PromptingInterface from './components/PromptingInterface/PromptingInterface';
import FAQ from './components/FAQ/FAQ';
import Docs from './components/Docs/Docs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      {/* Navbar is outside Routes so it appears on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/prompt" element={<PromptingInterface />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      {/* Footer is outside Routes so it appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;