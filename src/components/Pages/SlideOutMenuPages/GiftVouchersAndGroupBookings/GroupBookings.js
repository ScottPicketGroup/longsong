import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"
import ContactUsForm from "./ContactForm/ContactUsForm"
import StallsAndYard from "../StallsAndYard"
import Slider from "../../../ImageSlider"

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
      imageData: data.contentfulLongsongPageContent.privateEventsSection1media,
    },
    secondSection: {
      title: data.contentfulLongsongPageContent.privateEventsSection2title,
      content:
        data.contentfulLongsongPageContent.privateEventsSection2description,
      imageData: data.contentfulLongsongPageContent.privateEventsSection2media,
    },
    thirdSection: {
      title: data.contentfulLongsongPageContent.privateEventsSection3title,
      content:
        data.contentfulLongsongPageContent.privateEventsSection3description,
      imageData: data.contentfulLongsongPageContent.privateEventsSection3media,
    },
  }

  return (
    <SlideOutPageWrapper activePage={activePage} page={3}>
      <SectionWrapper column>
        <ImageWrapper full>
          <Slider hero
            imageData={
              data.contentfulLongsongPageContent.privateEventsHeroImage
            }
          />
        </ImageWrapper>
        <TextContainer right full marginBottom="lg" first>
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
