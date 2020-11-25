import React, {useState} from 'react'
import { Button } from 'reactstrap';
import data from '../data.json'
import geo from '../geo.json'


console.log(data)
console.log(geo)



function ComponentChallenge3() {



const handleTask = ({



}  
  return (
    <div>
      <Button onclick={handleTask}>Continue</Button>
      {/* {data.map(item => item)} */}


    </div>
  )
}

export default ComponentChallenge3
