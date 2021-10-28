import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { SlideOutPageWrapper, TextContainer, SectionWrapper } from "../Space/Space.css"
import Renderer from "../../../rich-text-renderers/sample"

const WhatsOn = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query WhatsOnOPageQuery {
      allContentfulLongsongPageContent {
        nodes {
          whatsOnPageHeading
          whatsonpageintroduction {
            raw
          }
        }
      }
    }
  `)

  const newData = data.allContentfulLongsongPageContent.nodes[1]

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
