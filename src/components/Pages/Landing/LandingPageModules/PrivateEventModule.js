import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Slider from "../../../ImageSlider"
import Renderer from "../../../rich-text-renderers/sample"

import {
  EventContentContainer,
  TextContainer,
  LandingPageModuleContainer,
  ImageWrapper,
} from "./index.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { Heading1 } from "../../../global-styles/typography.css"
import useActivePage from "../../../hooks/ActivePage"

const PrivateEventModule = ({ data }) => {

  const { handleOpenMenuClick } = useActivePage();

  return (
    <LandingPageModuleContainer>
      I am a private event
    </LandingPageModuleContainer>
  )
}

export default PrivateEventModule
