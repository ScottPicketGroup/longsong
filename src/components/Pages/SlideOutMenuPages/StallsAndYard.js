import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import { BC3, Heading1 } from "../../global-styles/typography.css"
import { BreakLine } from "../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { ImageWrapper, TextContainer, SectionWrapper } from "./Space/Space.css"

import {
  DesktopWrapper,
  MobileWrapper,
} from "../../global-styles/containers.css"

const StallsAndYard = () => {
  const data = useStaticQuery(graphql`
    query StallsAndYard {
      contentfulLongsongPageContent {
        theStallsTitle
        theStallsMedia {
          gatsbyImageData
          title
        }
        theStallsDescription {
          raw
        }
        theYardTitle
        theYardMedia {
          gatsbyImageData
          title
        }
        theYardContent {
          raw
        }
        featuredPerformerTitle
        featuredPerformerDescription {
          raw
        }
        featuredPerformerMedia {
          gatsbyImageData
          title
        }
      }
    }
  `)

  return (
    <>
      <SectionWrapper column>
        <TextContainer first marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="md">
            {data.contentfulLongsongPageContent.theStallsTitle}
          </Heading1>
          {renderRichText(
            data.contentfulLongsongPageContent.theStallsDescription
          )}
        </TextContainer>
        <ImageWrapper horizontal>
          <GatsbyImage
            image={
              data.contentfulLongsongPageContent.theStallsMedia[0]
                .gatsbyImageData
            }
            alt={data.contentfulLongsongPageContent.theStallsMedia[0].title}
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
          <Heading1 marginBottom="md">
            {data.contentfulLongsongPageContent.theYardTitle}
          </Heading1>
          {renderRichText(data.contentfulLongsongPageContent.theYardContent)}
        </TextContainer>
        <ImageWrapper>
          <GatsbyImage
            image={
              data.contentfulLongsongPageContent.theYardMedia[0].gatsbyImageData
            }
            alt={data.contentfulLongsongPageContent.theYardMedia[0].title}
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
            image={
              data.contentfulLongsongPageContent.featuredPerformerMedia
                .gatsbyImageData
            }
            alt={
              data.contentfulLongsongPageContent.featuredPerformerMedia.title
            }
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
          <Heading1>
            {data.contentfulLongsongPageContent.featuredPerformerTitle}
          </Heading1>
          {renderRichText(
            data.contentfulLongsongPageContent.featuredPerformerDescription
          )}
        </TextContainer>
      </SectionWrapper>
    </>
  )
}

export default StallsAndYard
