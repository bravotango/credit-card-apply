import React, { useState } from 'react';
import { useGlobalContext } from '@/app/Context/store';
import strings from '../../strings.json';

const ReviewAndSubmit = () => {
  const { payload } = useGlobalContext();
  const [state] = useState(payload);
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
      </main>
    </div>
  );
};

export default ReviewAndSubmit;
