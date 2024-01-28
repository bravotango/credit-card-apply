'use client';
import React, { useState } from 'react';
import strings from '../strings.json';
import Payload from '../components/Payload';
import { useGlobalContext } from '../Context/store';

const Page = () => {
  const { setPayload } = useGlobalContext();
  const [legalFirstName, setLegalFirstName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [legalLastName, setLegalLastName] = useState('');

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the payload in the context
    setPayload((prevPayload) => ({
      ...prevPayload,
      legalName: {
        firstName: legalFirstName,
        middleInitial: middleInitial,
        lastName: legalLastName,
      },
    }));
  };

  return (
    <>
      <div className='banner stack'>
        <main>
          <h1>{strings.legalNameView.heading}</h1>
          <h2>{strings.legalNameView.subHeading}</h2>
          <form onSubmit={handleOnSubmit}>
            <div className='fields'>
              <label>
                {strings.legalNameView.labels.firstName}
                <input
                  required
                  type='text'
                  pattern='[A-Za-z]{1,}'
                  title={strings.legalNameView.validation.firstName}
                  value={legalFirstName}
                  onChange={(e) => setLegalFirstName(e.target.value)}
                />
              </label>
              <label>
                {strings.legalNameView.labels.middleInitial}
                <input
                  className='small'
                  maxLength={2}
                  type='text'
                  value={middleInitial}
                  onChange={(e) => {
                    setMiddleInitial(e.target.value);
                  }}
                />
              </label>
              <label>
                {strings.legalNameView.labels.lastName}
                <input
                  required
                  type='text'
                  value={legalLastName}
                  onChange={(e) => {
                    setLegalLastName(e.target.value);
                  }}
                />
              </label>
            </div>
            <button type='submit'>{strings.shared.button.next}</button>
          </form>
        </main>
      </div>

      <Payload />
    </>
  );
};

export default Page;
