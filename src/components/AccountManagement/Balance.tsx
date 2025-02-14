import React, { useState } from 'react';
import { useGlobalState } from '../Context/GlobalStateContext'; // Import the global state hook

const Balance: React.FC = () => {
  const { balance, setBalance } = useGlobalState(); // Access global state for balance
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<'USDC' | 'SOL' | 'CRAFT'>('USDC');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  // Mock exchange rates (replace with real-time data)
  const exchangeRates = {
    USDC: 1,
    SOL: 0.05, // 1 SOL = 20 USDC
    CRAFT: 0.1, // 1 CRAFT = 10 USDC
  };

  // Predefined amounts for quick add
  const predefinedAmounts = [10, 20, 50, 100];

  // Convert amount based on selected currency
  const handleAmountChange = (value: string) => {
    setAmount(value);
    const numericValue = parseFloat(value) || 0;
    setConvertedAmount(numericValue / exchangeRates[currency]);
  };

  // Handle currency change
  const handleCurrencyChange = (newCurrency: 'USDC' | 'SOL' | 'CRAFT') => {
    setCurrency(newCurrency);
    handleAmountChange(amount); // Recalculate converted amount
  };

  // Handle adding funds
  const handleAddFunds = () => {
    const numericAmount = parseFloat(amount) || 0;
    if (numericAmount > 0) {
      const newBalance = { ...balance };
      if (currency === 'USDC') {
        newBalance.usd += numericAmount;
      } else if (currency === 'CRAFT') {
        newBalance.craft += numericAmount;
      }
      setBalance(newBalance); // Update global state
      setAmount('');
      setConvertedAmount(0);
      console.log(`Added ${numericAmount} ${currency} to balance.`);
    }
  };

  return (
    <div className="font-tomorrow bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h2 className="text-2xl font-bold text-accent mb-6">Balance & Add Funds</h2>
      <div className="space-y-6">
        {/* Balance Display */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Balance</h3>
          <div className="bg-primary p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-textPrimary">USD:</span>
              <span className="text-textPrimary font-bold">${balance.usd.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-textPrimary">CRAFT:</span>
              <span className="text-textPrimary font-bold">${balance.craft.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Currency Converter */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Add Funds</h3>
          <div className="bg-primary p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="w-full p-3 bg-secondary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter amount"
              />
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
            </div>
            {convertedAmount > 0 && (
              <p className="text-textPrimary text-sm mt-2">
                ≈ {convertedAmount.toFixed(2)} {currency}
              </p>
            )}
          </div>
        </div>

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

        {/* Add Funds Button */}
        <button
          onClick={handleAddFunds}
          className="w-full px-6 py-3 bg-accent text-textPrimary rounded-lg hover:bg-opacity-90 transition-all"
        >
          Add Funds
        </button>

        {/* Transaction History */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-textPrimary">Recent Transactions</h3>
          <div className="bg-primary p-4 rounded-lg">
            <div className="text-textPrimary">
              {/* Mock transaction history (replace with real data) */}
              <p>+ $20.00 (USDC) - 2023-10-01</p>
              <p>+ $50.00 (SOL) - 2023-09-25</p>
              <p>+ $10.00 (CRAFT) - 2023-09-20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;