// components/AccountManagement/SubscriptionSection.tsx
import React from 'react';

const SubscriptionSection = () => {
  const subscriptionOptions = [
    { label: 'Starter', price: 5, tokens: '500,000 tokens' },
    { label: 'Standard', price: 10, tokens: '1,250,000 tokens' },
    { label: 'Pro', price: 20, tokens: '2,500,000 tokens' },
  ];

  const handleSubscribe = (price: number) => {
    console.log('Subscribed to:', price); // Replace with actual logic
  };

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-card relative z-10">
      <h2 className="text-xl font-semibold text-textPrimary mb-4">Monthly Subscription</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {subscriptionOptions.map((option, index) => (
          <div
            key={index}
            className="bg-primary p-4 rounded-lg cursor-pointer hover:bg-opacity-90 transition-all"
            onClick={() => handleSubscribe(option.price)}
          >
            <h3 className="text-lg font-bold text-accent">${option.price}/mo</h3>
            <p className="text-textPrimary text-sm">{option.label}</p>
            <p className="text-textPrimary text-xs opacity-80">{option.tokens}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionSection;