import React from "react"
import { Heading1 } from "../../global-styles/typography.css"
import { BreakLine } from "../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { ImageWrapper, TextContainer, SectionWrapper } from "./Bar/Space.css"
import Slider from "../../ImageSlider"
import Renderer from "../../rich-text-renderers/sample"
import { graphql, useStaticQuery } from "gatsby"

const FirstModule = ({data}) => {


  const {
    title,
    content,
    imageData,
  } = data.fourthSection
  console.log('pageData', data.fourthSection)

  return (
    <>
      <SectionWrapper column>
        <TextContainer first marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="md">{title}</Heading1>
          <Renderer node={content} marginBottom="md"/>
         
        </TextContainer>
        <ImageWrapper horizontal>
          <Slider imageData={imageData} />
        </ImageWrapper>
      </SectionWrapper>
    </>
  )
}

export default FirstModule
