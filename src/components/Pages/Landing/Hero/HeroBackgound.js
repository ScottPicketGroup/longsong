import React from "react"
import { AnimationImgWrapper, HeroContainer, HeroImage } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"
import { getImage } from "gatsby-plugin-image"

const HeroBackground = ({ heroImage, heroTextOverImage }) => {
  return (
    <>
      <HeroImage image={getImage(heroImage)} />
      <HeroContainer>
        <AnimationImgWrapper>
          <LongsongVideo />
        </AnimationImgWrapper>
        <HeroText text={heroTextOverImage} />
      </HeroContainer>
    </>
  )
}

export default HeroBackground
