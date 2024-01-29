'use client';
import React from 'react';
import './styles.css';
import { WizardSteps } from '../models';
import LegalName from './components/LegalName';
import Address from './components/Address';
import DateOfBirth from './components/DateOfBirth';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import { useGlobalContext } from '../Context/store';
import GlobalState from '../components/GlobalState'; // Assuming this is the correct import path

interface WizardProps {
  currentStep: WizardSteps;
}

const Wizard: React.FC<WizardProps> = () => {
  const { wizard } = useGlobalContext();
  const currentStep = wizard.currentStep;

  const displayComponent = () => {
    switch (currentStep) {
      case WizardSteps.LegalName:
        return <LegalName />;
      case WizardSteps.Address:
        return <Address />;
      case WizardSteps.DateOfBirth:
        return <DateOfBirth />;
      case WizardSteps.ReviewAndSubmit:
        return <ReviewAndSubmit />;
      default:
        // Bruh - why are you here?
        return null;
    }
  };

  return (
    <>
      {displayComponent()}
      <GlobalState />
    </>
  );
};

export default Wizard;
