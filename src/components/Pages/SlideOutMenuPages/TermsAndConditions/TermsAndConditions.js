import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Renderer from "../../../rich-text-renderers/sample"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Bar/Space.css"

const TermsAndConditions = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query termsAndConditions {
      allContentfulPageContent {
        nodes {
          termsAndConditions {
            raw
          }
          privacyPolicy {
            raw
          }
        }
      }
    }
  `)

  return (
    <SlideOutPageWrapper activePage={activePage} page={7}>
      <BreakLine first />
      <SectionWrapper style={{marginBottom: "0"}}>
        <TextContainer>
          <Heading1>Terms & Conditions</Heading1>
        </TextContainer>
        <TextContainer sixty marginBottom="md">
          <Renderer node={data.allContentfulPageContent.nodes[0].termsAndConditions} />
        </TextContainer>
      </SectionWrapper>
      <BreakLine first />
      <SectionWrapper style={{marginBottom: "0"}}>
        <TextContainer>
          <Heading1>Privacy Policy</Heading1>
        </TextContainer>
        <TextContainer sixty marginBottom="md">
          <Renderer node={data.allContentfulPageContent.nodes[0].privacyPolicy} />
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default TermsAndConditions
