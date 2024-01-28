'use client';

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';
import { Payload } from '../models';

interface ContextProps {
  payload: {
    legalName: {
      firstName: string;
      middleInitial: string;
      lastName: string;
    };
  };
  setPayload: Dispatch<SetStateAction<Payload>>;
}

const GlobalContext = createContext<ContextProps | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const initPayload: Payload = {
    legalName: {
      firstName: '',
      lastName: '',
      middleInitial: '',
    },
  };
  const [payload, setPayload] = useState<Payload>(initPayload);

  return (
    <GlobalContext.Provider value={{ payload, setPayload }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = (): ContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );
  }
  return context;
};
