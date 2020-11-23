import React, { useState, useEffect } from 'react';
import Data from '../geo.json';
import { sortBy, groupBy, memoize } from 'lodash';

function ComponentChallenge2(props) {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [location, setLocation] = useState('');
  const [diff, setDiff] = useState('');
  const [adjust, setAdjust] = useState('');
  const [long, setLong] = useState(Data)
  const [lat, setLat] = useState(Data)
  let splitGeo2 = [];
  let splitGeo3 = [];


  useEffect(() => {
    Data.sort(function (a, b) {
      return parseInt(b.geo) - parseInt(a.geo);
    });

    const geoArray = Data.map((location) => location.geo);
    console.log(geoArray)


    let splitGeo = geoArray.toString().split(',');
    // console.log(splitGeo);
    // let splitGeo2 = [];
    // let splitGeo3 = [];
    for (let i = 0; i < splitGeo.length; i++) {
      if (i % 2 == 0) {
        splitGeo2.push(parseFloat(splitGeo[i]));
      } else {
        splitGeo3.push(parseFloat(splitGeo[i]))
      }
    }

    // console.log(splitGeo2);
    // console.log(splitGeo3);



    // setLong(... long, splitGeo2)
    // setLat(... lat, splitGeo3)

    // console.log(long)
    // console.log(lat)

    let splitArr = groupBy(Data, 'geo');
    let splitArr2 = splitArr;

    // console.log(splitArr)
    // console.log(Data.slice(0, 9));
    // console.log(JSON.stringify(Data.slice(0, 9)));

    let test = JSON.stringify(Data.slice(0, 9));
  }, []);

  const handleFetch = () => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLocation(`${longitude.toString()},${latitude.toString()}`);
        setLong(... long, splitGeo2)
        setLat(... lat, splitGeo3)


      });
    } else {
      console.log('Not available');
    }
  };

  return (
    <div>
      <button onClick={handleFetch}>Continue</button>
      <h1>Longitude{longitude}</h1>
      <h1>Latitude{latitude}</h1>
      <h1>Location{location}</h1>
      <div>
        <table border='2'>
          <tbody>
            <tr>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Location</th>
              <th>Difference</th>
            </tr>
            {long.map((item, i) => (
              <tr key={i}>
                <td>{item.geo}</td>
                <td>{item}</td>
                <td>{item}</td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComponentChallenge2;
