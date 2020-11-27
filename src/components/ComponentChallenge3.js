import React, { useState, useContext } from 'react';
import { DATA_SET } from '../App';
import { Button } from 'reactstrap';
import { sortBy } from 'lodash';

function ComponentChallenge3COPY() {
  // ========== GLOBAL STATE FROM CONTEXT API
  const dataSet = useContext(DATA_SET);

  // ========== LOCAL STATE
  const [toggleOn, setToggleOn] = useState(false);
  const [data, setData] = useState(dataSet);

  const handleTask = () => setToggleOn(true);

  //SORTS DATA SET ACCORIDNG PROPERTY
  const handleSort = () => {
    setData(sortBy(dataSet, 'id'));
  };
  //SORTS DATA SET ACCORIDNG PROPERTY
  const handleSort2 = () => {
    setData(sortBy(dataSet, 'asn'));
  };

  return (
    <div>
      <Button onClick={handleTask}>Continue</Button>

      <br />
      <Button
        className='filter'
        className={toggleOn ? 'C3-ON' : 'C3-OFF'}
        onClick={handleSort}
      >
        Filter by <span className='span'>id</span>{' '}
      </Button>
      <Button
        className='filter'
        className={toggleOn ? 'C3-ON' : 'C3-OFF'}
        onClick={handleSort2}
      >
        Filter by <span className='span'>asn</span>{' '}
      </Button>
      <div className={toggleOn ? 'C3-ON' : 'C3-OFF'}>
        <div>
          {data.map((item, index) => (
            <select className='list' key={index}>
              <option>id: {item.id}</option>
              <option>ipv4: {item.ipv4}</option>
              <option>geo: {item.geo}</option>
              <option>asn: {item.asn}</option>
              <option>country: {item.countrycode}</option>
              <option v>state: {item.statecode}</option>
            </select>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComponentChallenge3COPY;
