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
      allContentfulLongsongLandingPageContent {
        edges {
          node {
            textOverHeroImage {
              raw
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <AnimationIntroContainer>
      <DesktopWrapper>
        <Renderer
          node={
            data.allContentfulLongsongLandingPageContent.edges[1].node
              .textOverHeroImage
          }
        />
      </DesktopWrapper>
      <MobileWrapper>
        <Renderer
          node={
            data.allContentfulLongsongLandingPageContent.edges[1].node
              .textOverHeroImage
          }
        />
      </MobileWrapper>
    </AnimationIntroContainer>
  )
}

export default HeroText
