import styled, { keyframes, css } from "styled-components"

export const LogoAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
    transform: scale(1.2);
    transform: translateY(20vh)
   
  }
  10% {
    opacity: 1;
    display: flex;
    transform: scale(1.2);
    transform: translateY(20vh);
  }
  65% {
      opacity: 1;
      display: none;
  }
 67% {
     opacity: 0;
     display: none;
 }
  70% {
      
    transform: scale(1.2);
    transform: translateY(20vh);
   
    
   
  }
  71% {

    transform: translateY(0);
    transform: scale(.8);
  }

  75% {
    display: none;
      opacity: 0;
  }

  80% {
    display: flex;
      opacity: 1;
  }
  100% {
    

  }
`

export const TextFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
   
   
  }
  80% {
    display: none;
    opacity: 0;
   
   
  }
  85% {
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
  padding: 0 0 3.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-between;

  @media (max-width: 451px) {
    margin-top: -4.5rem;
  }
`

export const AnimationWrapper = styled.div`
  animation: ${LogoAnimation} 6s linear;
  transform: scale(0.8);

  display: flex;
  justify-content: center;
  margin-bottom: -2rem;
  align-self: space-around;
`

export const IntroContainerWrapper = styled.div`
  animation: ${TextFadeIn} 6s linear;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: -2rem;
  text-align: center;
  @media (max-width: 450px) {
      margin: 1rem;
  }
`

export const ScrollToCalenderContainer = styled.div`
animation: ${ScrollTotFadeIn} 6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DownArrow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
