import { indexOf } from 'lodash';
import React, { useState } from 'react';

import dataJson from '../data.json';

function ComponentChallenge1() {
  const [posts, setPosts] = useState([]);
  const [responseType, setResponseType] = useState('');
  const [contentType, setContentType] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');
  const [toggleOn, setToggleOn] = useState(false);

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

    const qty = arr3.map((item) => item);
    console.log(qty.length);

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

    const arrErrors = [];

    for (let i = 0; i < qty.length; i++) {
if (

      ((typeof qty[i].active === 'number' && qty[i].active !== 0) || qty[i].active === null) && 
      ((typeof qty[i].active === 'number' && qty[i].active !== 0) || qty[i].active === null)
){}
      console.log(`Array Object Index ${i} : All data types are correct`);
    } else {
        arrErrors.push(qty[i])
        console.log(`Array Object Index ${i} : All data types are not correct`);
  };

  //   console.log(`Array Object Index ${i} : All data types are correct`);
  // } else {
  //   arrErrors.push(qty[i])
  //   console.log(`Array Object Index ${i} : All data types are not correct`);

  // }}
  console.log(arrErrors);

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
      </div>

      {posts.map((item) => (
        <li key={item.id}>
          {item.active} - {item.asn} - {item.id} - {item.countrycode} -{' '}
          {item.statecode}
        </li>
      ))}
    </div>
  );
}

export default ComponentChallenge1;
