// components/AccountManagement/AddFundsSection.tsx
import React, { useState } from 'react';

const AddFundsSection = () => {
  const [customAmount, setCustomAmount] = useState<string>('');

  const predefinedAmounts = [
    { label: 'Basic', amount: 10, description: '100 projects generations, or 250 updates' },
    { label: 'Standard', amount: 20, description: '200 projects generations, or 500 updates' },
    { label: 'Power User', amount: 50, description: '500 projects generations, or 1250 updates' },
  ];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handleAddFunds = (amount: number) => {
    console.log('Adding funds:', amount); // Replace with actual logic
  };

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-card relative z-10">
      <h2 className="text-xl font-semibold text-textPrimary mb-4">Add Funds</h2>
      <div className="space-y-6">
        {/* Predefined Amounts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {predefinedAmounts.map((option, index) => (
            <div
              key={index}
              className="bg-primary p-4 rounded-lg cursor-pointer hover:bg-opacity-90 transition-all"
              onClick={() => handleAddFunds(option.amount)}
            >
              <h3 className="text-lg font-bold text-accent">${option.amount}</h3>
              <p className="text-textPrimary text-sm">{option.label}</p>
              <p className="text-textPrimary text-xs opacity-80">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="space-y-2">
          <label htmlFor="custom-amount" className="text-textPrimary font-medium">
            Custom Amount
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              id="custom-amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="w-full p-2 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter custom amount"
            />
            <button
              className="px-6 py-2 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all"
              onClick={() => handleAddFunds(Number(customAmount))}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFundsSection;