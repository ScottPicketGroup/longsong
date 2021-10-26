import React from "react"
import { AnimationImgWrapper, HeroContainer, HeroImage } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

const HeroBackground = ({ heroImage, heroTextOverImage, excuteScroll }) => {
  return (
    // <HeroContainer bgImage={heroImage}>
    <HeroContainer>
      <AnimationImgWrapper>
        <LongsongVideo />
      </AnimationImgWrapper>
      <HeroImage image={getImage(heroImage)} />
      <HeroText text={heroTextOverImage} />
    </HeroContainer>
  )
}

export default HeroBackground
