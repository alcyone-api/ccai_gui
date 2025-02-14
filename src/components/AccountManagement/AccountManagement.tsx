import React from 'react';
import ProfileSection from './ProfileSection';
import Balance from './Balance';
import SubscriptionSection from './SubscriptionSection';

interface AccountManagementPageProps {
  balance: { usd: number; craft: number };
  onAddFunds: (amount: number, currency: 'usd' | 'craft') => void;
}

const AccountManagementPage: React.FC<AccountManagementPageProps> = ({ balance, onAddFunds }) => {
  return (
    <div className="min-h-screen bg-primary px-4 mt-16 pt-16 md:pt-24 pb-24 md:pb-32">
      {/* Stack Cards Vertically */}
      <div className="z-70 max-w-4xl mx-auto space-y-6 z-10">
        {/* Profile Section Card */}
          <ProfileSection onSaveProfile={(avatar, username) => { /* handle save profile */ }} />
        {/* Balance Section Card */}
          <Balance balance={balance} onAddFunds={onAddFunds} />
        {/* Subscription Section Card */}
          <SubscriptionSection />
      </div>
    </div>
  );
};

export default AccountManagementPage;