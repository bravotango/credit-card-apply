'use client';
import React, { useState } from 'react';
import strings from '../../strings.json';
import { stringReplace } from '../../utils';
import { useGlobalContext } from '../../Context/store';

const Address = () => {
  const { setPayload, setWizard, payload, wizard } = useGlobalContext();
  const addressHeading = stringReplace(strings.addressView.heading, {
    name: payload.legalName.firstName,
    // Add more placeholders and their corresponding values as needed
  });

  const handleOnSubmit = () => {};
  const [address, setAddress] = useState('');
  return (
    <>
      <div className='banner stack'>
        <main>
          <h1>{addressHeading}</h1>
          <h2>{strings.addressView.subHeading}</h2>
          <form onSubmit={handleOnSubmit}>
            <label>
              {strings.addressView.labels.residentialAddress}
              <input
                required
                type='text'
                pattern='[A-Za-z0-9]{1,}'
                title={strings.legalNameView.validation.firstName}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            {address}
          </form>
        </main>
      </div>
    </>
  );
};

export default Address;
