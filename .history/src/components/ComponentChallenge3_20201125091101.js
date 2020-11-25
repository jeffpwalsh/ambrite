import { includes } from 'lodash';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import data from '../data.json';
import geo from '../geo.json';
import SuperArray from 'super-array';

function ComponentChallenge3() {
  const handleTask = () => {
    console.log(data);
    console.log(geo);

    const meta = [
      {
        active: 1,
        asn: 12041,
        countrycode: 'JP',
        id: 303,
        statecode: null,
        meta: '199.19.52.229 afilias03.ring.nlnog.net 127 Ota Equinix TY1',
      },
      {
        active: 1,
        asn: 38965,
        countrycode: 'NL',
        id: 833,
        statecode: null,
        meta:
          '193.178.197.250 572 hostin01.ring.nlnog.net Amsterdam EuNetworks Amsterdam Paul van Vlissingenstraat 16, 1096 BK Amsterdam',
      },
      {
        active: 1,
        asn: 16509,
        countrycode: 'US',
        id: 885,
        statecode: 'CA',
        meta: 'Los Angeles amazon22.ring.nlnog.net 70.224.199.231  75',
      },
    ];
    const ipv4 = [
      { ipv4: 38965, geo: '35.584732,139.748758' },
      { ipv4: '70.224.199.231', geo: '34.0533447265625,-118.24234771728516' },
      { ipv4: '94.230.90.30', geo: '32.084,34.8878' },
    ];

    // const test = Object.entries(meta);
    // const testRes = test[2][1].meta;
    // console.log(testRes);

    // const test2 = Object.entries(ipv4);
    // const testRes2 = test2[1][1].ipv4;
    // console.log(testRes2);

    // const result = testRes.includes(testRes2);
    // console.log(result);

    const metaData = meta.map(map => map.meta)
    console.log(metaData)
    const metaData2 = Object.entries(metaData)
    console.log(metaData2)

    const ipv4Data = ipv4.map(ipv4 => ipv4.ipv4)
    console.log(ipv4Data)
    const ipv4Data2 = Object.entries(ipv4Data)
    console.log(ipv4Data2)

    for (let i = 0; i< ipv4.length; i++) {

      if (metaData[i].includes(ipv4[i]) {

        console.log(`MetaIndex = `)
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
