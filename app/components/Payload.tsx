import React from 'react';
import { useGlobalContext } from '../Context/store';

const Payload = () => {
  const { payload } = useGlobalContext();
  return (
    <code className='code-container'>
      Payload:{JSON.stringify(payload, null, 2)}
    </code>
  );
};

export default Payload;
