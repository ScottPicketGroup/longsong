import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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

const PrivateEventModule = () => {

  const { handleOpenMenuClick } = useActivePage();

  const data = useStaticQuery(graphql`
  query landingPrivateEvent {
    allContentfulLongsongLandingPagePrivateDiningSection {
      edges {
        node {
          id
              gallery {
                gatsbyImageData
                title
              }
              intro {
                raw
              }
              title
        }
      }
    }
  }
  
  `)

const {gallery, intro, title } = data.allContentfulLongsongLandingPagePrivateDiningSection.edges[1].node
console.log(data)

  return (
    <LandingPageModuleContainer>
      <ImageWrapper>
        <Slider imageData={gallery}></Slider>
        {/* <StaticImage
          className="fullscreen-button"
          src="../../../../images/EventTemplate/fullscreenbutton.png"
          alt="fullscreen-button"
        /> */}
      </ImageWrapper>
      <EventContentContainer>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md" style={{ marginTop: "0px" }}>
            {title}
          </Heading1>
          <Renderer node={intro} />
          {/* <Link to="/"> */}
            { <LearnMoreButton marginTop="md"  
            
            onClick={() => handleOpenMenuClick(3)}>LEARN MORE</LearnMoreButton>}
          {/* </Link> */}
        </TextContainer>
      </EventContentContainer>
    </LandingPageModuleContainer>
  )
}

export default PrivateEventModule
