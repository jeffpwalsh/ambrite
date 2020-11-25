import React from 'react';

import C3 from './ComponentChallenge3'

function Page3() {
  return (
    <div className='challenge-header'>
      <h1>C3</h1>
      <p>
        Write a function that takes two arrays of objects as parameters, and
        returns a single array containing the union of the two arrays. <br />
        The input object can be found in p3Data.json
      
      </p>
      <C3 />
    </div>
  );
}

export default Page3;
