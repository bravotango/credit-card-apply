import React from 'react';
import strings from './strings.json';
import Link from 'next/link';

const page = () => {
  return (
    <div className='banner'>
      <main className='container stack'>
        <h1>{strings.GetStarted.Heading}</h1>
        <h2>{strings.GetStarted.SubHeading}</h2>
        <Link href='./apply' className='button'>
          {strings.GetStarted.ButtonText}
        </Link>
      </main>
    </div>
  );
};

export default page;
