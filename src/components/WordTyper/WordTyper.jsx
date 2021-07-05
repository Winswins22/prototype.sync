import React, {useState} from 'react'

import Typewriter from 'typewriter-effect'
import './WordTyperStyling.css'

import {
  GreyText
} from '../../GlobalItems'

const WordTyper = () => {

  const [display, setDisplay] = useState(false);
  const [finish, setFinish] = useState(false);

  setTimeout(() => {
    setDisplay(true)
  }, 1000)

  setTimeout(() => {
    setFinish(true)
  }, 2500)

  return (
    display ?
      !finish ?
        <Typewriter
          options={{
            wrapperClassName: "typeText"
          }}

          onInit={(typewriter) => {
            typewriter
              .typeString(".sync()")
              .start()
          }}
        ></Typewriter>
      :
        <GreyText> .sync() </GreyText>
    :
      <></>
  )
}

export default WordTyper
