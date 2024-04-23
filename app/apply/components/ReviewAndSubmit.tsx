import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../Context/store';
import { Step, StepState, WizardStepTitle } from '@/app/models';
import strings from '../../strings.json';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewAndSubmit = () => {
  const { payload, setWizard, wizard } = useGlobalContext();
  const [state, setState] = useState(payload);
  const [step, setStep] = useState<Step | null>(null);

  useEffect(() => {
    const stepData = getStepByWizardStepTitle(WizardStepTitle.LegalName);
    setStep(stepData);
  }, [wizard]); // Ensure useEffect runs when wizard changes

  const getStepByWizardStepTitle = (title: WizardStepTitle) => {
    console.log(`title ${title}`);
    const foundStep = wizard.steps.find((step) => step.title === title) || null;
    console.log(`found step: ${foundStep}`);
    return foundStep;
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
      <main>
        <h1>{strings.ReviewAndSubmit.Heading}</h1>
        <h2>{strings.ReviewAndSubmit.SubHeading}</h2>
        <div className='cards'>
          {step && (
            <div className='card'>
              <span className='heading'>
                <FaCheckCircle className='icon' />
              </span>
              <span className='keyValue'>
                <span>{strings.ReviewAndSubmit.Label.FirstName}</span>
                <span>{state.legalName.firstName}</span>

                <span>{strings.ReviewAndSubmit.Label.MI}</span>
                <span>{state.legalName.middleInitial}</span>

                <span>{strings.ReviewAndSubmit.Label.LastName}</span>
                <span>{state.legalName.lastName}</span>
              </span>
            </div>
          )}

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
