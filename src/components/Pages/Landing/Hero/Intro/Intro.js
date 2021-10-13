import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../../global-styles/containers.css"

import Renderer from '../../../../rich-text-renderers/sample.js'
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
    
          <Renderer node={data.allContentfulLongsongPageContent.edges[0].node.landingIntro} />
        </IntroTextWrapper>
      </DesktopWrapper>
      <MobileWrapper>
        <IntroTextWrapper mobile>
         
        <Renderer node={data.allContentfulLongsongPageContent.edges[0].node.landingIntro} />
        </IntroTextWrapper>
      </MobileWrapper>
    </IntroContainerWrapper>
  )
}

export default Intro
