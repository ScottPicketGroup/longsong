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
  query landingGallery {
    allContentfulLongsongLandingPageGallery(
      filter: {id: {eq: "6360b07b-e6f0-5f56-bdb0-a795901937cb"}}
    ) {
      edges {
        node {
          id
          gallery {
            title
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  
  
  
  `)

const {gallery, intro, title } = data.allContentfulLongsongLandingPageGallery.edges[0].node


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
        <Slider imageData={gallery} aspectRatio="3/2"></Slider>
      
      </ImageWrapper>
      
    </LandingPageModuleContainer>
  )
}

export default LandingImageGallery
