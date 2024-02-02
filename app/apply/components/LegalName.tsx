'use client';
import React, { useState } from 'react';
import strings from '../../strings.json';
import { useGlobalContext } from '../../Context/store';
import { StepState, WizardStep } from '@/app/models';
const LegalName = () => {
  const { payload, setPayload, setWizard } = useGlobalContext();
  const [legalFirstName, setLegalFirstName] = useState(
    payload.legalName.firstName
  );
  const [middleInitial, setMiddleInitial] = useState(
    payload.legalName.middleInitial
  );
  const [legalLastName, setLegalLastName] = useState(
    payload.legalName.lastName
  );

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPayload((prevPayload) => ({
      ...prevPayload,
      legalName: {
        firstName: legalFirstName,
        middleInitial: middleInitial,
        lastName: legalLastName,
      },
    }));

    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: WizardStep.DateOfBirth,
      steps: [
        {
          ...prevWizard.steps[0],
          state: StepState.Complete,
        },
        ...prevWizard.steps.slice(1),
      ],
    }));
  };

  return (
    <div className='banner stack'>
      <main>
        <h1>{strings.LegalName.Heading}</h1>
        <h2>{strings.LegalName.SubHeading}</h2>
        <form onSubmit={handleOnSubmit}>
          <div className='legalName'>
            <label className='a'>
              {strings.LegalName.Label.FirstName}
              <input
                required
                type='text'
                pattern='[A-Za-z]{1,}'
                title={strings.LegalName.Validation.FirstName}
                value={legalFirstName}
                onChange={(e) => setLegalFirstName(e.target.value)}
              />
            </label>
            <label className='b'>
              {strings.LegalName.Label.MiddleInitial}
              <input
                className='small'
                maxLength={1}
                pattern='[A-Za-z]{1,}'
                type='text'
                value={middleInitial}
                onChange={(e) => {
                  setMiddleInitial(e.target.value);
                }}
              />
            </label>
            <label className='c'>
              {strings.LegalName.Label.LastName}
              <input
                required
                type='text'
                pattern='[A-Za-z]{1,}'
                value={legalLastName}
                onChange={(e) => {
                  setLegalLastName(e.target.value);
                }}
              />
            </label>
          </div>
          <button type='submit'>{strings.Shared.Button.Next}</button>
        </form>
      </main>
    </div>
  );
};

export default LegalName;
