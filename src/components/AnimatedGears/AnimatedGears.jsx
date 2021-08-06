import React from 'react'

import {
  Gear,
  InvertGear
} from './AnimatedGearsElems'

const AnimatedGears = () => {
  return (
    <>

      <div style={{position:"absolute", right:"10vw", bottom:"10.25vw"}}>
        <Gear></Gear>
      </div>

      <div style={{position:"absolute", right:"22vw", bottom:"12.75vw"}}>
        <InvertGear></InvertGear>
      </div>

      <div style={{position:"absolute", right:"28.5vw", bottom:"2.5vw"}}>
        <Gear></Gear>
      </div>

    </>

  )
}

export default AnimatedGears
