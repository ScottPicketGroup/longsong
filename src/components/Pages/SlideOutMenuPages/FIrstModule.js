import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1 } from "../../global-styles/typography.css"
import { BreakLine } from "../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { ImageWrapper, TextContainer, SectionWrapper } from "./Space/Space.css"
import Slider from "../../ImageSlider"
import Renderer from "../../rich-text-renderers/sample"
import { graphql, useStaticQuery } from "gatsby"

const FirstModule = () => {

    const data = useStaticQuery(graphql`
    query firstModule {
        contentfulLongsongPageContent {
          privateSection4Title
          privatEventsSection4Description {
            raw
          }
          privateEventsSection4Image {
            gatsbyImageData
          }
        }
      }
      
  `)

  const {privateSection4Title, privatEventsSection4Description, privateEventsSection4Image} = data.contentfulLongsongPageContent

  return (
    <>
      <SectionWrapper column>
        <TextContainer first marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="md">{privateSection4Title}</Heading1>
          <Renderer node={privatEventsSection4Description} />
          
        </TextContainer>
        <ImageWrapper horizontal>
          <Slider imageData={privateEventsSection4Image} />
        </ImageWrapper>

  
      </SectionWrapper>
    </>
  )
}

export default FirstModule
