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
    <div className="bg-primary">
      {/* Stack Cards Vertically */}
      <div className="z-70 mt-48 mb-32 max-w-4xl mx-auto space-y-6 z-10">
        {/* Profile Section Card */}
          <ProfileWrapper />
        {/* Subscription Section Card */}
          <SubscriptionSection />
      </div>
    </div>
  );
};

export default AccountManagementPage;