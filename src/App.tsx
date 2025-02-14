import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
import ProfileSection from './components/AccountManagement/ProfileSection';
import BalanceCard from './components/AccountManagement/Balance';
import SubscriptionSection from './components/AccountManagement/SubscriptionSection';

const App = () => {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
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

  const handleSaveProfile = (avatar: string, username: string) => {
    setProfilePicture(avatar); // Set the selected avatar
    setUsername(username); // Set the username
  };

  const handleAddFunds = (amount: number, currency: 'usd' | 'craft') => {
    setBalance((prevBalance) => ({
      ...prevBalance,
      [currency]: prevBalance[currency] + amount,
    }));
  };

  return (
    <Router>
      <Navbar
        onGitHubLogin={handleGitHubLogin}
        profilePicture={profilePicture}
        username={username}
        balance={balance}
      />
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
          <Route path="/account/*" element={
            <AccountManagementPage
              onSaveProfile={handleSaveProfile}
              balance={balance}
              onAddFunds={handleAddFunds}
            />
          } />
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

// Account Management Page Component
interface AccountManagementPageProps {
  onSaveProfile: (avatar: string, username: string) => void;
  balance: { usd: number; craft: number };
  onAddFunds: (amount: number, currency: 'usd' | 'craft') => void;
}

const AccountManagementPage = ({ onSaveProfile, balance, onAddFunds }: AccountManagementPageProps) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col md:flex-row items-start justify-center px-4 pt-16 mt-12 md:pt-24 pb-24 md:pb-32 mb-12">
        {/* Docs-style Menu */}
        <div className="hidden md:block mt-24 font-tomorrow w-full md:w-72 bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-2xl md:mx-8 mb-8 md:mb-0 z-30">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Account Management
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                to="/account/profile"
                className={`block w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/account/profile'
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                }`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/account/balances"
                className={`block w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/account/balances'
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                }`}
              >
                Add Funds
              </Link>
            </li>
            <li>
              <Link
                to="/account/subscriptions"
                className={`block w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === '/account/subscriptions'
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                }`}
              >
                Subscriptions
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="mt-16 font-tomorrow w-full md:w-[calc(100%-20rem)] max-w-4xl p-6 md:p-8 overflow-y-auto z-40">
          <Routes>
            <Route path="profile" element={<ProfileSection onSaveProfile={onSaveProfile} />} />
            <Route path="balances" element={<BalanceCard balance={balance} />} />
            <Route path="subscriptions" element={<SubscriptionSection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;