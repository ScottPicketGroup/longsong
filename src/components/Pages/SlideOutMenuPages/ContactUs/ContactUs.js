import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"
import ContactUsForm from "./ContactUsForm"

const ContactUs = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query ContactUs {
      contentfulLongsongPageContent {
        contactUsDescription {
          raw
        }
      }
    }
  `)

  return (
    <SlideOutPageWrapper activePage={activePage} page={5} contact>
      <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>Contact Us</Heading1>
        </TextContainer>
        <TextContainer sixty marginBottom="md">
          {renderRichText(
            data.contentfulLongsongPageContent.contactUsDescription
          )}
        </TextContainer>
      </SectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <Heading1> Contact Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ContactUsForm />
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default ContactUs
