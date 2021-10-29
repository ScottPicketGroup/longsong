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
  LearnMoreButton,
} from "./index.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { Heading1 } from "../../../global-styles/typography.css"
import useActivePage from "../../../hooks/ActivePage"

const LandingImageGallery = () => {

  const { handleOpenMenuClick } = useActivePage();

  const data = useStaticQuery(graphql`
  query landingImagestff {
    allContentfulLongsongLandingPagePrivateDiningSection(
      filter: {id: {eq: "4af70453-ae05-593d-9722-bdb85b745ace"}}
    ) {
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

const {gallery, intro, title } = data.allContentfulLongsongLandingPagePrivateDiningSection.edges[0].node
console.log(data)

  return (
    <LandingPageModuleContainer>
      <EventContentContainer style={{marginBottom: `3.25rem`}} start>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md" style={{ marginTop: "0px" }}>
            {/* {title} */} Venue Gallery
          </Heading1>
          
        </TextContainer>
      </EventContentContainer>
      <ImageWrapper>
        <Slider imageData={gallery}></Slider>
      
      </ImageWrapper>
      
    </LandingPageModuleContainer>
  )
}

export default LandingImageGallery
