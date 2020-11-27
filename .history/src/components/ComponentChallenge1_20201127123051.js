import React, { useState, useEffect, useContext } from 'react';
import { DATA_SET } from '../App';
import { Button, Table } from 'reactstrap';

function ComponentChallenge1COPY() {
  // ========== GLOBAL STATE FROM CONTEXT API
  const dataSet = useContext(DATA_SET);

  // ========== LOCAL STATE
  const [responseType, setResponseType] = useState('');
  const [contentType, setContentType] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');
  const [toggleOn, setToggleOn] = useState(false);
  const [arrErrors, setArrErrors] = useState([]);
  const [parseTest, setParseTest] = useState(false);

  //============ GET REQUEST
  //I DECIDED TO ADDITIONALLY DO A FETCH REQUEST AND VALIDATE THE RESPONSE OBJECT.
  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://ambrite.ch/challenge/geo.json'
      );
      const response2 = await fetch(
        'https://cors-anywhere.herokuapp.com/https://ambrite.ch/challenge/data.json'
      );
      //============ CONVERTS TO TEXT FOR A JSON PARSE TEST
      const text = await response.text();
      const text2 = await response2.text();

      //============ VALIDATING JSON DATA /PARSING
      const data = JSON.parse(text);
      const data2 = JSON.parse(text2);

      //=========== CONFIRMING DATA LOADED
      setParseTest(
        data.length > 0
          ? true
          : console.log('Non valid JSON/TEXT file received')
      );

      //=========== CHECKING RESPONSE FOR CORS
      setResponseType(
        response.type === response2.type ? response.type : 'error'
      );

      //========== VALIDATING APPLICATION HEADERS RETURN JSON CONTENT TYPE
      setContentType(
        response.headers.get('Content-Type') ===
          response2.headers.get('Content-Type')
          ? response.headers.get('Content-Type')
          : 'error'
      );

      //=========== CHECKING ASYNC CALLS ARE BOTH 200 STATUS
      setFetchStatus(
        response.status === response2.status ? response.status : 'error'
      );
    }
    //=============== ASYNC FUNCTION CALL
    fetchAPI().catch((err) => console.log(err));
  }, []);

  //=======EVENT HANDLER
  const handleTask = () => {
    //=============
    //MY APPROACH TO VALIDATING THE DATA TYPES STARTED WITH MERGING THE ARRAYS.

    //======== THIS VALIDATES THE NEW MERGED SINGLE DATA-SET
    //======== IT VALIDATES EACH DATA TYPE FIELD THROUGHOUT THE OBJECT ENTRIES
    //======== IT WILL LOG AN ENTRY IN THE RENDERED TABLE IF ANY DATA TYPE IS CHANGED OR AN EMPTY FIELD IS LEFT "". YOU CAN MODIFY THE JSON FILES IN src/data/ AND THE ERRORS WILL RENDER WITHIN THE TABLE

    for (let i = 0; i < dataSet.length; i++) {
      if (
        ((typeof dataSet[i].active === 'number' &&
          dataSet[i].active.length !== 0) ||
          dataSet[i].active == null) &&
        ((typeof dataSet[i].asn === 'number' && dataSet[i].asn.length !== 0) ||
          dataSet[i].asn == null) &&
        ((typeof dataSet[i].geo === 'string' && dataSet[i].geo.length !== 0) ||
          dataSet[i].geo == null) &&
        ((typeof dataSet[i].ipv4 === 'string' &&
          dataSet[i].ipv4.length !== 0) ||
          dataSet[i].ipv4 == null) &&
        ((typeof dataSet[i].countrycode === 'string' &&
          dataSet[i].countrycode.length !== 0) ||
          dataSet[i].countrycode == null) &&
        ((typeof dataSet[i].statecode === 'string' &&
          dataSet[i].statecode.length !== 0) ||
          dataSet[i].statecode == null) &&
        ((typeof dataSet[i].id === 'number' && dataSet[i].id.length !== 0) ||
          dataSet[i].id == null)
      ) {
        //THESE LOGS WILL SHOW LINE FOR LINE DATA-TYPE VALIDATION ACROSS FULL SCHEMA
        // console.log(`Array Object Index ${i} : All data types are correct`);
      } else {
        arrErrors.push(dataSet[i]);
        // console.log(`Array Object Index ${i} : All data types are not correct`);
      }
    }
    //===========TOGGLE COMPONENT DISPLAY
    console.log(arrErrors);
    setToggleOn(true);
  };
  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>

      <div className={toggleOn ? 'C1-ON' : 'C1-OFF'}>
        <h6>
          {/* TERNARY OPERATOR CONDITIONALS */}
          Checking Response Type: <span className='type'>
            {responseType}
          </span>{' '}
          <span className='validator'>
            {responseType === 'cors' ? 'Check server proxy port' : 'Valid'}
          </span>
        </h6>

        <h6>
          {/* TERNARY OPERATOR CONDITIONALS */}
          Checking Parsing of Data:{' '}
          <span className='validator'>
            {parseTest ? 'JSON parsed correctly / valid' : 'Not Valid'}
          </span>
        </h6>

        <h6>
          {/* TERNARY OPERATOR CONDITIONALS */}
          Checking Content Type: <span className='type'>
            {contentType}
          </span>{' '}
          <span className='validator'>
            {contentType === 'application/json' ? 'Valid' : 'Invalid'}
          </span>
        </h6>

        <h6>
          {/* TERNARY OPERATOR CONDITIONALS */}
          Checking Status Code: <span className='type'>{fetchStatus}</span>{' '}
          <span className='validator'>
            {' '}
            {fetchStatus === 200 ? 'Valid' : 'Invalid'}
          </span>
        </h6>

        <h6>
          Checking Data Types for Errors{' '}
          <span className='type'>
            Fields with no data or incorrect schema data types will display
          </span>{' '}
        </h6>
        <hr />
        <div className='table'>
          <Table border='2'>
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
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ComponentChallenge1COPY;
