import React from "react"
import { AnimationImgWrapper, HeroContainer, HeroImage } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"
import { StaticImage } from "gatsby-plugin-image"

const HeroBackground = ({ textOverHeroImage }) => {
  console.log(textOverHeroImage)
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
        <HeroText text={textOverHeroImage} />
      </HeroContainer>
    </>
  )
}

export default HeroBackground
