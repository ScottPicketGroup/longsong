import styled, { keyframes } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const LogoAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
 
  }
  
  75% {
    display: none;
      opacity: 0;
  }

  100% {
    display: flex;
      opacity: 1;
  }
  
`

export const TextFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
   
  }
  50% {
    display: none;
    opacity: 0;
   
  }
  55% {
    opacity: 1;
    display: flex;

  }
  100% {
      
  }
`

export const ScrollTotFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
   
  }
  85% {
    display: none;
    opacity: 0;
   
  }
  90% {
    opacity: 1;
    display: flex;

  }
  100% {
      
  }
`

export const HeroWrapper = styled.div`
  height: 100vh;
  margin: 0 0 13.25rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;

  @media (max-width: 451px) {
    margin-top: -2.5rem;
  }
`

export const AnimationWrapper = styled.div`
  animation: ${LogoAnimation} 2s linear;
  transform: scale(0.8);
  display: flex;
  justify-content: center;
  margin-bottom: -2rem;
  align-self: space-around;
  @media (max-width:450px) {
    margin-top: -6rem;
  }
`

export const IntroContainerWrapper = styled.div`
  animation: ${TextFadeIn} 3s ease;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: -2rem;
  text-align: center;
  @media (max-width: 450px) {
    margin: 1rem;
    
  }
`
export const IntroTextWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem  auto 0;
  flex-direction: column;
  p {
    font-size: 1.44rem !important;
    line-height: 1.13;
    letter-spacing: 10;
  }

  @media (max-width: 450px) {
    p {
      font-size: 1.25rem;
      line-height: 1.2;
    }
  }
`

export const ScrollToCalenderContainer = styled.div`
  animation: ${ScrollTotFadeIn} 2.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const DownArrow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const HeroText = styled.p`
  font-size: 28px;
  text-align: center;
  max-width: 800px;
  left: calc(50% - 450px);
  bottom: 30%;
  animation: ${TextFadeIn} 4s ease;
`

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;

  @media (max-width: 451px) {
    // margin-top: 2.5rem;
  }
`
export const HeroImage = styled(StaticImage)`
  position: absolute;
  height: 100vh;
  @media (max-width: 450px) {
    margin-left: -2rem;
  }
`
export const AnimationImgWrapper = styled(AnimationWrapper)`
  margin-top: 4.25rem;
`
export const AnimationIntroContainer = styled.div`
  animation: ${ScrollTotFadeIn} 2.5s ease;
  max-width: 700px;
  text-align: center;
  margin: auto;
  @media  (max-width: 450px) {
    margin-bottom: 12rem;
  }
`
