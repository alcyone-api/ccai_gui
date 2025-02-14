import React, { useState } from 'react';
import { useGlobalState } from '../Context/GlobalStateContext'; // Import the global state hook

const Balance: React.FC = () => {
  const { balance, setBalance } = useGlobalState(); // Access global state for balance
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<'USDC' | 'SOL' | 'CRAFT'>('USDC');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isTransactionHistoryExpanded, setIsTransactionHistoryExpanded] = useState<boolean>(false);
  const [isPurchaseHistoryExpanded, setIsPurchaseHistoryExpanded] = useState<boolean>(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState<boolean>(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  // Exchange rates
  const exchangeRates = {
    CRAFT_TO_USD: 1000, // 1000 CRAFT = $1
    SOL_TO_USD: 200, // 1 SOL = $200
  };

  // Derived balances
  const usdBalance = balance.craft / exchangeRates.CRAFT_TO_USD; // CRAFT → USD
  const solBalance = usdBalance / exchangeRates.SOL_TO_USD; // USD → SOL

  // Predefined amounts for quick add
  const predefinedAmounts = [10, 20, 50, 100];

  // Mock transaction history (replace with real data)
  const transactionHistory = [
    { type: 'Purchase', amount: 2, currency: 'SOL', date: '2024-10-01' },
    { type: 'Purchase', amount: 5, currency: 'SOL', date: '2024-09-25' },
    { type: 'Purchase', amount: 100, currency: 'USDC', date: '2025-01-20' },
  ];

  // Mock purchase history (replace with real data)
  const purchaseHistory = [
    { description: 'Prompt: Generate a marketing plan', cost: 50, currency: 'CRAFT', date: '2023-10-05' },
    { description: 'Prompt: Write a blog post', cost: 378, currency: 'CRAFT', date: '2023-10-04' },
    { description: 'Prompt: Analyze sales data', cost: 721, currency: 'CRAFT', date: '2023-10-03' },
  ];

  // Convert amount based on selected currency
  const handleAmountChange = (value: string) => {
    setAmount(value);
    const numericValue = parseFloat(value) || 0;
    let convertedValue = 0;

    if (currency === 'USDC') {
      convertedValue = numericValue * exchangeRates.CRAFT_TO_USD; // USDC → CRAFT
    } else if (currency === 'SOL') {
      convertedValue = numericValue * exchangeRates.SOL_TO_USD * exchangeRates.CRAFT_TO_USD; // SOL → USD → CRAFT
    } else if (currency === 'CRAFT') {
      convertedValue = numericValue; // CRAFT → CRAFT
    }

    setConvertedAmount(convertedValue);
  };

  // Handle currency change
  const handleCurrencyChange = (newCurrency: 'USDC' | 'SOL' | 'CRAFT') => {
    setCurrency(newCurrency);
    handleAmountChange(amount); // Recalculate converted amount
  };

  // Handle adding funds
  const handleAddFunds = () => {
    setIsConfirmationVisible(true); // Show confirmation step
  };

  // Handle confirmation of funds
  const handleConfirmFunds = () => {
    if (!isTermsAccepted) {
      alert('Please accept the terms to proceed.');
      return;
    }

    const numericAmount = parseFloat(amount) || 0;
    if (numericAmount > 0) {
      const newBalance = { ...balance };
      if (currency === 'USDC') {
        newBalance.usd += numericAmount;
        newBalance.craft += numericAmount * exchangeRates.CRAFT_TO_USD; // Add equivalent CRAFT
      } else if (currency === 'SOL') {
        newBalance.craft += numericAmount * exchangeRates.SOL_TO_USD * exchangeRates.CRAFT_TO_USD; // Add equivalent CRAFT
      } else if (currency === 'CRAFT') {
        newBalance.craft += numericAmount;
      }
      setBalance(newBalance); // Update global state
      setAmount('');
      setConvertedAmount(0);
      setIsConfirmationVisible(false); // Hide confirmation step
      setIsTermsAccepted(false); // Reset terms checkbox
      console.log(`Added ${numericAmount} ${currency} to balance.`);
    }
  };

  return (
    <div className="font-tomorrow bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-6">Balance & Add Funds</h2>
      <div className="space-y-6">
        {/* Balance Display */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-textPrimary">Your Balances</h3>
          <div className="bg-primary p-6 rounded-xl shadow-lg">
            {/* CRAFT Balance (Prominent) */}
            <div className="flex flex-col items-center mb-6">
              <span className="text-textPrimary text-lg">CRAFT Balance</span>
              <span className="text-4xl font-bold text-accent mt-2">
                {balance.craft.toLocaleString()} CRAFT
              </span>
              <span className="text-textPrimary text-sm mt-1">
                ≈ ${usdBalance.toFixed(2)} USD
              </span>
            </div>

            {/* USDC and SOL Balances */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/90 p-4 rounded-lg">
                <span className="text-textPrimary text-sm">USDC Balance</span>
                <span className="text-textPrimary font-bold block mt-1">
                  {usdBalance.toFixed(2)} USDC
                </span>
              </div>
              <div className="bg-secondary/90 p-4 rounded-lg">
                <span className="text-textPrimary text-sm">SOL Balance</span>
                <span className="text-textPrimary font-bold block mt-1">
                  {solBalance.toFixed(4)} SOL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Currency Converter */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Add Funds</h3>
          <div className="bg-primary p-4 rounded-lg">
            <div className="flex items-center gap-4">
              {/* Input for amount */}
              <input
                type="number"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="flex-1 p-3 bg-secondary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter amount"
              />
              {/* Currency selector */}
              <select
                value={currency}
                onChange={(e) =>
                  handleCurrencyChange(e.target.value as 'USDC' | 'SOL' | 'CRAFT')
                }
                className="p-3 bg-secondary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="USDC">USDC</option>
                <option value="SOL">SOL</option>
                <option value="CRAFT">CRAFT</option>
              </select>
              {/* Add Funds button */}
              <button
                onClick={handleAddFunds}
                className="px-6 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                Add Funds
              </button>
            </div>
            {convertedAmount > 0 && (
              <p className="text-textPrimary text-sm mt-2">
                You will receive ≈ {convertedAmount.toLocaleString()} CRAFT
              </p>
            )}
          </div>
        </div>

        {/* Confirmation Step */}
        {isConfirmationVisible && (
          <div className="bg-primary p-4 rounded-lg space-y-4">
            <p className="text-textPrimary">
              You are about to purchase ≈ {convertedAmount.toLocaleString()} CRAFT with {amount} {currency}.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isTermsAccepted}
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                className="accent-accent"
              />
              <span className="text-textPrimary text-sm">
                I understand this purchase is non-refundable.
              </span>
            </div>
            <button
              onClick={handleConfirmFunds}
              className="px-6 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all"
            >
              Confirm Purchase
            </button>
          </div>
        )}

        {/* Quick Add Buttons */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Quick Add</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {predefinedAmounts.map((amount, index) => (
              <button
                key={index}
                onClick={() => handleAmountChange(amount.toString())}
                className="p-3 bg-primary text-textPrimary rounded-lg hover:bg-opacity-90 transition-all"
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-textPrimary">Transaction History</h3>
            <button
              onClick={() => setIsTransactionHistoryExpanded(!isTransactionHistoryExpanded)}
              className="text-accent hover:text-accent/80 transition-all"
            >
              {isTransactionHistoryExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          {isTransactionHistoryExpanded && (
            <div className="bg-primary p-4 rounded-lg">
              {transactionHistory.map((transaction, index) => (
                <div key={index} className="border-b border-accent/20 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <span className="text-textPrimary">{transaction.type}</span>
                    <span className="text-textPrimary font-bold">
                      + {transaction.amount} {transaction.currency}
                    </span>
                  </div>
                  <div className="text-textPrimary text-sm mt-1">{transaction.date}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Purchase History */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-textPrimary">Purchase History</h3>
            <button
              onClick={() => setIsPurchaseHistoryExpanded(!isPurchaseHistoryExpanded)}
              className="text-accent hover:text-accent/80 transition-all"
            >
              {isPurchaseHistoryExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          {isPurchaseHistoryExpanded && (
            <div className="bg-primary p-4 rounded-lg">
              {purchaseHistory.map((purchase, index) => (
                <div key={index} className="border-b border-accent/20 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <span className="text-textPrimary">{purchase.description}</span>
                    <span className="text-textPrimary font-bold">
                      - {purchase.cost} {purchase.currency}
                    </span>
                  </div>
                  <div className="text-textPrimary text-sm mt-1">{purchase.date}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;