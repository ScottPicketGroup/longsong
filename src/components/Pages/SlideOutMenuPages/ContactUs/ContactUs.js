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
import Renderer from "../../../rich-text-renderers/sample"

const ContactUs = ({ activePage }) => {
  // const data = useStaticQuery(graphql`
  //   query ContactUs {
  //     contentfulLongsongPageContent(contentful_id: {eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e"}) {
  //       contactUsDescription {
  //         raw
  //       }
  //     }
  //   }
  // `)

  return (
    <SlideOutPageWrapper activePage={activePage} page={5} contact>
      {/* <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>Contact Us</Heading1>
        </TextContainer>
        <TextContainer sixty marginBottom="md">
          <Renderer node={  data.contentfulLongsongPageContent.contactUsDescription} />
        </TextContainer>
      </SectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <Heading1> Contact Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ContactUsForm />
        </TextContainer>
      </SectionWrapper> */}
    </SlideOutPageWrapper>
  )
}

export default ContactUs
