import React from 'react'
import Button from 
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
