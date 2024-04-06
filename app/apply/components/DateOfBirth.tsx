'use client';
import React, { useState } from 'react';
import strings from '../../strings.json';
import { useGlobalContext } from '@/app/Context/store';
import { StepState, WizardStepTitle } from '@/app/models';
import { stringReplace } from '@/app/utils';

const DateOfBirth = () => {
  const { setPayload, setWizard, payload } = useGlobalContext();
  const [dateOfBirth, setDateOfBirth] = useState(payload.dateOfBirth);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPayload((prevPayload) => ({
      ...prevPayload,
      dateOfBirth: dateOfBirth,
    }));

    setWizard((prevWizard) => ({
      ...prevWizard,
      steps: prevWizard.steps.map((step) =>
        step.title === WizardStepTitle.DateOfBirth
          ? { ...step, state: StepState.Complete }
          : step
      ),
    }));
  };

  return (
    <div className='stack'>
      <main>
        <h1>
          {stringReplace(strings.DateOfBirth.Heading, {
            name: payload.legalName.firstName,
          })}
        </h1>
        <h2>{strings.DateOfBirth.SubHeading}</h2>
        <form onSubmit={handleOnSubmit}>
          <label>
            {strings.DateOfBirth.Label.Dob}
            <input
              type='date'
              required
              title={strings.DateOfBirth.Validation.Dob}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <button type='submit'>{strings.Shared.Button.Submit}</button>
        </form>
      </main>
    </div>
  );
};
export default DateOfBirth;
