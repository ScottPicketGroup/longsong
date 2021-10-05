import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import { BC3, Heading1 } from "../../global-styles/typography.css"
import { BreakLine } from "../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { ImageWrapper, TextContainer, SectionWrapper } from "./Space/Space.css"

import {
  DesktopWrapper,
  MobileWrapper,
} from "../../global-styles/containers.css"

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
          <GatsbyImage
            image={data.firstSection.imageData}
            alt={data.firstSection.imageTitle}
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
        </ImageWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md">{data.secondSection.title}</Heading1>
          {renderRichText(data.secondSection.content)}
        </TextContainer>
        <ImageWrapper>
          <GatsbyImage
            image={data.secondSection.imageData}
            alt={data.secondSection.imageTitle}
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
        </ImageWrapper>
      </SectionWrapper>

      <SectionWrapper column>
        <ImageWrapper full>
          <GatsbyImage
            image={data.thirdSection.imageData}
            alt={data.thirdSection.imageTitle}
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
