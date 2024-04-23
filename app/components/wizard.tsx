import React, { useState } from 'react';
import { TransitionDirection, WizardStepTitle } from '../models';
import { useGlobalContext } from '../Context/store';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type WizardProps = {
  currentStep: WizardStepTitle;
  stepOrder: WizardStepTitle[];
  components: Record<WizardStepTitle, React.ReactNode>;
  onStepChange: (newStep: WizardStepTitle) => void;
};

const Wizard: React.FC<WizardProps> = ({
  currentStep,
  stepOrder,
  components,
  onStepChange,
}) => {
  const { setWizard } = useGlobalContext();
  const [transitionDirection, setTransitionDirection] =
    useState<TransitionDirection>(TransitionDirection.None);

  const handleStepChange = (
    newStep: WizardStepTitle,
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
    const currentIndex = stepOrder.indexOf(currentStep);
    const previousStep =
      currentIndex > 0 ? stepOrder[currentIndex - 1] : currentStep;
    currentStep !== previousStep &&
      handleStepChange(previousStep, TransitionDirection.SlideRight);
  };

  const goForward = (): void => {
    const currentIndex = stepOrder.indexOf(currentStep);
    const nextStep =
      currentIndex < stepOrder.length - 1
        ? stepOrder[currentIndex + 1]
        : currentStep;
    currentStep !== nextStep &&
      handleStepChange(nextStep, TransitionDirection.SlideLeft);
  };

  const onAnimationEnd = (): void => {
    setTransitionDirection(TransitionDirection.None);
  };
  const isFirstStep = stepOrder.indexOf(currentStep) === 0;
  const isLastStep = stepOrder.indexOf(currentStep) === stepOrder.length - 1;
  return (
    <div
      className={`wizard-container ${transitionDirection}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div>
        <div>
          {
            <button onClick={goBack} disabled={isFirstStep}>
              <FaArrowLeft /> Back
            </button>
          }
        </div>
        <div>{components[currentStep]}</div>
        <div>
          {
            <button
              onClick={goForward}
              disabled={stepOrder.indexOf(currentStep) === stepOrder.length - 1}
            >
              Forward <FaArrowRight />
            </button>
          }
        </div>
      </div>
      <div className='step-indicator'>
        {/* Step Indicator */}
        {stepOrder.map((step, index) => (
          <div
            key={step}
            className={`step ${currentStep === step ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wizard;
