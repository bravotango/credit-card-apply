'use client';

import React, { Suspense } from 'react';
import { useGlobalContext } from '../Context/store';
import { useSearchParams } from 'next/navigation';

const DisplayStore = () => {
  const { payload, wizard } = useGlobalContext();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsComponent payload={payload} wizard={wizard} />
    </Suspense>
  );
};

const SearchParamsComponent = ({
  payload,
  wizard,
}: {
  payload: any;
  wizard: any;
}) => {
  const searchParams = useSearchParams();
  const showPayload = searchParams.get('payload') !== '0';
  const showSteps = searchParams.get('steps') !== '0';

  return (
    <>
      {showPayload && (
        <code className='code-container'>
          Payload: {JSON.stringify(payload, null, 2)}
        </code>
      )}
      {showSteps && (
        <code className='code-container'>
          Wizard: {JSON.stringify(wizard, null, 2)}
        </code>
      )}
    </>
  );
};

export default DisplayStore;
