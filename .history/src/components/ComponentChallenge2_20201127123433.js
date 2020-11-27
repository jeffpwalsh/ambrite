import React, { useState, useEffect, useContext } from 'react';
import { DATA_SET } from '../App';
import { Button, Table } from 'reactstrap';
import { chunk } from 'lodash';

function ComponentChallenge2COPY() {
  // ========== GLOBAL STATE FROM CONTEXT API
  const dataSet = useContext(DATA_SET);

  // ========== LOCAL STATE
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState([]);
  const [distance, setDistance] = useState([]);
  const [toggleOn, setToggleOn] = useState(false);

  //============ GEOLOCATION PARAMETERS REQUESTED FROM USER AND UPDATED TO LOCAL STATE.
  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });
    } else {
      console.log('Not available');
    }
  }, []);

  //=======EVENT HANDLER
  const handleTask = () => {
    //=============
    
    //I MAPPED THROUGH GEO.JSON META DATA VALUES AND MATCHED IT TO DATA.JSON IPV4 VALUES
    //I MANIPULATED THE STRING 
    const arr4 = dataSet.map((item) => item.geo);

    console.log(arr4);
    const arr5 = arr4.map((item) => item.split(',', 1));
    const arr6 = arr5.map((item) => parseFloat(item));
    arr6.map((item) => item);

    //SPLIT GPS COORDINATES
    let arr7 = [];

    for (let i = 0; i < dataSet.length; i++) {
      arr7.push(arr4[i].replace(arr5[i], ' '));
    }

    const arr8 = arr7.map((item) => item.substring(2));
    arr8.map((item) => item);
    const arr9 = arr8.map((item) => parseFloat(item));

    let arr11 = [];

    //CREATE NEW ARRAY OF NUMBER VALUES WITH LONG AND LAT PROPERTIES
    for (let i = 0; i < dataSet.length; i++) {
      arr11.push(arr6[i]);
      arr11.push(arr9[i]);
    }
    console.log(arr11);
    console.log(chunk(arr11, 2));
    setCoords(chunk(arr11, 2));

    const longArr = arr6;
    const latArr = arr9;
    //DEV LOGS
    //console.log(arr1);
    //console.log(arr2);
    //console.log(arr3);
    //console.log(arr4);
    //console.log(arr5);
    //console.log(arr6);
    //console.log(arr7);
    //console.log(arr8);
    //console.log(arr9);
    //console.log(arr10);
    //console.log(arr11);

    //THIS FUNCTION TAKES IN LATITUDE AND LONGITUDE OF TWO LOCATION AND RETURNS THE DISTANCE BETWEEN THEM AS THE CROW FLIES IN KM

    function calcCrow(lat1, lon1, lat2, lon2) {
      const R = 6371; // KM
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      lat1 = toRad(lat1);
      lat2 = toRad(lat2);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1) *
          Math.cos(lat2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      return d;
    }

    // CONVERTS NUMERIC DEGREES TO RADIANS
    function toRad(Value) {
      return (Value * Math.PI) / 180;
    }

    let distArr = [];

    //CALCULATES THE DISTANCE FROM USER'S LAT AND LON PARAMS
    for (let i = 0; i < dataSet.length; i++) {
      const dist = calcCrow(latitude, longitude, latArr[i], longArr[i]);
      console.log(dist);
      distArr.push(dist.toFixed(2));

      // const rad = toRad(dist);
      // console.log(rad);
    }

    setDistance(distArr);

    //===========TOGGLE COMPONENT DISPLAY
    setToggleOn(true);
  };

  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>
      <br />
      <div className={toggleOn ? 'C2-ON' : 'C2-OFF'}>
        <div className='table'>
          <Table border='2'>
            <tbody>
              <tr>
                <th>Longitude</th>
                <th>Longitude</th>
              </tr>
              {coords.map((item, index) => (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='table'>
          <Table border='2'>
            <tbody>
              <tr>
                <th>Difference (KM)</th>
              </tr>
              {distance.map((item, index) => (
                <tr className='data' key={index}>
                  <td>{item}km</td>
                  {/* <td>{latitude}</td>
                  <td>{longitude}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='table'>
          <Table border='2'>
            <tbody>
              <tr>
                <th>USER Latitude</th>
                <th>USER Longitude</th>
              </tr>
              {distance.map((item, index) => (
                <tr key={index}>
                  <td>{latitude}</td>
                  <td>{longitude}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ComponentChallenge2COPY;
