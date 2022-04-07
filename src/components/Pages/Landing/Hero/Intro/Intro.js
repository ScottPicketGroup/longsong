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
      contentfulLandingPageContent(id: {eq: "4a312602-defe-550a-b9b5-2393ed6dd3ee"}) {
        textOverHeroImage {
          raw
        }
      }
    }
  `)

  return (
    <IntroContainerWrapper>
      <DesktopWrapper>
        <IntroTextWrapper>
    
          <Renderer node={data.contentfulLandingPageContent.textOverHeroImage.textOverHeroImage} />
        </IntroTextWrapper>
      </DesktopWrapper>
      <MobileWrapper>
        <IntroTextWrapper mobile>
         
        <Renderer node={data.contentfulLandingPageContent.textOverHeroImage.textOverHeroImage}/>
        </IntroTextWrapper>
      </MobileWrapper>
    </IntroContainerWrapper>
  )
}

export default Intro
