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
  const [isEditingSocialMedia, setIsEditingSocialMedia] = useState<boolean>(true);

  const handleSaveProgram = () => {
    if (!hasAgreedToTerms) {
      alert('Please agree to the terms of the tipping program.');
      return;
    }
    if (!telegramHandle.trim() && !xAccountHandle.trim()) {
      alert('Please provide at least one social media handle (Telegram or X).');
      return;
    }
    setIsEditingSocialMedia(false);
    setOptInSuccess(true);
  };

  const handleEditProgram = () => {
    setIsEditingSocialMedia(true);
  };

  const handleOptOut = () => {
    setOptInProgram(false);
    setTelegramHandle('');
    setXAccountHandle('');
    setHasAgreedToTerms(false);
    setOptInSuccess(false);
    setIsEditingSocialMedia(true);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-textPrimary mt-12 mb-6">$CRAFT Mentor Program</h3>
      <div className="space-y-4">
        <p className="text-textPrimary">
          As a CodeCraft mentor, you can offer your expertise to help other developers set up their apps, troubleshoot issues, and optimize their projects in exchange for tips in $CRAFT. By opting in, your profile will be visible to Crafters looking for assistance, showcasing your skills, experience, and areas of expertise. You can set your availability, choose which requests to take, and receive feedback through ratings and reviews. If you no longer wish to participate, you can opt out at any time, making your profile invisible to new requests. Share your knowledge, earn $CRAFT, and contribute to the CodeCraft community on your terms.
        </p>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              id="optInProgram"
              type="checkbox"
              checked={optInProgram}
              onChange={(e) => setOptInProgram(e.target.checked)}
              disabled={!isProfileComplete}
              className="opacity-0 absolute h-5 w-5"
            />
            <div className="w-5 h-5 bg-primary border-2 border-accent rounded-md flex items-center justify-center">
              {optInProgram && (
                <Icon icon="mdi:check" className="w-4 h-4 text-accent" />
              )}
            </div>
          </div>
          <label htmlFor="optInProgram" className="text-textPrimary font-medium">
            I want to opt in to the $CRAFT Mentor Program
          </label>
        </div>

        {optInProgram && (
          <>
            {isEditingSocialMedia ? (
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
            ) : (
              <div className="flex items-center space-x-4">
                {telegramHandle && (
                  <div className="flex items-center space-x-2">
                    <Icon icon="mdi:telegram" className="w-6 h-6 text-textPrimary" />
                    <span className="text-textPrimary">{telegramHandle}</span>
                  </div>
                )}
                {xAccountHandle && (
                  <div className="flex items-center space-x-2">
                    <Icon icon="mdi:twitter" className="w-6 h-6 text-textPrimary" />
                    <span className="text-textPrimary">{xAccountHandle}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center space-x-2 mt-4">
              <div className="relative">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  checked={hasAgreedToTerms}
                  onChange={(e) => setHasAgreedToTerms(e.target.checked)}
                  className="opacity-0 absolute h-5 w-5"
                />
                <div className="w-5 h-5 bg-primary border-2 border-accent rounded-md flex items-center justify-center">
                  {hasAgreedToTerms && (
                    <Icon icon="mdi:check" className="w-4 h-4 text-accent" />
                  )}
                </div>
              </div>
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
              {isEditingSocialMedia ? (
                <button
                  onClick={handleSaveProgram}
                  disabled={!hasAgreedToTerms || (!telegramHandle.trim() && !xAccountHandle.trim())}
                  className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
                    hasAgreedToTerms && (telegramHandle.trim() || xAccountHandle.trim())
                      ? 'bg-accent text-textPrimary hover:bg-opacity-90'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  }`}
                >
                  {optInSuccess ? 'Save Edits' : 'Save Program Details'}
                </button>
              ) : (
                <button
                  onClick={handleEditProgram}
                  className="px-6 py-2 rounded-lg bg-accent text-textPrimary hover:bg-opacity-90 transition-all font-tomorrow"
                >
                  Edit Program Details
                </button>
              )}
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