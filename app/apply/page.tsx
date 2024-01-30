'use client';
import React from 'react';
import './styles.css';
import { WizardStep } from '../models';
import LegalName from './components/LegalName';
import Address from './components/Address';
import DateOfBirth from './components/DateOfBirth';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import { useGlobalContext } from '../Context/store';
import GlobalState from '../components/GlobalState'; // Assuming this is the correct import path

interface WizardProps {
  currentStep: WizardStep;
}

const Wizard: React.FC<WizardProps> = () => {
  const { wizard, setWizard } = useGlobalContext();
  const currentStep = wizard.currentStep;

  const displayComponent = () => {
    switch (currentStep) {
      case WizardStep.LegalName:
        return <LegalName />;
      case WizardStep.Address:
        return <Address />;
      case WizardStep.DateOfBirth:
        return <DateOfBirth />;
      case WizardStep.ReviewAndSubmit:
        return <ReviewAndSubmit />;
      default:
        // Bruh - why are you here?
        return null;
    }
  };
  const goBack = (): void => {
    const previousStep = (): WizardStep => {
      switch (currentStep) {
        case WizardStep.LegalName:
          return WizardStep.LegalName;
        case WizardStep.Address:
          return WizardStep.LegalName;
        case WizardStep.DateOfBirth:
          return WizardStep.Address;
        case WizardStep.ReviewAndSubmit:
          return WizardStep.DateOfBirth;
        default:
          return WizardStep.LegalName;
      }
    };

    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: previousStep(),
    }));
  };

  return (
    <>
      <button onClick={goBack}>Back</button>
      {displayComponent()}
      <GlobalState />
    </>
  );
};

export default Wizard;
