import { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProfileSection from './ProfileSection';
import Balance from './Balance';
import SubscriptionSection from './SubscriptionSection';

interface AccountManagementPageProps {
  balance: {
    usd: number;
    craft: number;
  };
}

const AccountManagementPage: React.FC<AccountManagementPageProps> = ({ balance }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const sections = [
    { id: 'profile', title: 'Profile Management', path: '/account/profile' },
    { id: 'balances', title: 'Account Balances', path: '/account/balances' },
    { id: 'subscriptions', title: 'Subscription Management', path: '/account/subscriptions' },
  ];

  return (
    <div className="z-30 relative min-h-screen bg-primary"> {/* Ensure z-index is higher */}
      <div className="flex flex-col md:flex-row px-4 pt-16 md:pt-24 pb-24 md:pb-32 justify-center items-center"> {/* Center content */}
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden w-full mb-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex justify-between items-center p-3 bg-secondary rounded-lg border border-accent/20 shadow-md text-textPrimary hover:bg-secondary/80 transition-all"
          >
            <span>Account Management</span>
            {isMenuOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
          </button>
          {isMenuOpen && (
            <ul className="mt-2 space-y-2 bg-secondary rounded-lg border border-accent/20 shadow-md p-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    to={section.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full p-2 text-left rounded-lg transition-all ${
                      location.pathname === section.path
                        ? 'bg-accent text-white'
                        : 'text-textPrimary hover:bg-secondary/80'
                    }`}
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Sidebar Menu */}
        <div className="hidden md:block w-full md:w-64 bg-secondary rounded-xl border border-accent/20 shadow-lg p-6 md:mr-8">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Account Management
          </h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.path}
                  className={`block w-full p-3 rounded-lg transition-all ${
                    location.pathname === section.path
                      ? 'bg-accent text-white shadow-lg'
                      : 'text-textPrimary hover:bg-secondary/80'
                  }`}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[calc(100%-20rem)] max-w-4xl p-6 md:p-8">
          <Routes>
            <Route path="profile" element={<ProfileSection onSaveProfile={(avatar, username) => {}} />} />
            <Route path="balances" element={<Balance balance={balance} />} />
            <Route path="subscriptions" element={<SubscriptionSection />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AccountManagementPage;