'use client';
import React, { Suspense } from 'react';
import strings from './strings.json';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PageContent = () => {
  const searchParams = useSearchParams();

  // Check if the parameters exist in the query string
  const noLogo = searchParams.has('noLogo');
  const noSteps = searchParams.has('noSteps');
  const noPayload = searchParams.has('noPayload');

  // Build the query string dynamically
  const queryString = [
    noLogo ? 'noLogo' : null,
    noSteps ? 'noSteps' : null,
    noPayload ? 'noPayload' : null,
  ]
    .filter(Boolean) // Remove null values
    .join('&');

  return (
    <main className='container stack'>
      <h1>{strings.GetStarted.Heading}</h1>
      <h2>{strings.GetStarted.SubHeading}</h2>
      <Link
        href={`/apply${queryString ? `?${queryString}` : ''}`}
        className='button'
      >
        {strings.GetStarted.ButtonText}
      </Link>
    </main>
  );
};

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </div>
  );
};

export default Page;
