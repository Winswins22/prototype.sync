import React, {useState} from 'react'
import Typewriter from 'typewriter-effect'

import './WordTyperStyling.css'


const WordTyper = ({doLoop = false, text = "no text", initialPause = 0}) => {

  const [display, setDisplay] = useState(false)

  setTimeout(() => {
    setDisplay(true)
  }, 1000)

  return (
    display ?
        <Typewriter

        options={{
          loop: false,
          wrapperClassName: "typeText"
        }}

        onInit={(typewriter) => {
          typewriter
            .typeString({text})
            .pauseFor(1000)
            .start()
        }}
      ></Typewriter>
    :
      <></>
  )
}

export default WordTyper
