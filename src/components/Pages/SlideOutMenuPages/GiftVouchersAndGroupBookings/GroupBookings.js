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
      contentfulLongsongPageContent(
        contentful_id: { eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e" }
      ) {
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
     
    </SlideOutPageWrapper>
  )
}

export default GroupBookings
