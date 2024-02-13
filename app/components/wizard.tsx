import React, { useState } from 'react';
import { TransitionDirection, WizardStep } from '../models';
import { useGlobalContext } from '../Context/store';

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
  const [transitionDirection, setTransitionDirection] =
    useState<TransitionDirection>(TransitionDirection.None);

  const handleStepChange = (
    newStep: WizardStep,
    direction: TransitionDirection
  ): void => {
    onStepChange(newStep);
    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: newStep,
      transitionDirection: direction,
    }));
    setTransitionDirection(direction);
  };

  const goBack = (): void => {
    const previousStep = (): WizardStep => {
      switch (currentStep) {
        case WizardStep.Address:
          return WizardStep.LegalName;
        case WizardStep.DateOfBirth:
          return WizardStep.Address;
        case WizardStep.ReviewAndSubmit:
          return WizardStep.DateOfBirth;
        case WizardStep.Congratulations:
          return WizardStep.Congratulations;
        default:
          return WizardStep.LegalName;
      }
    };
    handleStepChange(previousStep(), TransitionDirection.SlideRight);
  };

  const goForward = (): void => {
    const nextStep = (): WizardStep => {
      switch (currentStep) {
        case WizardStep.LegalName:
          return WizardStep.DateOfBirth;
        case WizardStep.DateOfBirth:
          return WizardStep.Address;
        case WizardStep.DateOfBirth:
          return WizardStep.ReviewAndSubmit;
        case WizardStep.ReviewAndSubmit:
          return WizardStep.Congratulations;
        default:
          return WizardStep.LegalName;
      }
    };
    handleStepChange(nextStep(), TransitionDirection.SlideLeft);
  };

  const onAnimationEnd = (): void => {
    setTransitionDirection(TransitionDirection.None);
  };

  return (
    <div
      className={`wizard-container ${transitionDirection}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className='wizard-content'>
        <button onClick={goBack}>Back</button>
        {components[currentStep]}
        <button onClick={goForward}>Forward</button>
      </div>
    </div>
  );
};

export default Wizard;
