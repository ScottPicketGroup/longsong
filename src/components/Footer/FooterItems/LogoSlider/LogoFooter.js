import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import Img from "gatsby-image"

import FooterSlider from "./footerSlider"
import LogoSliderNew from "./LogoSlider"
const LogoFooter = () => {
  const [slideLive, setSlideLive] = useState(10)

  return (
    <LogoFooterContainer>
      <LogoSliderNew />
    </LogoFooterContainer>
  )
}

export default LogoFooter

export const LogoFooterContainer = styled.div`
  width: 99vw;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  height: auto;
  padding: 1rem;
  border-top: 1px solid #153e35;
  border-bottom: 1px solid #153e35;
  overflow: hidden;
  @media screen and (max-width: 450px) {
    flex-wrap: nowrap;
    padding: 0;
    width: 100vw !important;
    margin: 0;
    justify-content: flex-start;
  }
`
export const Logo = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  background: brown;
`
export const LogoLink = styled.a`
  text-decoration: none;
  color: black;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 75%;
  }

  @media screen and (max-width: 450px) {
    padding: 0.6rem;
  }
`
export const Image = styled(Img)`
  width: ${props => props.width / 2}rem;
  margin: 0.5rem;
  @media screen and (max-width: 450px) {
    width: ${props => props.width / 1.62}rem;
  }
`
