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
      <ImageWrapper>
        <Slider imageData={data.gallery}></Slider>
        <StaticImage
          className="fullscreen-button"
          src="../../../../images/EventTemplate/fullscreenbutton.png"
          alt="fullscreen-button"
        />
      </ImageWrapper>
      <EventContentContainer>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md" style={{ marginTop: "0px" }}>
            {data.title}
          </Heading1>
          <Renderer node={data.intro} />
          {/* <Link to="/"> */}
            <Button marginTop="md"  onClick={() => handleOpenMenuClick(3)}>LEARN MORE</Button>
          {/* </Link> */}
        </TextContainer>
      </EventContentContainer>
    </LandingPageModuleContainer>
  )
}

export default PrivateEventModule
