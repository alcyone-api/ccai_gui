import React from 'react';
import ProfileWrapper from './ProfileWrapper';
import Balance from './Balance';
import SubscriptionSection from './SubscriptionSection';

interface AccountManagementPageProps {
  balance: { usd: number; craft: number };
  onAddFunds: (amount: number, currency: 'usd' | 'craft') => void;
}

const AccountManagementPage: React.FC<AccountManagementPageProps> = ({ }) => {
  return (
    <div className="min-h-screen bg-primary px-4 mt-16 pt-16 md:pt-24 pb-24 md:pb-32">
      {/* Stack Cards Vertically */}
      <div className="z-70 max-w-4xl mx-auto space-y-6 z-10">
        {/* Profile Section Card */}
          <ProfileWrapper />
        {/* Balance Section Card */}
          <Balance />
        {/* Subscription Section Card */}
          <SubscriptionSection />
      </div>
    </div>
  );
};

export default AccountManagementPage;