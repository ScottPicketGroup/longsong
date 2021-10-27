import React from "react"
import { BC1, BC2, Heading2 } from "../../../global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { AnimationIntroContainer } from "./Hero.css"
import Renderer from "../../../rich-text-renderers/sample"

const HeroText = ({ text }) => {
  return (
    <AnimationIntroContainer>
      <DesktopWrapper>
        <Renderer node={text} />
      </DesktopWrapper>
      <MobileWrapper>
        <Renderer node={text} />
      </MobileWrapper>
    </AnimationIntroContainer>
  )
}

export default HeroText
