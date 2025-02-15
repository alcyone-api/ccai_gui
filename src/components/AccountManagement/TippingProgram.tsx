import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface TippingProgramProps {
  isProfileComplete: boolean;
}

const TippingProgram: React.FC<TippingProgramProps> = ({ isProfileComplete }) => {
  const [optInProgram, setOptInProgram] = useState<boolean>(false);
  const [telegramHandle, setTelegramHandle] = useState<string>('');
  const [xAccountHandle, setXAccountHandle] = useState<string>('');
  const [isProgramDirty, setIsProgramDirty] = useState<boolean>(false);
  const [optInSuccess, setOptInSuccess] = useState<boolean>(false);

  useEffect(() => {
    setIsProgramDirty(optInProgram && (!!telegramHandle.trim() || !!xAccountHandle.trim()));
  }, [optInProgram, telegramHandle, xAccountHandle]);

  const handleSaveProgram = () => {
    setOptInSuccess(true);
  };

  const handleOptOut = () => {
    setOptInProgram(false);
    setTelegramHandle('');
    setXAccountHandle('');
    setOptInSuccess(false);
  };

  return (
    <div className="bg-secondary p-8 rounded-2xl shadow-card relative z-10">
      <h3 className="text-xl font-semibold text-textPrimary mb-6">CRAFT Tipping Program</h3>
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
          Opt in to the CRAFT tipping program
        </label>
      </div>

      {optInProgram && (
        <>
          <div className="space-y-4 mt-4">
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

          {optInSuccess && (
            <div className="text-green-500 font-medium flex items-center space-x-2 mt-4">
              <Icon icon="mdi:check-circle" className="w-5 h-5" />
              <span>Opted in to tipping program</span>
            </div>
          )}

          <div className="flex items-center justify-start space-x-4 mt-6">
            <button
              onClick={handleSaveProgram}
              disabled={!isProgramDirty}
              className={`px-6 py-2 rounded-lg transition-all font-tomorrow ${
                isProgramDirty ? 'bg-accent text-textPrimary hover:bg-opacity-90' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
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
  );
};

export default TippingProgram;