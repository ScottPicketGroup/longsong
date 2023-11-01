import React from "react"
import { Heading1 } from "../../global-styles/typography.css"
import { BreakLine } from "../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { ImageWrapper, TextContainer, SectionWrapper } from "./Bar/Space.css"
import Slider from "../../ImageSlider"
import Renderer from "../../rich-text-renderers/sample"

const PageSections = ({ data }) => {
console.log(data)
  return (
    <>
      <SectionWrapper column>
        <TextContainer first marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="md">{data.firstSection.title}</Heading1>
          <Renderer node={data.firstSection.content} />
        </TextContainer>
        <ImageWrapper horizontal first>
          <Slider imageData={data.firstSection.imageData} />
        </ImageWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md">{data.secondSection.title}</Heading1>
          <Renderer node={data.secondSection.content} />
        </TextContainer>
        <ImageWrapper>
          <Slider imageData={data.secondSection.imageData} aspectRatio="9/14" />
        </ImageWrapper>
      </SectionWrapper>
    <SectionWrapper column mobInvert>
        <ImageWrapper full>
          <Slider imageData={data.thirdSection.imageData} aspectRatio="3/2" />
        </ImageWrapper>
        <TextContainer right full first topMarginNotRequiredMob>
          <BreakLine none />
          <Heading1 marginBottom="md">{data.thirdSection.title}</Heading1>
          <Renderer node={data.thirdSection.content}/>
        </TextContainer>
      </SectionWrapper>
    </>
  )
}

export default PageSections
