import React from 'react'

import WordTyper from '../../components/WordTyper/WordTyper'

import {
  HeadingText
} from '../../GlobalItems'

const Home = () => {
  return (
    <>
      <div style={{display:"flex"}}>
        <HeadingText> Prototype </HeadingText>
        <div style={{marginTop:"2.75rem"}}>
          <WordTyper></WordTyper>
        </div>
      </div>
    </>
  )
}

export default Home
