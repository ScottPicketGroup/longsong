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
<<<<<<< HEAD
          <GatsbyImage
            image={data.secondSection.imageData}
            alt={data.secondSection.imageTitle}
            style={{aspectRatio: `9/16`}}
          />
          <DesktopWrapper>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              PREVIOUS | NEXT
            </BC3>
          </DesktopWrapper>
          <MobileWrapper imageControls>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              1/2
            </BC3>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              VIEW FULLSCREEN
            </BC3>
          </MobileWrapper>
=======
          <Slider imageData={data.secondSection.imageData} />
>>>>>>> a46762fe4e53922b2f0e24dcfb48985b84c122b8
        </ImageWrapper>
      </SectionWrapper>
      <SectionWrapper column>
        <ImageWrapper full>
          <Slider imageData={data.thirdSection.imageData} />
        </ImageWrapper>
        <TextContainer right full first>
          <BreakLine none />
          <Heading1 marginBottom="md">{data.thirdSection.title}</Heading1>
          {renderRichText(data.thirdSection.content)}
        </TextContainer>
      </SectionWrapper>
    </>
  )
}

export default StallsAndYard
