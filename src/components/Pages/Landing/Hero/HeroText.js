import React from "react"
import { BC1, BC2, Heading2 } from "../../../global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { AnimationIntroContainer } from "./Hero.css"
import Renderer from "../../../rich-text-renderers/sample"
import { graphql, useStaticQuery } from "gatsby"
const HeroText = () => {
  const data = useStaticQuery(graphql`
  query heroText {
    allContentfulLongsongLandingPageContent(
      filter: {id: {eq: "4a312602-defe-550a-b9b5-2393ed6dd3ee"}}
    ) {
      edges {
        node {
          textOverHeroImage {
            raw
          }
          id
        }
      }
    }
  }
  
  `)

  return (
    <AnimationIntroContainer>
      <DesktopWrapper style={{marginBottom: '-9rem'}}>
        <Renderer
          node={
            data.allContentfulLongsongLandingPageContent.edges[0].node
              .textOverHeroImage
          }
        />
      </DesktopWrapper>
      <MobileWrapper>
        <Renderer
          node={
            data.allContentfulLongsongLandingPageContent.edges[0].node
              .textOverHeroImage
          }
        />
      </MobileWrapper>
    </AnimationIntroContainer>
  )
}

export default HeroText
