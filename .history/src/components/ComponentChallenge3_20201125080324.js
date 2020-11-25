import { includes } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';

function ComponentChallenge3() {
  const handleTask = () => {
    console.log(data);
    console.log(geo);

    const arr2 = [{
      "active": 1,
      "asn": 12041,
      "countrycode": "JP",
      "id": 303,
      "statecode": null,
      "meta": "199.19.52.229 afilias03.ring.nlnog.net 127 Ota Equinix TY1"
    },
    {
      "active": 1,
      "asn": 38965,
      "countrycode": "NL",
      "id": 833,
      "statecode": null,
      "meta": "193.178.197.250 572 hostin01.ring.nlnog.net Amsterdam EuNetworks Amsterdam Paul van Vlissingenstraat 16, 1096 BK Amsterdam"
    },
    {
      "active": 1,
      "asn": 16509,
      "countrycode": "US",
      "id": 885,
      "statecode": "CA",
      "meta": "Los Angeles amazon22.ring.nlnog.net 70.224.199.231  75"
    }];
    const arr = [1, 2, 3];
    const test = includes(arr, 1);
    console.log(test);

    for (let i = 0; i < test.legth; i++) {
      if (arr[i] == arr2[i]) {
        console.log(`true ${i}`);
      } else {
        console.log(`false`);
      }
    }
  };
  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>
      {/* {data.map(item => item)} */}
    </div>
  );
}

export default ComponentChallenge3;
