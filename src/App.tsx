import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStateProvider } from './components/Context/GlobalStateContext';
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
import AccountManagementPage from './components/AccountManagement/AccountManagement';
import UserSearchComponent from './components/UserSearchComponent/UserSearchComponent';
import UserProfile from './components/UserSearchComponent/UserProfile';
import LandingPageExperience from './components/LandingPageExperience/LandingPageExperience';

const App = () => {
  // State to control the landing page visibility
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [balance, setBalance] = useState<{ usd: number; craft: number }>({ usd: 100, craft: 500 }); // Example balance

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

  const handleAddFunds = (amount: number, currency: 'usd' | 'craft') => {
    setBalance((prevBalance) => ({
      ...prevBalance,
      [currency]: prevBalance[currency] + amount,
    }));
  };

  return (
    <GlobalStateProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Show LandingPageExperience or Main Application */}
          {showLandingPage ? (
            <LandingPageExperience onClose={() => setShowLandingPage(false)} />
          ) : (
            <>
              {/* Navbar */}
              <Navbar onGitHubLogin={handleGitHubLogin} balance={balance} />
              <Routes>
                <Route path="/home" element={<HeroSection />} />
                <Route path="/prompt" element={<PromptingInterface />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/education" element={<EducationContent />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
                <Route path="/generation-result" element={<GenerationResult />} />
                <Route
                  path="/users"
                  element={
                    <div className="">
                      <UserSearchComponent />
                    </div>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <AccountManagementPage balance={balance} onAddFunds={handleAddFunds} />
                  }
                />
                <Route path="/user/:userId" element={<UserProfile />} />
              </Routes>
              {/* Background and Footer */}
              <Background />
              <Footer />
            </>
          )}
          {/* GitHub Success Modal */}
          <GitHubSuccessModal isOpen={showGitHubModal} message={modalMessage} onClose={closeModal} />
        </div>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;