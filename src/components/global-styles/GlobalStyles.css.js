import styled, { createGlobalStyle } from "styled-components"
import { fadeInBG } from "./animations"

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
  }

  html, body {
    font-size: 16px;
    font-family: 'normal', sans-serif;
    letter-spacing: 10;
    background: #231F20;
    animation: ${fadeInBG} 2s forwards;
    visibility: 0;
 
    color: white;
  }
  body {
    overflow-x: hidden;
}

  a {
    color: #333333;
  }
  h1 {
    font-weight: normal;
  }
`

export default GlobalStyles

export const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  width: ${props => (props.submit ? "35%" : "")};
  color: white;
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #2b3c31;
    background: white;
  }
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "9.63rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
`

export const SocialIcon = styled.svg`
  transition: all 0.2s ease-in-out;
  fill: white;
  stroke: white;
  :hover {
    stroke: #457e5c;
    fill: #457e5c;
    g {
      stroke: #457e5c;
    }
    path,
    ellipse {
      stroke: #457e5c;
    }
  }
`
