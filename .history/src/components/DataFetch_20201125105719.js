import { includes } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';

function dataFetch() {
  const [posts, setPosts] = useState([]);
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
    const arr1 = newArray;
    const arr2 = geo;
    const arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

    setPosts(arr3);
    console.log(arr3);
    const dataType = arr3.map((item) => item);
    console.log(dataType.length);

   
  };
  return (
    <div>
      <button onClick={handleTask}>Continue</button>
      <br />
      <div className={toggleOn ? 'Visible' : 'Hidden'}>
        <h6>
          Checking Response Type: <span className='type'>{responseType}</span>{' '}
          <span className='validator'>
            {responseType === 'cors' ? 'Check server proxy port' : 'Valid'}
          </span>
        </h6>
        <hr />
        <h6>
          Checking Parsing of Data:{' '}
          <span className='validator'>
            {parseTest ? 'JSON parsed correctly / valid' : 'Not Valid'}
          </span>
        </h6>
        <hr />
        <h6>
          Checking Content Type: <span className='type'>{contentType}</span>{' '}
          <span className='validator'>
            {contentType === 'application/json' ? 'Valid' : 'Invalid'}
          </span>
        </h6>
        <hr />
        <h6>
          Checking Status Code: <span className='type'>{fetchStatus}</span>{' '}
          <span className='validator'>
            {' '}
            {fetchStatus === 200 ? 'Valid' : 'Invalid'}
          </span>
        </h6>
        <hr />

        <h6>
          Checking Data Types for Errors{' '}
          <span className='type'>
            Fields with no data or incorrect schema data types will display
          </span>{' '}
        </h6>
        <div className='table'>
          <table border='2'>
            <tbody>
              <tr>
                <th>Error Index</th>
                <th>ID</th>
                <th>Country</th>
                <th>State</th>
                <th>ASN</th>
                <th>Active</th>
                <th>Geo</th>
                <th>IP</th>
              </tr>
              {arrErrors.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.id}</td>
                  <td>{item.countrycode}</td>
                  <td>{item.statecode}</td>
                  <td>{item.asn}</td>
                  <td>{item.active === 1 ? 'Yes' : 'No'}</td>
                  <td>{item.geo}</td>
                  <td>{item.ipv4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default dataFetch;
