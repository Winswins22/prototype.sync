import React, {useEffect} from 'react'

import {
  HeadingText,
  PageWrapper,
  Text,
  Spacing
} from '../../GlobalItems'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const Timeline = () => {

  useEffect(() => { 
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });
  }, [])

  return (
    <PageWrapper>
      <>
        <h1> Timeline </h1>
      </>
    </PageWrapper>
  )
}

export default Timeline
