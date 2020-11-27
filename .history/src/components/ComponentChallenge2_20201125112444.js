import React, { useState, useEffect } from 'react';
// import Data from '../geo.json';
import { sortBy, groupBy, memoize } from 'lodash';
// import DataFetch from './DataFetch'

function ComponentChallenge2(props) {
  // const [posts, setPosts] = useState([{}]);
  const [posts2, setPosts2] = useState([]);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [location, setLocation] = useState('');
  const [diff, setDiff] = useState('');
  const [adjust, setAdjust] = useState('');
  // const [long, setLong] = useState(Data);
  // const [lat, setLat] = useState(Data);
  let splitGeo2 = [];
  let splitGeo3 = [];




  const handleFetch = () => {



  
  // // useEffect(() => {
  // //   Data.sort(function (a, b) {
  // //     return parseInt(b.geo) - parseInt(a.geo);
  // //   });

  // //   const geoArray = Data.map((location) => location.geo);
  // //   console.log(geoArray)

  // //   let splitGeo = geoArray.toString().split(',');
  // //   // console.log(splitGeo);
  // //   // let splitGeo2 = [];
  // //   // let splitGeo3 = [];
  // //   for (let i = 0; i < splitGeo.length; i++) {
  // //     if (i % 2 == 0) {
  // //       splitGeo2.push(parseFloat(splitGeo[i]));
  // //     } else {
  // //       splitGeo3.push(parseFloat(splitGeo[i]))
  // //     }
  // //   }

  // //   // console.log(splitGeo2);
  // //   // console.log(splitGeo3);

  // //   // setLong(... long, splitGeo2)
  // //   // setLat(... lat, splitGeo3)

  // //   // console.log(long)
  // //   // console.log(lat)

  // //   let splitArr = groupBy(Data, 'geo');
  // //   let splitArr2 = splitArr;

  // //   // console.log(splitArr)
  // //   // console.log(Data.slice(0, 9));
  // //   // console.log(JSON.stringify(Data.slice(0, 9)));

  // //   let test = JSON.stringify(Data.slice(0, 9));
  // // }, []);

  // const handleFetch = async () => {
  //   const response = await fetch(
  //     'https://cors-anywhere.herokuapp.com/https://ambrite.ch/challenge/geo.json'
  //   );
  //   const response2 = await fetch(
  //     'https://cors-anywhere.herokuapp.com/https://ambrite.ch/challenge/data.json'
  //   );
  //   const data = await response.json();
  //   const data2 = await response2.json();

  //   // console.log(response);
  //   // console.log(data);
  //   // console.log(response2);
  //   // console.log(data2);

  //   const arr1 = data
  //   const arr2 = data2
  //   const arr3 = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

  //   // let join5 = [];
  //   // const join = data.map((item) => item.geo);
  //   // const join4 = join.forEach((x) => join5.push(x));

  //   // const join2 = Object.entries(join);
  //   // const join3 = Object.keys(join2);

  //   // console.log(join);
  //   // console.log(join2);
  //   // // console.log(join3);
  //   // console.log(join4)
  //   // console.log(join5);
  //   console.log(arr3)
    console.log(props.data)
   

    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
        // setLocation(`${longitude.toString()},${latitude.toString()}`);
        // setLong(... long, splitGeo2)
        // setLat(... lat, splitGeo3)
      });
    } else {
      console.log('Not available');
    }
  }

  return (
    <div>
      <button onClick={handleFetch}>Continue</button>
      <h1>Longitude{longitude}</h1>
      <h1>Latitude{latitude}</h1>
      {/* <h1>Location{location}</h1> */}
      <div className="table">
        <table border='2'>
          <tbody>
            <tr>
              <th>Co-ordinates</th>
              <th>Country Code</th>
              <th>Active</th>
              <th>Difference</th>
            </tr>
            {propsposts.map((item, index) => (
              <tr key={index}>
                <td>{item.geo}</td>
                <td>{item.countrycode}</td>
                <td>{item.active === 1 ? 'Yes' : 'No'}</td>
                <td>{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComponentChallenge2;
