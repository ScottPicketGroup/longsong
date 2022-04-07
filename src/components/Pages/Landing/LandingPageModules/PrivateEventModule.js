import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
import { Heading1 } from "../../../global-styles/typography.css"
import useActivePage from "../../../hooks/ActivePage"

const PrivateEventModule = () => {
  const { handleOpenMenuClick } = useActivePage()

  const data = useStaticQuery(graphql`
    query landingPrivateEvent {
      allContentfulLandingPagePrivateDiningSection(
        filter: { id: { eq: "4af70453-ae05-593d-9722-bdb85b745ace" } }
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

  const { gallery, intro, title } =
    data.allContentfulLandingPagePrivateDiningSection.edges[0].node

  return (
    <LandingPageModuleContainer>
      <ImageWrapper horizontal>
        <Slider imageData={gallery}></Slider>
      </ImageWrapper>
      <EventContentContainer style={{ marginBottom: `3.25rem` }}>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md" style={{ marginTop: "0px" }}>
            {title}
          </Heading1>
          <Renderer node={intro} />
          <LearnMoreButton
            marginTop="md"
            onClick={() => handleOpenMenuClick(3)}
          >
            LEARN MORE
          </LearnMoreButton>
        </TextContainer>
      </EventContentContainer>
    </LandingPageModuleContainer>
  )
}

export default PrivateEventModule
