import React, {const [state, setstate] = useState(initialState)} from 'react'
import { Button } from 'reactstrap';
import data from '../data.json'
import geo from '../geo.json'



function ComponentChallenge3() {
  return (
    <div>
      <Button>Continue</Button>
      {data.map(item => item)}


    </div>
  )
}

export default ComponentChallenge3