import { includes } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';

function ComponentChallenge3() {
  const handleTask = () => {
    
    console.log(data);
    console.log(geo);

const arr2 = {}
const arr = [1,2,3]
const test = includes(arr, 1)
console.log(test)

// for (let i =0; i< test.legth; i++)

arr.map((item, index) => {

includes(item, 2)
console.log(item)
})
    
  };
  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>
      {/* {data.map(item => item)} */}
    </div>
  );
}

export default ComponentChallenge3;
