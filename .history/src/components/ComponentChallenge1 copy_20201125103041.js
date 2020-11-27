import { includes } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';


function ComponentChallenge3() {
  const [posts, setPosts] = useState([]);
  
  
  const handleTask = () => {
    
    console.log(data);
    console.log(geo);


    const Meta = data.map((map) => map);
    console.log(Meta);
    const Meta2 = Object.entries(Meta);
    console.log(Meta2);


    const metaData = data.map((map) => map.meta);
    console.log(metaData);
    const metaData2 = Object.entries(metaData);
    console.log(metaData2);

    const ipv4Data = geo.map((ipv4) => ipv4.ipv4);
    console.log(ipv4Data);
    const ipv4Data2 = Object.entries(ipv4Data);
    console.log(ipv4Data2);

    let newArray = [];

    for (let i = 0; i < geo.length; i++) {
      for (let j = 0; j < metaData.length; j++)
        if (metaData2[j][1].includes(ipv4Data2[i][1])) {
          newArray.push(Meta[j]);
          // console.log(
          //   `True @ metData index ${metaData2[j]} : ipv4 index ${ipv4Data2[i]} `
          // );
        } else {
          // console.log(
          //   `Negative @ metData index ${metaData2[j]} ||000000|| ipv4 index ${ipv4Data2[i]} `
          // );
        }
      console.log(`End of ${i} loop`);
    }

    console.log(newArray);
    const arr1 = data;
      const arr2 = geo;
      const arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

    console.log(`NEW REINDEXED ARRAY ${arr3}`)
  };
  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>
      {/* {data.map(item => item)} */}
    </div>
  );
}

export default ComponentChallenge3;
