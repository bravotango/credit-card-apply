import React from 'react';

const ReviewAndSubmit = () => {
  return (
    <>
      <div className='banner stack'>
        <main>
          <div className='container'>
            <h2>Personal Information</h2>
            <div className='row'>
              <label htmlFor='firstName'>First Name:</label>
              <span id='firstName'>John</span>
            </div>
            <div className='row'>
              <label htmlFor='lastName'>Last Name:</label>
              <span id='lastName'>Doe</span>
            </div>
            <div className='row'>
              <label htmlFor='middleInitial'>Middle Initial:</label>
              <span id='middleInitial'>M</span>
            </div>
          </div>
          <div className='container'>
            <h2>Address</h2>
            <div className='row'>
              <label htmlFor='address'>Address:</label>
              <span id='address'>123 Main St</span>
            </div>
            <div className='row'>
              <label htmlFor='city'>City:</label>
              <span id='city'>Anytown</span>
            </div>
            <div className='row'>
              <label htmlFor='state'>State:</label>
              <span id='state'>CA</span>
            </div>
            <div className='row'>
              <label htmlFor='zipcode'>Zip Code:</label>
              <span id='zipcode'>12345</span>
            </div>
          </div>
          <div className='container'>
            <h2>Date of Birth</h2>
            <div className='row'>
              <label htmlFor='dob'>Date of Birth:</label>
              <span id='dob'>01/01/1990</span>
            </div>
          </div>
          <div className='container'>
            <h2>Other Information</h2>
            <div className='row'>
              <label htmlFor='ssn'>Social Security Number:</label>
              <span id='ssn'>123-45-6789</span>
            </div>
            <div className='row'>
              <label htmlFor='income'>Income:</label>
              <span id='income'>$50,000</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ReviewAndSubmit;
