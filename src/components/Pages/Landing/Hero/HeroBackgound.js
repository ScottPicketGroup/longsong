import React from "react"
import { AnimationImgWrapper, HeroContainer, HeroImage } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"
import { StaticImage } from "gatsby-plugin-image"

const HeroBackground = ({ heroTextOverImage }) => {
  return (
    <>
      <StaticImage
        src="../../../../images/HeroBackgroundImage.jpg"
        placeholder="blurred"
        alt="Hero Image"
        style={{ position: "absolute", height: "100vh"}}
      />
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
