import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
import Renderer from "../../../rich-text-renderers/sample"
import FirstModule from "../FIrstModule"

const GroupBookings = ({ activePage }) => {
  const data = useStaticQuery(graphql`
  query PrivateEvent {
    contentfulLongsongPageContent(id: {eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e"}) {
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
      sampleMenuOne {
        title
        file {
          url
          fileName
        }
      }
      sampleMenuTwo {
        title
        file {
          url
          fileName
        }
      }
      id
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
          <Heading1 marginBottom="md">
            {data.contentfulLongsongPageContent.groupBookingTitle}
          </Heading1>
         
          <Renderer node={data.contentfulLongsongPageContent.groupBookingsDescription} />
         
          <Button marginBottom="" style={{ marginRight: `2rem` }}>
            <a
              href={data.contentfulLongsongPageContent.sampleMenuOne.file.url}
              target="_blank"
              rel="noreferrer"
            >
              FUNCTIONS PACKAGE 
            </a>
          </Button>
          <Button>
            <a
              href={data.contentfulLongsongPageContent.sampleMenuTwo.file.url}
              target="_blank"
              rel="noreferrer"
            >
              WEDDING PACKAGE
            </a>
          </Button>
        </TextContainer>
      </SectionWrapper>
      <StallsAndYard data={newData} />
      <FirstModule />
      <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>Enquiry Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ContactUsForm />
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GroupBookings
