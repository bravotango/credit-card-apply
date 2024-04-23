'use client';

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';

import {
  Payload,
  StepState,
  TransitionDirection,
  Wizard,
  WizardStepTitle,
} from '../models';

interface ContextProps {
  payload: Payload;
  setPayload: Dispatch<SetStateAction<Payload>>;
  wizard: Wizard;
  setWizard: Dispatch<SetStateAction<Wizard>>;
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
    address: '',
    dateOfBirth: '',
  };
  const initWizard: Wizard = {
    steps: [
      {
        state: StepState.NotStarted,
        title: WizardStepTitle.LegalName,
        isFirstStep: true,
      },
      {
        state: StepState.NotStarted,
        title: WizardStepTitle.DateOfBirth,
        isFirstStep: false,
      },
      {
        state: StepState.NotStarted,
        title: WizardStepTitle.Address,
        isFirstStep: false,
      },
      {
        state: StepState.NotStarted,
        title: WizardStepTitle.ReviewAndSubmit,
        isFirstStep: false,
      },
      {
        state: StepState.NotStarted,
        title: WizardStepTitle.Congratulations,
        isFirstStep: false,
      },
    ],
    isComplete: false,
    isCloseModalOpen: false,
    currentStep: WizardStepTitle.LegalName,
    transitionDirection: TransitionDirection.SlideRight,
  };

  const [payload, setPayload] = useState<Payload>(initPayload);
  const [wizard, setWizard] = useState<Wizard>(initWizard);

  return (
    <GlobalContext.Provider value={{ payload, setPayload, wizard, setWizard }}>
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
