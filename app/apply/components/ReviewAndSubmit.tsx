import React, { useState } from 'react';
import { useGlobalContext } from '../../Context/store';
import { StepState, WizardStepTitle } from '@/app/models';
import strings from '../../strings.json';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewAndSubmit = () => {
  const { payload, setWizard, wizard } = useGlobalContext();
  const [state] = useState(payload);

  const getStepByWizardStepTitle = (title: WizardStepTitle) => {
    const theStep = wizard.steps.find((step) => {
      return step.title === title;
    });
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
      <p className={`card ${stateCssClass}`}>
        <span className='heading'>
          <FaCheckCircle className='icon' />
          {step.title}
        </span>
        <span className='keyValue'>
          <span>First name</span>
          <span>{state.legalName.firstName}</span>
          <span>MI</span>
          <span>{state.legalName.middleInitial}</span>
          <span>Last name - strings</span>
          <span>{state.legalName.lastName}</span>
        </span>
      </p>
    ) : (
      <></>
    );
  };

  return (
    <div className='stack'>
      <main className='review'>
        <h1>You are ready to qualify.</h1>
        <h2>Please review your information.</h2>
        <div className='cards'>
          {card(WizardStepTitle.LegalName)}

          <p>
            {strings.LegalName.Label.LastName}: {state.legalName.lastName}
          </p>
          <p>
            {strings.LegalName.Label.MiddleInitial}:
            {state.legalName.middleInitial}
          </p>
          <p>
            {strings.Address.Label.ResidentialAddress}: {state.address}
          </p>
          <p>
            {strings.DateOfBirth.Label.Dob}: {state.dateOfBirth}
          </p>
        </div>
        <form onSubmit={handleOnSubmit}>
          <button type='submit'>{strings.Shared.Button.Submit}</button>
        </form>
      </main>
    </div>
  );
};

export default ReviewAndSubmit;
