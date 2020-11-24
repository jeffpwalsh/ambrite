import { indexOf } from 'lodash';
import React, { useState } from 'react';

import dataJson from '../data.json';

function ComponentChallenge1() {
  const [posts, setPosts] = useState([]);
  const [responseType, setResponseType] = useState('');
  const [contentType, setContentType] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');
  const [toggleOn, setToggleOn] = useState(false);
  const [arrErrors, setArrErrors] = useState([]);
  const handleFetch = async () => {
    // const response = await fetch(
    //   '../../public/data.json'
    // );
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://ambrite.ch/challenge/geo.json'
    );
    const response2 = await fetch(
      'https://cors-anywhere.herokuapp.com/https://ambrite.ch/challenge/data.json'
    );

    // const data = dataJson
    const data = await response.json();
    const data2 = await response2.json();

    const arr1 = data;
    const arr2 = data2;
    const arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));
    // console.log(response);
    // console.log(response2);
    setResponseType(response.type === response2.type ? response.type : 'error');
    setContentType(
      response.headers.get('Content-Type') ===
        response2.headers.get('Content-Type')
        ? response.headers.get('Content-Type')
        : 'error'
    );
    setFetchStatus(
      response.status === response2.status ? response.status : 'error'
    );

    setToggleOn(true);
    console.log(contentType);
    setPosts(arr3);
    console.log(arr3);

    const dataType = arr3.map((item) => item);
    console.log(dataType.length);

    // data.forEach((item) => {
    //   if (
    //     typeof item.active === 'number' &&
    //     typeof item.asn === 'number' &&
    //     typeof item.id === 'number' &&
    //     typeof item.countrycode === 'string' &&
    //     typeof item.statecode === 'object'
    //   ) {
    //     console.log('data type is correct');
    //   } else if (item.statecode === 'null') {
    //     console.log('datatype is null');
    //   }
    // });

    for (let i = 0; i < dataType.length; i++) {
      if (
        ((typeof dataType[i].active === 'number' &&
          dataType[i].active.length !== 0) ||
          dataType[i].active == null) &&
        ((typeof dataType[i].asn === 'number' &&
          dataType[i].asn.length !== 0) ||
          dataType[i].asn == null) &&
        ((typeof dataType[i].geo === 'string' &&
          dataType[i].geo.length !== 0) ||
          dataType[i].geo == null) &&
        ((typeof dataType[i].ipv4 === 'string' &&
          dataType[i].ipv4.length !== 0) ||
          dataType[i].ipv4 == null) &&
        ((typeof dataType[i].countrycode === 'string' &&
          dataType[i].countrycode.length !== 0) ||
          dataType[i].countrycode == null) &&
        ((typeof dataType[i].statecode === 'string' &&
          dataType[i].statecode.length !== 0) ||
          dataType[i].statecode == null) &&
        ((typeof dataType[i].id === 'number' && dataType[i].id.length !== 0) ||
          dataType[i].id == null)
      ) {
        console.log(`Array Object Index ${i} : All data types are correct`);
      } else {
        arrErrors.push(dataType[i]);
        console.log(`Array Object Index ${i} : All data types are not correct`);
      }
    }
    console.log(arrErrors);
  };

  return (
    <div>
      <button onClick={handleFetch}>Continue</button>
      <br />
      <hr />
      <div className={toggleOn ? 'Visible' : 'Hidden'}>
        <h3>
          Checking Response Type: <span className='type'>{responseType}</span>{' '}
          <span className='validator'>
            {responseType === 'cors' ? 'Check server proxy port' : 'Valid'}
          </span>
        </h3>
        <hr />
        <h3>
          Checking Content Type: <span className='type'>{contentType}</span>{' '}
          <span className='validator'>
            {contentType === 'application/json' ? 'Valid' : 'Invalid'}
          </span>
        </h3>
        <hr />
        <h3>
          Checking Status Code: <span className='type'>{fetchStatus}</span>{' '}
          <span className='validator'>
            {' '}
            {fetchStatus === 200 ? 'Valid' : 'Invalid'}
          </span>
        </h3>
        <hr />
        {/* <h3>
          Checking Data Types:{' '}
          <span className=''>
            {arrErrors.map((item) => (
              <li key={item.id}>
               ID  - {item.id} :  Active - {item.active} : ASN - {item.asn} : Country Code - {item.countrycode} : State Code - {' '}
                {item.statecode} : Geo -  {item.geo}
              </li>
            ))}
          </span>
        </h3> */}
        <h3>Checking Data Types for Errors</h3>
        <div className="table">
        <table border='2'>
          <tbody>
            <tr>
              <th>Err Index</th>
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
export default ComponentChallenge1;
