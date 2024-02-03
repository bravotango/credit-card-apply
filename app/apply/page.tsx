'use client';
import React, { useState } from 'react';
import './styles.css';
import Wizard from '../components/wizard';
import { LegalName, Address, DateOfBirth, ReviewAndSubmit } from './components';
import { WizardStep } from '../models';

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WizardStep>(
    WizardStep.LegalName
  );

  const wizardComponents: Record<WizardStep, React.ReactNode> = {
    [WizardStep.LegalName]: <LegalName />,
    [WizardStep.Address]: <Address />,
    [WizardStep.DateOfBirth]: <DateOfBirth />,
    [WizardStep.ReviewAndSubmit]: <ReviewAndSubmit />,
  };

  const handleStepChange = (newStep: WizardStep): void => {
    setCurrentStep(newStep);
  };

  return (
    <div>
      <Wizard
        currentStep={currentStep}
        components={wizardComponents}
        onStepChange={handleStepChange}
      />
      {/* You can add more child components here */}
    </div>
  );
};

export default Page;
