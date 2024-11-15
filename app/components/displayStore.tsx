import React from 'react';
import { useGlobalContext } from '../Context/store';
import { useSearchParams } from 'next/navigation';

const DisplayStore = () => {
  const { payload, wizard } = useGlobalContext();
  const searchParams = useSearchParams(); // Get the search parameters
  const showPayload = searchParams.get('payload') !== '0'; // Check if the logo query parameter is not 0
  const showSteps = searchParams.get('steps') !== '0'; // Check if the logo query parameter is not 0

  return (
    <>
      {showPayload && (
        <code className='code-container'>
          Payload:{JSON.stringify(payload, null, 2)}
        </code>
      )}
      {showSteps && (
        <code className='code-container'>
          Wizard:{JSON.stringify(wizard, null, 2)}
        </code>
      )}
    </>
  );
};

export default DisplayStore;
