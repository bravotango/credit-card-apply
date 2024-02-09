'use client';
import React, { useState } from 'react';
import { TransitionDirection, WizardStep } from '../models';
import { useGlobalContext } from '../Context/store';

import Link from 'next/link';

type WizardProps = {
  currentStep: WizardStep;
  components: Record<WizardStep, React.ReactNode>;
  onStepChange: (newStep: WizardStep) => void;
};

const Wizard: React.FC<WizardProps> = ({
  currentStep,
  components,
  onStepChange,
}) => {
  const { setWizard } = useGlobalContext();
  const [transitionDirection, setTransitionDirection] = useState<
    string | undefined
  >(undefined);
  const displayComponent = () => {
    switch (currentStep) {
      case WizardStep.LegalName:
        return components[WizardStep.LegalName];
      case WizardStep.Address:
        return components[WizardStep.Address];
      case WizardStep.DateOfBirth:
        return components[WizardStep.DateOfBirth];
      case WizardStep.ReviewAndSubmit:
        return components[WizardStep.ReviewAndSubmit];
      default:
        return null;
    }
  };
  const goBack = (): void => {
    const previousStep = (): WizardStep => {
      switch (currentStep) {
        case WizardStep.LegalName:
          return WizardStep.LegalName;
        case WizardStep.DateOfBirth:
          return WizardStep.LegalName;
        case WizardStep.Address:
          return WizardStep.DateOfBirth;
        case WizardStep.ReviewAndSubmit:
          return WizardStep.Address;
        default:
          return WizardStep.LegalName;
      }
    };
    onStepChange(previousStep());
    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: previousStep(),
      transitionDirection: TransitionDirection.SlideRight,
    }));
    setTransitionDirection(TransitionDirection.SlideRight);
  };

  const goForward = (): void => {
    const nextStep = (): WizardStep => {
      switch (currentStep) {
        case WizardStep.LegalName:
          return WizardStep.DateOfBirth;
        case WizardStep.DateOfBirth:
          return WizardStep.Address;
        case WizardStep.Address:
          return WizardStep.ReviewAndSubmit;
        case WizardStep.ReviewAndSubmit:
          return WizardStep.ReviewAndSubmit;
        default:
          return WizardStep.LegalName;
      }
    };
    onStepChange(nextStep());
    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: nextStep(),
      transitionDirection: TransitionDirection.SlideLeft,
    }));
    setTransitionDirection(TransitionDirection.SlideLeft);
  };

  const onAnimationEnd = (): void => {
    setTransitionDirection(undefined);
  };

  return (
    <div
      className={`wizard-container ${transitionDirection}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className='wizard-content'>
        <button onClick={goBack}>Back</button>
        {displayComponent()}
        <button onClick={goForward}>Forward</button>
      </div>
    </div>
  );
};

export default Wizard;
