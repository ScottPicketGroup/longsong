import React from "react"
import { AnimationWrapper, HeroWrapper } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import ScrollToCalender from "./Intro/ScrollToCalender"
import Intro from "./Intro/Intro"
const Hero = ({ excuteScroll }) => {
  return (
    <HeroWrapper>
      <AnimationWrapper>
        <LongsongVideo />
      </AnimationWrapper>
      <Intro />
      <ScrollToCalender excuteScroll={excuteScroll} />
    </HeroWrapper>
  )
}

export default Hero
