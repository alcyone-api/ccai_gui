import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import PromptingInterface from './components/PromptingInterface/PromptingInterface';
import FAQ from './components/Content/FAQ/FAQ';
import Docs from './components/Content/Docs/Docs';
import EducationContent from './components/Content/EducationContent/EducationContent';
import ProjectsList from './components/Projects/ProjectsList/ProjectsList';
import Navbar from './components/Primary/Navbar/Navbar';
import Footer from './components/Primary/Footer/Footer';
import Background from './components/Primary/Background/Background';
import GenerationResult from './components/PromptingInterface/GenerationResult/GenerationResult';
import ProjectPage from './components/Projects/ProjectPage/ProjectPage';
import GitHubSuccessModal from './components/Primary/Navbar/GitHubSuccessModal';
import AccountManagementPage from './components/AccountManagement/AccountManagement'; // Import the new component

const App = () => {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleGitHubLogin = (isLoggedIn: boolean) => {
    if (isLoggedIn) {
      setModalMessage('GitHub Login Successful');
    } else {
      setModalMessage('GitHub Log Out Successful');
    }
    setShowGitHubModal(true);
  };

  const closeModal = () => {
    setShowGitHubModal(false);
  };

  return (
    <Router>
      <Navbar onGitHubLogin={handleGitHubLogin} />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/prompt" element={<PromptingInterface />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/education" element={<EducationContent />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/generation-result" element={<GenerationResult />} />
          <Route path="/account" element={<AccountManagementPage />} /> {/* New route */}
        </Routes>
      </div>
      <Background />
      <Footer />
      <GitHubSuccessModal
        isOpen={showGitHubModal}
        message={modalMessage}
        onClose={closeModal}
      />
    </Router>
  );
};

export default App;