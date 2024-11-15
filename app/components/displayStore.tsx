import React from 'react';
import { useGlobalContext } from '../Context/store';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const DisplayStore = () => {
  const { payload, wizard } = useGlobalContext();
  const searchParams = useSearchParams();
  const showPayload = searchParams.get('noPayload') ?? true;
  const showSteps = searchParams.get('noSteps') ?? true;

  return (
    <Suspense>
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
    </Suspense>
  );
};

export default DisplayStore;
