import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [currentSubscription, setCurrentSubscription] = useState<{
    status: string;
    plan: string;
    renewalDate: string;
    price: number;
    tokens: string;
  } | null>(null);

  // State for subscription history
  const [subscriptionHistory, setSubscriptionHistory] = useState<
    Array<{
      plan: string;
      startDate: string;
      endDate: string;
      status: string;
      price: number;
      tokens: string;
    }>
  >([]);

  // Mock subscription plans
  const subscriptionPlans = [
    { label: 'Starter', price: 5, tokens: '500,000 tokens' },
    { label: 'Standard', price: 10, tokens: '1,250,000 tokens' },
    { label: 'Pro', price: 20, tokens: '2,500,000 tokens' },
  ];

  const handleCancelSubscription = () => {
    setIsCancelling(true);
  };

  const handleConfirmCancellation = () => {
    if (currentSubscription) {
      // Add the current subscription to history before cancelling
      setSubscriptionHistory((prevHistory) => [
        ...prevHistory,
        {
          plan: currentSubscription.plan,
          startDate: new Date().toISOString().split('T')[0], // Today's date
          endDate: new Date().toISOString().split('T')[0], // Cancelled today
          status: 'Cancelled',
          price: currentSubscription.price,
          tokens: currentSubscription.tokens,
        },
      ]);
    }
    setIsCancelling(false);
    setCurrentSubscription(null); // Clear current subscription
    console.log('Subscription cancelled.');
  };

  const handleEnroll = () => {
    if (selectedPlan) {
      const plan = subscriptionPlans.find((p) => p.label === selectedPlan);
      if (plan) {
        const newSubscription = {
          status: 'Active',
          plan: plan.label,
          renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
          price: plan.price,
          tokens: plan.tokens,
        };
        setCurrentSubscription(newSubscription);

        // Add the new subscription to history
        setSubscriptionHistory((prevHistory) => [
          ...prevHistory,
          {
            plan: plan.label,
            startDate: new Date().toISOString().split('T')[0], // Today's date
            endDate: '', // No end date yet
            status: 'Active',
            price: plan.price,
            tokens: plan.tokens,
          },
        ]);

        console.log(`Enrolled in ${plan.label} plan.`);
      }
    }
  };

  return (
    <div className="font-tomorrow bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-6">Subscription Management</h2>
      <div className="space-y-6">
        {/* Subscription Plans */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Available Plans</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(plan.label)}
                className={`bg-primary p-4 rounded-lg cursor-pointer transition-all ${
                  selectedPlan === plan.label
                    ? 'border-2 border-accent shadow-glow'
                    : 'border-2 border-transparent hover:border-accent/50'
                }`}
              >
                <h4 className="text-lg font-bold text-accent">${plan.price}/mo</h4>
                <p className="text-textPrimary text-sm">{plan.label}</p>
                <p className="text-textPrimary text-xs opacity-80">{plan.tokens}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enroll Button */}
        <div className="flex">
          <button
            onClick={handleEnroll}
            disabled={!selectedPlan}
            className={`px-12 py-2 rounded-lg transition-all ${
              selectedPlan
                ? 'bg-accent text-textPrimary hover:bg-opacity-90'
                : 'bg-secondary text-textPrimary/50 cursor-not-allowed'
            }`}
          >
            Enroll
          </button>
        </div>

        {/* Current Subscription Status */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Current Subscription</h3>
          {currentSubscription ? (
            <div className="bg-primary p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-textPrimary">Status:</span>
                <span
                  className={`font-bold ${
                    currentSubscription.status === 'Active' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {currentSubscription.status}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-textPrimary">Plan:</span>
                <span className="text-textPrimary font-bold">{currentSubscription.plan}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-textPrimary">Renewal Date:</span>
                <span className="text-textPrimary font-bold">{currentSubscription.renewalDate}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-textPrimary">Price:</span>
                <span className="text-textPrimary font-bold">${currentSubscription.price}/mo</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-textPrimary">Tokens:</span>
                <span className="text-textPrimary font-bold">{currentSubscription.tokens}</span>
              </div>
            </div>
          ) : (
            <div className="bg-primary p-4 rounded-lg">
              <p className="text-textPrimary">No active subscription.</p>
            </div>
          )}
        </div>

        {/* Subscription Cancellation */}
        {currentSubscription && (
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-textPrimary">Cancel Subscription</h3>
            {isCancelling ? (
              <div className="bg-primary p-4 rounded-lg">
                <p className="text-textPrimary mb-4">
                  Are you sure you want to cancel your subscription? You will lose access to your
                  benefits after the current billing period.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={handleConfirmCancellation}
                    className="px-6 py-2 bg-red-500 text-textPrimary rounded-lg hover:bg-red-600 transition-all"
                  >
                    Confirm Cancellation
                  </button>
                  <button
                    onClick={() => setIsCancelling(false)}
                    className="px-6 py-2 bg-secondary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleCancelSubscription}
                className="px-6 py-2 bg-red-500 text-textPrimary rounded-lg hover:bg-red-600 transition-all"
              >
                Cancel Subscription
              </button>
            )}
          </div>
        )}

        {/* Subscription History */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Subscription History</h3>
          {subscriptionHistory.length > 0 ? (
            <div className="bg-primary p-4 rounded-lg">
              <div className="space-y-4">
                {subscriptionHistory.map((history, index) => (
                  <div key={index} className="border-b border-accent/20 pb-4 last:border-b-0">
                    <div className="flex justify-between items-center">
                      <span className="text-textPrimary">Plan:</span>
                      <span className="text-textPrimary font-bold">{history.plan}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-textPrimary">Start Date:</span>
                      <span className="text-textPrimary font-bold">{history.startDate}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-textPrimary">End Date:</span>
                      <span className="text-textPrimary font-bold">
                        {history.endDate || 'Active'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-textPrimary">Status:</span>
                      <span
                        className={`font-bold ${
                          history.status === 'Active' ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {history.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-primary p-4 rounded-lg">
              <p className="text-textPrimary">No subscription history available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;