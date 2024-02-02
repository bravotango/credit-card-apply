'use client';
import React, { useState } from 'react';
import strings from '../../strings.json';
import { stringReplace } from '../../utils';
import { useGlobalContext } from '../../Context/store';
import { StepState, WizardStep } from '@/app/models';

const Address = () => {
  const { setPayload, setWizard, payload } = useGlobalContext();
  const [address, setAddress] = useState(payload.address);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPayload((prevPayload) => ({
      ...prevPayload,
      address: address,
    }));

    setWizard((prevWizard) => ({
      ...prevWizard,
      currentStep: WizardStep.Address,
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
    <>
      <div className='banner stack'>
        <main>
          <h1>
            {stringReplace(strings.Address.Heading, {
              name: payload.legalName.firstName,
            })}
          </h1>
          <h2>{strings.Address.SubHeading}</h2>
          <form onSubmit={handleOnSubmit}>
            <label>
              {strings.Address.Label.ResidentialAddress}
              <input
                required
                type='text'
                pattern='[A-Za-z0-9]{1,}'
                title={strings.LegalName.Validation.FirstName}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <button type='submit'>{strings.Shared.Button.Next}</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Address;
