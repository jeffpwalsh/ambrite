import { includes } from 'lodash';
import React, { useState } from 'react';
import C2 from './ComponentChallenge2';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';

function DataFetch(props) {
  const [posts, setPosts] = useState([]);
  const [arr1, setArr1] = useState([])
  const [arr2, setArr2] = useState([])
  const [arr3, setArr3] = useState([])
  const [responseType, setResponseType] = useState('');
  const [contentType, setContentType] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');
  const [toggleOn, setToggleOn] = useState(false);
  const [arrErrors, setArrErrors] = useState([]);
  const [parseTest, setParseTest] = useState(false);
  const [ipv4Data2, setIpv4Data2] = useState([]);

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
    setArr1(newArray)
    setArr2(geo)
    setArr3(arr1.map((item, i) => Object.assign({}, item, arr2[i])));

    setPosts(arr1.map(item => item));
    console.log(arr3);
    const dataType = arr3.map((item) => item);
    console.log(dataType.length);
  };
  return (
    <div>
      <h1>DataFetch Component</h1>
      <C2 data={setArr3} />
    </div>
  );
}

export default DataFetch;
