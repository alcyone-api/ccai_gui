import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProfileSection from './ProfileSection';
import BalanceCard from './BalanceCard';
import AddFundsSection from './AddFunds';
import SubscriptionSection from './SubscriptionSection';

const AccountManagementPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'profile', title: 'Profile Management' },
    { id: 'balances', title: 'Account Balances' },
    { id: 'add-funds', title: 'Add Funds' },
    { id: 'subscriptions', title: 'Subscription Management' },
  ];

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div className="relative z-40 flex flex-col md:flex-row items-start justify-center px-4 pt-16 mt-12 md:pt-24 pb-24 md:pb-32 mb-12">
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex justify-between items-center p-3 bg-secondary/90 backdrop-blur-sm rounded-xl border border-accent/20 shadow-lg text-textPrimary/70 hover:bg-secondary/80 transition-all duration-300"
          >
            <span>Account Management</span>
            {isMenuOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
          </button>
          {isMenuOpen && (
            <ul className="mt-2 space-y-2 bg-secondary/90 backdrop-blur-sm rounded-xl border border-accent/20 shadow-lg p-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-accent text-white shadow-md shadow-accent/20'
                        : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Sidebar Menu */}
        <div className="hidden md:block mt-24 font-tomorrow w-full md:w-72 bg-secondary/90 backdrop-blur-sm p-6 rounded-xl border border-accent/20 shadow-2xl md:mx-8 mb-8 md:mb-0 z-30">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Account Management
          </h2>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'text-textPrimary/70 hover:bg-secondary/80 hover:shadow-md'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="mt-16 font-tomorrow w-full md:w-[calc(100%-20rem)] max-w-4xl p-6 md:p-8 overflow-y-auto z-40">
          <div key={activeSection} className="animate-fade-in-up">
            {activeSection === 'profile' && <ProfileSection />}
            {activeSection === 'balances' && <BalanceCard />}
            {activeSection === 'add-funds' && <AddFundsSection />}
            {activeSection === 'subscriptions' && <SubscriptionSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagementPage;