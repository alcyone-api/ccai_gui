import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import PromptingInterface from './components/PromptingInterface/PromptingInterface';
import FAQ from './components/FAQ/FAQ';
import Docs from './components/Docs/Docs';
import ProjectsList from './components/ProjectsList/ProjectsList'; // Import the new component
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';

const App = () => {
  return (
    <Router>
      {/* Background Component */}
      <Background />

      {/* Navbar is outside Routes so it appears on all pages */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/prompt" element={<PromptingInterface />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/projects" element={<ProjectsList />} /> {/* New route */}
        </Routes>
      </div>

      {/* Footer is outside Routes so it appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;