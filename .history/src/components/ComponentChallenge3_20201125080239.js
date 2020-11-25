import { includes } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';

function ComponentChallenge3() {
  const handleTask = () => {
    console.log(data);
    console.log(geo);

    const arr2 = ["Port Melbourne ausregistry01.ring.nlnog.net 120.29.249.252 180 120.29.249.252"];
    const arr = [1, 2, 3];
    const test = includes(arr, 1);
    console.log(test);

    for (let i = 0; i < test.legth; i++) {
      if (arr[i] == arr2[i]) {
        console.log(`true ${i}`);
      } else {
        console.log(`false`);
      }
    }
  };
  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>
      {/* {data.map(item => item)} */}
    </div>
  );
}

export default ComponentChallenge3;
