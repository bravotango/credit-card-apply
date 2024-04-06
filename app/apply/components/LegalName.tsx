'use client';
import React, { useState } from 'react';
import strings from '../../strings.json';
import { useGlobalContext } from '../../Context/store';
import { StepState, WizardStepTitle } from '@/app/models';
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
      steps: prevWizard.steps.map((step) =>
        step.title === WizardStepTitle.LegalName
          ? { ...step, state: StepState.Complete }
          : step
      ),
    }));
  };

  return (
    <div className='stack'>
      <main>
        <h1>{strings.LegalName.Heading}</h1>
        <h2>{strings.LegalName.SubHeading}</h2>
        <form className='legalName' onSubmit={handleOnSubmit}>
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
          <button type='submit'>{strings.Shared.Button.Submit}</button>
        </form>
      </main>
    </div>
  );
};

export default LegalName;
