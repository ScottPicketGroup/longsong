import { keyframes } from "styled-components"

export const fadeIn = keyframes`
  0% {
  display: none;
  opacity: 0;
  }

  100% {
  display:grid;
  opacity: 1;
  }
`

export const fadeInBG = keyframes`
  0% {
display: none;
opacity: 0;
  }
 
  100% {
 opacity: 1;
  display: flex;

      
  }
`
