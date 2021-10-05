import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { BC3, Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"
import ContactUsForm from "./ContactForm/ContactUsForm"
import StallsAndYard from "../StallsAndYard"

const GroupBookings = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query PrivateEvent {
      contentfulLongsongPageContent {
        privateEventsHeroImage {
          title
          gatsbyImageData
        }
        groupBookingTitle
        groupBookingsDescription {
          raw
        }
        privateEventSection1title
        privateEventSection1description {
          raw
        }
        privateEventsSection1media {
          gatsbyImageData
          title
        }
        privateEventsSection2title
        privateEventsSection2description {
          raw
        }
        privateEventsSection2media {
          title
          gatsbyImageData
        }
        privateEventsSection3title
        privateEventsSection3description {
          raw
        }
        privateEventsSection3media {
          title
          gatsbyImageData
        }
      }
    }
  `)
  const newData = {
    firstSection: {
      title: data.contentfulLongsongPageContent.privateEventSection1title,
      content:
        data.contentfulLongsongPageContent.privateEventSection1description,
      imageData:
        data.contentfulLongsongPageContent.privateEventsSection1media[0]
          .gatsbyImageData,
      imageTitle:
        data.contentfulLongsongPageContent.privateEventsSection1media[0].title,
    },
    secondSection: {
      title: data.contentfulLongsongPageContent.privateEventsSection2title,
      content:
        data.contentfulLongsongPageContent.privateEventsSection2description,
      imageData:
        data.contentfulLongsongPageContent.privateEventsSection2media[0]
          .gatsbyImageData,
      imageTitle:
        data.contentfulLongsongPageContent.privateEventsSection2media[0].title,
    },
    thirdSection: {
      title: data.contentfulLongsongPageContent.privateEventsSection3title,
      content:
        data.contentfulLongsongPageContent.privateEventsSection3description,
      imageData:
        data.contentfulLongsongPageContent.privateEventsSection3media[0]
          .gatsbyImageData,
      imageTitle:
        data.contentfulLongsongPageContent.privateEventsSection3media[0].title,
    },
  }
  return (
    <SlideOutPageWrapper activePage={activePage} page={3}>
      <SectionWrapper column>
        <ImageWrapper full>
          <GatsbyImage
            image={
              data.contentfulLongsongPageContent.privateEventsHeroImage[0]
                .gatsbyImageData
            }
            alt={
              data.contentfulLongsongPageContent.privateEventsHeroImage[0].title
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

        <TextContainer right full marginBottom="lg">
          <BreakLine none />
          <Heading1>
            {data.contentfulLongsongPageContent.groupBookingTitle}
          </Heading1>
          <Heading1 marginBottom="md">Video</Heading1>
          {renderRichText(
            data.contentfulLongsongPageContent.groupBookingsDescription
          )}
          <Button marginBottom="" style={{ marginRight: `2rem` }}>
            FUNCTIONS PACKAGE 1
          </Button>
          <Button>FUNCTIONS PACKAGE 2</Button>
        </TextContainer>
      </SectionWrapper>
      <StallsAndYard data={newData} />
      <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>Contact Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ContactUsForm />
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GroupBookings
