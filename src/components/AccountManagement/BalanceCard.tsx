// components/AccountManagement/BalanceCard.tsx
import React from 'react';

const BalanceCard = () => {
  const balance = 100; // Example balance, replace with dynamic data

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-card relative z-10">
      <h2 className="text-xl font-semibold text-textPrimary mb-4">Balance</h2>
      <div className="space-y-4">
        {/* Current Balance */}
        <div className="flex items-center justify-between">
          <span className="text-textPrimary">Current Balance</span>
          <span className="text-accent font-bold text-lg">${balance}</span>
        </div>

        {/* Add Funds Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="px-4 py-2 bg-primary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-accent">
            Add via SOL
          </button>
          <button className="px-4 py-2 bg-primary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-accent">
            Add via USDC
          </button>
          <button className="px-4 py-2 bg-primary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-accent">
            Add via CRAFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;