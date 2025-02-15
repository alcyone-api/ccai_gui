import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface TippingProgramProps {
  isProfileComplete: boolean;
}

const TippingProgram: React.FC<TippingProgramProps> = ({ isProfileComplete }) => {
  const [optInProgram, setOptInProgram] = useState<boolean>(false);
  const [telegramHandle, setTelegramHandle] = useState<string>('');
  const [xAccountHandle, setXAccountHandle] = useState<string>('');
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState<boolean>(false);
  const [optInSuccess, setOptInSuccess] = useState<boolean>(false);

  const handleSaveProgram = () => {
    if (!hasAgreedToTerms) {
      alert('Please agree to the terms of the tipping program.');
      return;
    }
    setOptInSuccess(true);
  };

  const handleOptOut = () => {
    setOptInProgram(false);
    setTelegramHandle('');
    setXAccountHandle('');
    setHasAgreedToTerms(false);
    setOptInSuccess(false);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-textPrimary mt-12 mb-6">$CRAFT Mentor Program</h3>
      <div className="space-y-4">
        <p className="text-textPrimary">
          The $CRAFT Mentor Program allows CodeCraft users to find and contact mentors who will help them set up their projects, deploy them, and get up to speed. By opting in, you agree to provide guidance in exchange for $CRAFT tokens.
        </p>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="optInProgram"
            checked={optInProgram}
            onChange={(e) => setOptInProgram(e.target.checked)}
            disabled={!isProfileComplete}
            className="w-4 h-4 text-accent rounded focus:ring-accent"
          />
          <label htmlFor="optInProgram" className="text-textPrimary font-medium">
            I want to opt in to the $CRAFT Mentor Program
          </label>
        </div>

        {optInProgram && (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="telegramHandle" className="text-textPrimary font-medium">
                  Telegram Handle
                </label>
                <input
                  type="text"
                  id="telegramHandle"
                  value={telegramHandle}
                  onChange={(e) => setTelegramHandle(e.target.value)}
                  className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
                  placeholder="Enter your Telegram handle"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="xAccountHandle" className="text-textPrimary font-medium">
                  X Account Handle
                </label>
                <input
                  type="text"
                  id="xAccountHandle"
                  value={xAccountHandle}
                  onChange={(e) => setXAccountHandle(e.target.value)}
                  className="w-full p-3 bg-primary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-tomorrow"
                  placeholder="Enter your X account handle"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={hasAgreedToTerms}
                onChange={(e) => setHasAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-accent rounded focus:ring-accent"
              />
              <label htmlFor="agreeToTerms" className="text-textPrimary font-medium">
                I understand that I will be contacted by users for guidance and agree to provide reasonable assistance in exchange for $CRAFT tokens.
              </label>
            </div>

            {optInSuccess && (
              <div className="text-green-500 font-medium flex items-center space-x-2 mt-4">
                <Icon icon="mdi:check-circle" className="w-5 h-5" />
                <span>Opted in to $CRAFT Mentor Program</span>
              </div>
            )}

            <div className="flex items-center justify-start space-x-4 mt-6">
              <button
                onClick={handleSaveProgram}
                disabled={!hasAgreedToTerms || !telegramHandle.trim() || !xAccountHandle.trim()}
                className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
                  hasAgreedToTerms && telegramHandle.trim() && xAccountHandle.trim()
                    ? 'bg-accent text-textPrimary hover:bg-opacity-90'
                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                }`}
              >
                Save Program Details
              </button>
              <button
                onClick={handleOptOut}
                className="px-6 py-2 rounded-lg bg-red-500 text-textPrimary hover:bg-red-600 transition-all font-tomorrow"
              >
                Opt Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TippingProgram;