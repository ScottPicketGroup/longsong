import React from "react"
import { AnimationImgWrapper, HeroBG, HeroContainer } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
const HeroBackground = () => {
  return (
    <>
      <HeroBG>
        <StaticImage
          src="../../../../images/HeroBackgroundImage.jpg"
          placeholder="blurred"
          alt="Hero Image"
          style={{ position: `absolute`, height: `100vh` }}
        />
      </HeroBG>
      <HeroContainer>
        <AnimationImgWrapper>
          <LongsongVideo />
        </AnimationImgWrapper>
        <HeroText />
      </HeroContainer>
    </>
  )
}

export default HeroBackground

