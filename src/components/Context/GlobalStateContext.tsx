// src/context/GlobalStateContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface BalanceType {
  usd: number;
  craft: number;
}

interface GlobalStateContextType {
  selectedIconUrl: string;
  setSelectedIconUrl: (url: string) => void;
  username: string;
  setUsername: (name: string) => void;
  // other properties
  balance: BalanceType;
  setBalance: (balance: BalanceType) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIconUrl, setSelectedIconUrl] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const [balance, setBalance] = useState<BalanceType>({ usd: 0, craft: 0 });

  return (
    <GlobalStateContext.Provider value={{ selectedIconUrl, setSelectedIconUrl, username, setUsername, balance, setBalance }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};


