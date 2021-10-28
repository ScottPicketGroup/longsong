import React from "react"
import { AnimationImgWrapper, HeroContainer, HeroImage } from "./Hero.css"
import LongsongVideo from "./LongsongVideo/LongsongVideo"
import HeroText from "./HeroText"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
const HeroBackground = () => {
  
  return (
    <>
    <HeroBG>
      <StaticImage
        src="../../../../images/HeroBackgroundImage.jpg"
        placeholder="blurred"
        alt="Hero Image"
        style={{position: `absolute`, height: `100vh`}}
      />
      </HeroBG>
      <HeroContainer>
        <AnimationImgWrapper>
          <LongsongVideo />
        </AnimationImgWrapper>
        <HeroText  />
      </HeroContainer>
    </>
  )
}

export default HeroBackground

export const HeroBG = styled.div`

@media (max-width: 451px) {
  margin-left: -1rem;
}
 
`;