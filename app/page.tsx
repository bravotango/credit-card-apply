import React from 'react';
import strings from './strings.json';
import Link from 'next/link';

const page = () => {
  return (
    <div className='banner'>
      <main className='container stack'>
        <h1>{strings.getStartedView.heading}</h1>
        <h2>{strings.getStartedView.subHeading}</h2>
        <Link href='./apply' className='button'>
          {strings.getStartedView.buttonText}
        </Link>
      </main>
    </div>
  );
};

export default page;
