import React from 'react'

import WordTyper from '../../components/WordTyper/WordTyper'

import {
  HeadingText
} from '../../GlobalItems'

const Home = () => {
  return (
    <>
      <HeadingText> Prototype </HeadingText>
      <WordTyper initialPause="1100" text=".sync()"></WordTyper>
    </>
  )
}

export default Home
