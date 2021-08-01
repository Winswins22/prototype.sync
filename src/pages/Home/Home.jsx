import React from 'react'

import WordTyper from '../../components/WordTyper/WordTyper'

import {
  HeadingText,
  PageWrapper
} from '../../GlobalItems'

const Home = () => {
  return (
    <PageWrapper>
      <div style={{display:"flex"}}>
        <HeadingText> Prototype </HeadingText>
        <div style={{marginTop:"2.75rem"}}>
          <WordTyper></WordTyper>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Home
