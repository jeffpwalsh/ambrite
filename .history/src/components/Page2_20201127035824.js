import React from 'react';
import C2 from './ComponentChallenge2';

function Page2() {
  return (
    <div className='challenge-header'>
      <h1>C2</h1>
      <p>
        Write a function that takes in latitude and longitude as parameters, and
        returns a sorted list of the 10 rows from data.json with the shortest
        distance from the latitude and longitude, in a nicely formatted table.
      </p>
      <C2 />
    </div>
  );
}

export default Page2;
