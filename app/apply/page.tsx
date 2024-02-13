'use client';
import React, { useState } from 'react';
import './styles.css';
import Wizard from '../components/wizard';
import GlobalState from '../components/displayStore';
import {
  Address,
  Congratulations,
  DateOfBirth,
  LegalName,
  ReviewAndSubmit,
} from './components';
import { WizardStep } from '../models';

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WizardStep>(
    WizardStep.LegalName
  );

  const wizardComponents: Record<WizardStep, React.ReactNode> = {
    [WizardStep.LegalName]: <LegalName />,
    [WizardStep.DateOfBirth]: <DateOfBirth />,
    [WizardStep.Address]: <Address />,
    [WizardStep.ReviewAndSubmit]: <ReviewAndSubmit />,
    [WizardStep.Congratulations]: <Congratulations />,
  };

  const handleStepChange = (newStep: WizardStep): void => {
    setCurrentStep(newStep);
  };

  return (
    <>
      <div className='banner'>
        <Wizard
          currentStep={currentStep}
          components={wizardComponents}
          onStepChange={handleStepChange}
        />
      </div>
      <GlobalState />
    </>
  );
};

export default Page;
