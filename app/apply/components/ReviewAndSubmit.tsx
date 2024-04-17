import React, { useState } from 'react';
import { useGlobalContext } from '../../Context/store';
import { StepState, WizardStepTitle } from '@/app/models';
import strings from '../../strings.json';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewAndSubmit = () => {
  const { payload, setWizard, wizard } = useGlobalContext();
  const [state] = useState(payload);

  const getStepByWizardStepTitle = (title: WizardStepTitle) => {
    const theStep = wizard.steps.find((step) => step.title === title);
    return theStep;
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWizard((prevWizard) => ({
      ...prevWizard,
      steps: prevWizard.steps.map((step) =>
        step.title === WizardStepTitle.ReviewAndSubmit
          ? { ...step, state: StepState.Complete }
          : step
      ),
    }));
  };

  const card = (title: WizardStepTitle) => {
    const step = getStepByWizardStepTitle(title);
    const stateCssClass =
      step?.state === StepState.Complete ? 'success' : 'error';
    return step ? (
      <div className={`card ${stateCssClass}`}>
        <span className='heading'>
          <FaCheckCircle className='icon' />
          {step.title}
        </span>
      </div>
    ) : null;
  };

  return (
    <div className='stack'>
      <main className='review'>
        <h1>{strings.ReviewAndSubmit.Heading}</h1>
        <h2>Please review your information.</h2>
        <div className='cards'>
          {card(WizardStepTitle.LegalName)}
          {card(WizardStepTitle.DateOfBirth)}
          {card(WizardStepTitle.Address)}
          <form onSubmit={handleOnSubmit}>
            <button type='submit'>{strings.Shared.Button.Submit}</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ReviewAndSubmit;
