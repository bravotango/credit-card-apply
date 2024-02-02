'use client';
import './styles.css';
import { TransitionDirection, WizardStep } from '../models';
import { Address, DateOfBirth, LegalName, ReviewAndSubmit } from './components';
import { useGlobalContext } from '../Context/store';
import GlobalState from '../components/GlobalState';
import Link from 'next/link';

const Wizard: React.FC = () => {
  const { wizard, setWizard } = useGlobalContext();
  const { currentStep, transitionDirection } = wizard;

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

    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: previousStep(),
      transitionDirection: TransitionDirection.SlideRight,
    }));
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

    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: nextStep(),
      transitionDirection: TransitionDirection.SlideLeft,
    }));
  };

  const onAnimationEnd = (): void => {
    transitionDirection: TransitionDirection.None;
  };

  return (
    <div
      className={`wizard-container ${transitionDirection}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className='wizard-content'>
        <Link href='#' onClick={goBack}>
          Back
        </Link>
        {displayComponent()}
        <button onClick={goForward}>Next</button>
        <GlobalState />
      </div>
    </div>
  );
};

export default Wizard;
