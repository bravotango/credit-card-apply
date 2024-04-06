'use client';
import React, { useState } from 'react';
import Wizard from '../components/wizard';
import GlobalState from '../components/DisplayStore';
import {
  Address,
  Congratulations,
  DateOfBirth,
  LegalName,
  ReviewAndSubmit,
} from './components';
import { WizardStepTitle } from '../models';

const Page: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WizardStepTitle>(
    WizardStepTitle.LegalName
  );

  const wizardSteps: WizardStepTitle[] = [
    WizardStepTitle.LegalName,
    WizardStepTitle.DateOfBirth,
    WizardStepTitle.Address,
    WizardStepTitle.ReviewAndSubmit,
    WizardStepTitle.Congratulations,
  ];

  const handleStepChange = (newStep: WizardStepTitle): void => {
    setCurrentStep(newStep);
  };

  return (
    <>
      <div className='banner'>
        <Wizard
          currentStep={currentStep}
          stepOrder={wizardSteps}
          components={{
            [WizardStepTitle.LegalName]: <LegalName />,
            [WizardStepTitle.DateOfBirth]: <DateOfBirth />,
            [WizardStepTitle.Address]: <Address />,
            [WizardStepTitle.ReviewAndSubmit]: <ReviewAndSubmit />,
            [WizardStepTitle.Congratulations]: <Congratulations />,
          }}
          onStepChange={handleStepChange}
        />
      </div>
      <GlobalState />
    </>
  );
};

export default Page;
