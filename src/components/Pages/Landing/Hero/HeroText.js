import React from "react"
import { BC1, BC2, Heading2 } from "../../../global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { AnimationIntroContainer } from "./Hero.css"

const HeroText = ({text}) => {
  return (
    <AnimationIntroContainer>
      <DesktopWrapper>
        <BC1>{text}</BC1>
      </DesktopWrapper>
      <MobileWrapper>
        <BC2>{text}</BC2>
      </MobileWrapper>
    </AnimationIntroContainer>
  )
}

export default HeroText
