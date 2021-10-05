import React from "react"
import { BC1, BC2 } from "../../../../global-styles/typography.css"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../../global-styles/containers.css"
import { IntroContainerWrapper, IntroTextWrapper } from "../Hero.css"
const Intro = () => {
  const data = useStaticQuery(graphql`
  query landingIntro {
    allContentfulLongsongPageContent {
      edges {
        node {
          landingIntro {
            raw
          }
        }
      }
    }
  }
  `)

  return (
    <IntroContainerWrapper>
      <DesktopWrapper>
        <IntroTextWrapper>
          <BC1>
         
          {renderRichText(
          data.allContentfulLongsongPageContent.edges[0].node.landingIntro
          )}
          </BC1>
        </IntroTextWrapper>
      </DesktopWrapper>
      <MobileWrapper>
        <BC2>
        {renderRichText(
          data.allContentfulLongsongPageContent.edges[0].node.landingIntro
          )}
        </BC2>
      </MobileWrapper>
    </IntroContainerWrapper>
  )
}

export default Intro
