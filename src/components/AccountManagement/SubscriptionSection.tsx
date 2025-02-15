import React, { useState } from 'react';
import logo from '../../assets/ccai_logo_lt.svg';

const SubscriptionSection = () => {
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const [isEnrolling, setIsEnrolling] = useState<boolean>(false);
  const [currentSubscription, setCurrentSubscription] = useState<{
    status: string;
    plan: string;
    renewalDate: string;
    price: number;
    tokens: string;
  } | null>(null);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const [walletBalance, setWalletBalance] = useState<number>(250000);

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

  const [transactionHistory, setTransactionHistory] = useState<
    Array<{
      amount: number;
      date: string;
      plan: string;
    }>
  >([]);

  const subscriptionCostCraft = 20000;
  const subscriptionCostUsdc = 20;

  const handleCancelSubscription = () => {
    setIsCancelling(true);
  };

  const handleConfirmCancellation = () => {
    if (currentSubscription) {
      setSubscriptionHistory((prevHistory) => [
        ...prevHistory,
        {
          plan: currentSubscription.plan,
          startDate: new Date().toISOString().split('T')[0],
          endDate: new Date().toISOString().split('T')[0],
          status: 'Cancelled',
          price: currentSubscription.price,
          tokens: currentSubscription.tokens,
        },
      ]);
      setIsCancelling(false);
      setCurrentSubscription(null);
      console.log('Subscription cancelled.');
    }
  };

  const handleEnroll = () => {
    setIsEnrolling(true);
  };

  const handleConfirmEnrollment = () => {
    if (!acceptTerms) {
      alert('Please confirm that you understand the recurring charges.');
      return;
    }

    const isAlreadySubscribed = currentSubscription !== null;
    const renewalDate = isAlreadySubscribed
      ? new Date(currentSubscription.renewalDate) // Use existing renewal date if already subscribed
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Set new renewal date if not subscribed

    const newSubscription = {
      status: 'Active',
      plan: 'Unlimited Plan',
      renewalDate: renewalDate.toISOString().split('T')[0],
      price: subscriptionCostUsdc,
      tokens: 'Unlimited',
    };

    if (!isAlreadySubscribed) {
      // Only charge and update wallet balance if this is a new subscription
      if (walletBalance >= subscriptionCostCraft) {
        setWalletBalance(walletBalance - subscriptionCostCraft);
        setTransactionHistory((prevTransactions) => [
          ...prevTransactions,
          {
            amount: subscriptionCostUsdc,
            date: new Date().toISOString().split('T')[0],
            plan: 'Unlimited Plan',
          },
        ]);
      } else {
        alert('Insufficient CRAFT balance.');
        return;
      }
    }

    setCurrentSubscription(newSubscription);
    setSubscriptionHistory((prevHistory) => [
      ...prevHistory,
      {
        plan: 'Unlimited Plan',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        status: 'Active',
        price: subscriptionCostUsdc,
        tokens: 'Unlimited',
      },
    ]);

    setIsEnrolling(false);
    setAcceptTerms(false);
    console.log('Enrolled in Unlimited plan.');
  };

  return (
    <div className="font-tomorrow bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-8">Subscription Management</h2>
      <div className="space-y-8">
        {/* Subscription Details Card */}
        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg border border-accent/10">
          <div className="flex items-center space-x-6">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold text-accent">Unlimited Plan</h3>
              <p className="text-textPrimary text-sm mt-1">Unlimited generation tokens, flat rate</p>
              <p className="text-textPrimary text-xs opacity-80 mt-1">*Payments are made in CRAFT</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary p-4 rounded-lg border border-accent/10">
              <p className="text-textPrimary text-sm">Monthly Cost</p>
              <p className="text-accent font-bold text-xl">${subscriptionCostUsdc} USDC</p>
            </div>
            <div className="bg-primary p-4 rounded-lg border border-accent/10">
              <p className="text-textPrimary text-sm">Equivalent in CRAFT</p>
              <p className="text-accent font-bold text-xl">{subscriptionCostCraft} CRAFT</p>
            </div>
            <div className="bg-primary p-4 rounded-lg border border-accent/10">
              <p className="text-textPrimary text-sm">Equivalent in SOL</p>
              <p className="text-accent font-bold text-xl">{(subscriptionCostCraft * 0.005).toFixed(4)} SOL</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleEnroll}
              disabled={currentSubscription !== null}
              className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-textPrimary font-bold transition-all hover:opacity-90 ${
                currentSubscription !== null && 'opacity-50 cursor-not-allowed'
              }`}
            >
              {currentSubscription ? 'Already Enrolled' : 'Enroll Now'}
            </button>
          </div>
          {/* Subtle Wallet Balance Display */}
          <div className="mt-6 text-center">
            <p className="text-textPrimary">
              Wallet Balance <span className="text-accent font-bold">{walletBalance.toLocaleString()} CRAFT</span>
            </p>
          </div>
        </div>

        {/* Enrollment Validation Steps */}
        {isEnrolling && (
          <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg border border-accent/10">
            <h3 className="text-xl font-bold text-accent mb-4">Confirm Enrollment</h3>
            <div className="space-y-4">
              <p className="text-textPrimary">
                The Unlimited Plan costs <span className="text-accent font-bold">{subscriptionCostCraft} CRAFT</span>{' '}
                per month. Your current balance is <span className="text-accent font-bold">{walletBalance.toLocaleString()} CRAFT</span>.
              </p>
              <p className="text-textPrimary">
                After this transaction, your new balance will be{' '}
                <span className="text-accent font-bold">{(walletBalance - subscriptionCostCraft).toLocaleString()} CRAFT</span>.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="accept-terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-5 h-5 rounded border border-accent/50 focus:ring-accent"
                />
                <label htmlFor="accept-terms" className="text-textPrimary text-sm">
                  I understand that I will be charged{' '}
                  <span className="text-accent font-bold">{subscriptionCostCraft} CRAFT</span> monthly until I cancel.
                </label>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleConfirmEnrollment}
                  className="px-6 py-2 bg-green-500 text-textPrimary rounded-lg hover:bg-green-600 transition-all"
                >
                  Confirm Enrollment
                </button>
                <button
                  onClick={() => setIsEnrolling(false)}
                  className="px-6 py-2 bg-secondary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Current Subscription Card */}
        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg border border-accent/10">
          <h3 className="text-xl font-bold text-accent mb-4">Current Subscription</h3>
          {currentSubscription ? (
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-textPrimary">Status</p>
                <p className="text-accent font-bold">{currentSubscription.status}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textPrimary">Plan</p>
                <p className="text-accent font-bold">{currentSubscription.plan}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textPrimary">Renewal Date</p>
                <p className="text-accent font-bold">{currentSubscription.renewalDate}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textPrimary">Price</p>
                <p className="text-accent font-bold">${currentSubscription.price}/mo</p>
              </div>
              <div className="flex justify-between">
                <p className="text-textPrimary">Tokens</p>
                <p className="text-accent font-bold">{currentSubscription.tokens}</p>
              </div>
              {!isCancelling ? (
                <div className="mt-6">
                  <button
                    onClick={handleCancelSubscription}
                    className="w-full px-6 py-3 rounded-lg bg-red-500 text-textPrimary font-bold transition-all hover:bg-red-600"
                  >
                    Cancel Subscription
                  </button>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <p className="text-textPrimary">
                    Are you sure you want to cancel your subscription? You will lose access to your benefits after the
                    current billing period.
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
          )}
        </div>
      ) : (
        <p className="text-textPrimary">No active subscription.</p>
      )}
    </div>

    {/* Subscription History Card */}
    <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg border border-accent/10">
      <h3 className="text-xl font-bold text-accent mb-4">Subscription History</h3>
      {subscriptionHistory.length > 0 ? (
        <div className="space-y-4">
          {subscriptionHistory.map((history, index) => (
            <div key={index} className="border-b border-accent/20 pb-4 last:border-b-0">
              <div className="flex justify-between items-center">
                <p className="text-textPrimary">Plan</p>
                <p className="text-accent font-bold">{history.plan}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-textPrimary">Start Date</p>
                <p className="text-accent font-bold">{history.startDate}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-textPrimary">End Date</p>
                <p className="text-accent font-bold">{history.endDate || 'Active'}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-textPrimary">Status</p>
                <p className="text-accent font-bold">{history.status}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-textPrimary">No subscription history available.</p>
      )}
    </div>

    {/* Transaction History Card */}
    <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg border border-accent/10">
      <h3 className="text-xl font-bold text-accent mb-4">Transaction History</h3>
      {transactionHistory.length > 0 ? (
        <div className="space-y-4">
          {transactionHistory.map((transaction, index) => (
            <div key={index} className="border-b border-accent/20 pb-4 last:border-b-0">
              <div className="flex justify-between items-center">
                <p className="text-textPrimary">Amount Paid</p>
                <p className="text-accent font-bold">${transaction.amount}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-textPrimary">Date</p>
                <p className="text-accent font-bold">{transaction.date}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-textPrimary">Plan</p>
                <p className="text-accent font-bold">{transaction.plan}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-textPrimary">No transaction history available.</p>
      )}
    </div>
  </div>
</div>
  );
};

export default SubscriptionSection;