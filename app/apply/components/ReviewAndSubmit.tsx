import React, { useState } from 'react';
import { useGlobalContext } from '../../Context/store';
import { StepState, WizardStep } from '@/app/models';
import strings from '../../strings.json';

const ReviewAndSubmit = () => {
  const { payload, setPayload, setWizard } = useGlobalContext();
  const [state] = useState(payload);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWizard((prevWizard) => ({
      ...prevWizard,
      steps: prevWizard.steps.map((step) =>
        step.title === WizardStep.ReviewAndSubmit
          ? { ...step, state: StepState.Complete }
          : step
      ),
    }));
  };

  return (
    <div className='stack'>
      <main>
        <p>
          {strings.LegalName.Label.FirstName}: {state.legalName.firstName}
        </p>
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
        <form onSubmit={handleOnSubmit}>
          <button type='submit'>{strings.Shared.Button.Submit}</button>
        </form>
      </main>
    </div>
  );
};

export default ReviewAndSubmit;
