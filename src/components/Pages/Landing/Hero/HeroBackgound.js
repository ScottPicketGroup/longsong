import React from "react"
import { AnimationImgWrapper, HeroContainer } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"

const HeroBackground = ({ heroImage, heroTextOverImage, excuteScroll }) => {
  return (
    <HeroContainer bgImage={heroImage}>
      <AnimationImgWrapper>
        <LongsongVideo />
      </AnimationImgWrapper>
      <HeroText text={heroTextOverImage} />
    </HeroContainer>
  )
}

export default HeroBackground
