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

  return (
    <div className='stack'>
      <main className='review'>
        <h1>You are ready to qualify.</h1>
        <h2>Please review your information.</h2>
        <div className='cards'>
          <div className='card'>
            <p>
              <span className='heading'>
                <FaCheckCircle className='icon' />
              </span>
              <span className='keyValue'>
                <span>{strings.ReviewAndSubmit.Label.FirstName}</span>
                <span>{state.legalName.firstName}</span>
                {state.legalName.middleInitial && (
                  <span>
                    {strings.ReviewAndSubmit.Label.MI}
                    <span>{state.legalName.middleInitial}</span>
                  </span>
                )}
                <span>{strings.ReviewAndSubmit.Label.LastName}</span>
                <span>{state.legalName.lastName}</span>
              </span>
            </p>
          </div>

          <div className='card'>
            <p>
              <span className='heading'>
                <FaCheckCircle className='icon' />
              </span>
              <span className='keyValue'>
                <span>{strings.DateOfBirth.Label.Dob}</span>
                <span>{state.dateOfBirth}</span>
              </span>
            </p>
          </div>

          <div className='card'>
            <p>
              <span className='heading'>
                <FaCheckCircle className='icon' />
              </span>
              <span className='keyValue'>
                <span>{strings.Address.Label.ResidentialAddress}</span>
                <span>{state.address}</span>
              </span>
            </p>
          </div>

          <form onSubmit={handleOnSubmit}>
            <button type='submit'>{strings.Shared.Button.Apply}</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ReviewAndSubmit;
