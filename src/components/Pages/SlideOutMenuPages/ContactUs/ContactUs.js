import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { BC3, BC2, Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"
import ContactUsForm from "./ContactUsForm"

const ContactUs = ({ activePage }) => {
  return (
    <SlideOutPageWrapper activePage={activePage} page={5}>
      <BreakLine first/>
      <SectionWrapper>
        <TextContainer>
        <Heading1> Contact Us</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <BC2 marginBottom="md">
            Longrain and Longsong are the two latest editions to the Pickett &
            Co. stable of venues. Fill in your details here to send us a message
            and tick the box to be first to hear about all the exciting things
            we’ve got planned. We’re growing fast and if you’re interested in
            being part of the family, we’d love to hear from you.
          </BC2>
          <BC2 marginBottom="md">
            Follow the links at the bottom of the page to our social pages so
            you don’t miss any of the action.
          </BC2>
          <BC2 marginBottom="md">
            Opening hours: <br />
            Monday – Thursday 5.30 pm – late
            <br />
            Friday 12 pm – 3 pm | 5 pm – late <br />
            Saturday 5 pm – late
            <br />
          </BC2>
          <BC2 marginBottom="md">WALKINS WELCOME</BC2>
          
          <BC2 marginBottom="xl">PLEASE NOTE, GROUPS OF 8 OR LARGER ARE REQUIRED TO SELECT THE BANQUET MENU</BC2>
        </TextContainer>

        
      </SectionWrapper>
      <SectionWrapper>
      <TextContainer >
        <Heading1> Contact Form</Heading1>
        </TextContainer>
        <TextContainer sixty >
        <ContactUsForm />
        </TextContainer>
      
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default ContactUs
