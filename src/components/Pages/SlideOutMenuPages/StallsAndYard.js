import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1 } from "../../global-styles/typography.css"
import { BreakLine } from "../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { ImageWrapper, TextContainer, SectionWrapper } from "./Space/Space.css"
import Slider from "../../ImageSlider"

const StallsAndYard = ({ data }) => {
  return (
    <>
      <SectionWrapper column>
        <TextContainer first marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="md">{data.firstSection.title}</Heading1>
          {renderRichText(data.firstSection.content)}
        </TextContainer>
        <ImageWrapper horizontal>
          <Slider imageData={data.firstSection.imageData} />
        </ImageWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md">{data.secondSection.title}</Heading1>
          {renderRichText(data.secondSection.content)}
        </TextContainer>
        <ImageWrapper>
          <Slider imageData={data.secondSection.imageData} aspectRatio="16/9" />
        </ImageWrapper>
      </SectionWrapper>
      <SectionWrapper column mobInvert>
        <ImageWrapper full>
          <Slider imageData={data.thirdSection.imageData} />
        </ImageWrapper>
        <TextContainer right full first topMarginNotRequiredMob>
          <BreakLine none />
          <Heading1 marginBottom="md">{data.thirdSection.title}</Heading1>
          {renderRichText(data.thirdSection.content)}
        </TextContainer>
      </SectionWrapper>
    </>
  )
}

export default StallsAndYard
