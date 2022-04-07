import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { SlideOutPageWrapper, TextContainer, SectionWrapper } from "../Bar/Space.css"
import Renderer from "../../../rich-text-renderers/sample"

const WhatsOn = ({ activePage }) => {
  const data = useStaticQuery(graphql`
  query WhatsOnOPageQuery {
    allContentfulPageContent(
      filter: {id: {eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e"}}
    ) {
      nodes {
        whatsOnPageHeading
        whatsonpageintroduction {
          raw
        }
        id
      }
    }
  }
  
  `)

  const newData = data.allContentfulPageContent.nodes[0]

  return (
    <SlideOutPageWrapper activePage={activePage} page={6} contact>
      <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>{newData.whatsOnPageHeading}</Heading1>
        </TextContainer>
        <TextContainer sixty marginBottom="md">
          <Renderer node={newData.whatsonpageintroduction} />
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default WhatsOn
