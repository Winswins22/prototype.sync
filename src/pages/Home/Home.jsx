import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import {
  HeadingText,
  PageWrapper,
  Text,
  Spacing
} from '../../GlobalItems'

import Button from '@material-ui/core/Button';

import WordTyper from '../../components/WordTyper/WordTyper'

import AnimatedGears from '../../components/AnimatedGears/AnimatedGears'

//Animate on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css/'

const Home = () => {

  useEffect(() => { 
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });
  }, [])

  return (
    <PageWrapper>

      <div style={{display:"flex"}}>
        <HeadingText data-aos="fade-in"> Prototype </HeadingText>
        <div style={{marginTop:"2.75rem"}}>
          <WordTyper></WordTyper>
        </div>
      </div>

      <div style={{marginTop:"4vh"}}></div>

      <div data-aos-delay="500" data-aos="fade-left">
        <div style={{width:"60vw"}}>
          <Text>
            Create a quick, demoable prototype of your ideas. Prototype.sync() helps you organize and sync your ideas across a team, and manages your time for you so you can focus on bringing your ideas to life in a time constrained environment.
          </Text>
        </div>
      </div>

      <div style={{marginTop:"10vh"}}></div>

      <div data-aos-delay="500" data-aos="fade-left">
        <div>
          <Button variant="contained" color="primary" style={{width:"20vw", height:"6vh", fontSize:"1.4rem"}} component={Link} to={'/tasks'}>
            Create Protoype!
          </Button>
        </div>

        <div style={{marginTop:"2vh"}}></div>

        <div>
          <Button variant="contained" color="default" style={{width:"20vw"}} component={Link} to={'/join'}>
            I already have a prototype
          </Button>
        </div>
      </div>

      <AnimatedGears></AnimatedGears>
      

    </PageWrapper>
  )
}

export default Home
