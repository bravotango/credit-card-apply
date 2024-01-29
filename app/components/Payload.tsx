import React from 'react';
import { useGlobalContext } from '../Context/store';

const Payload = () => {
  const { payload, wizard } = useGlobalContext();
  return (
    <>
      <code className='code-container'>
        Payload:{JSON.stringify(payload, null, 2)}
      </code>
      <code className='code-container'>
        Wizard:{JSON.stringify(wizard, null, 2)}
      </code>
    </>
  );
};

export default Payload;
