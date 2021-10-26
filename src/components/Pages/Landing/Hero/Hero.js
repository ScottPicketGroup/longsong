import React, { useState, useEffect } from "react"
import {
  AnimationWrapper,
  HeroWrapper,
  HeroText,
  HeroContainer,
} from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import ScrollToCalender from "./Intro/ScrollToCalender"
import Intro from "./Intro/Intro"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({ heroImage, heroTextOverImage, excuteScroll }) => {
  const [loading, setLoading] = useState(true)

  return (
    <HeroWrapper>
      <AnimationWrapper>
        <LongsongVideo />
      </AnimationWrapper>
      <Intro />
      <ScrollToCalender excuteScroll={excuteScroll} />
    </HeroWrapper>
    // <HeroContainer>
    //   <GatsbyImage image={getImage(heroImage)} />
    //   <HeroText style={{ position: "absolute" }}>{heroTextOverImage}</HeroText>
    // </HeroContainer>
  )
}

export default Hero
