import React, { useState } from 'react';

import C1 from './ComponentChallenge1';

function Page1() {
  return (
    <div className='challenge-header'>
      <h1>C1</h1>
      <p>
        Write a function that performs some validity checks on two JSON files,
        geo.json and data.json. <br />
        The page must display whether or not the given files/input are valid.
      </p>
      <C1 />
    </div>
  );
}

export default Page1;
