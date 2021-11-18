import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
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
import { Helmet } from "react-helmet"

const GroupBookings = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query PrivateEvent {
      contentfulLongsongPageContent(
        id: { eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e" }
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
          <Slider
            hero
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

          <Renderer
            node={data.contentfulLongsongPageContent.groupBookingsDescription}
          />

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
      <StallsAndYard data={newData} margin="normal" />
      <FirstModule />
      <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>Enquiry Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ExternalForm id="CONTACTA_61960f035e0c880c5a61ab16"/>
          {/* <ContactUsForm /> */}
        </TextContainer>
      </SectionWrapper>
      <Helmet>
        <script type="text/javascript" async>
          var script = document.createElement("script"); script.type =
          "text/javascript"; script.src =
          "https://forms.contacta.io/61960f035e0c880c5a61ab16.js";
          document.getElementsByTagName("head")[0].appendChild(script);
        </script>
        <div id="CONTACTA_61960f035e0c880c5a61ab16"></div>
      </Helmet>
    </SlideOutPageWrapper>
  )
}

export default GroupBookings

export const ExternalForm = styled.div`
  .contacta-webform-table {
    width: 100%;
    table-layout: fixed;
    display: flex;
    flex-wrap: wrap;
  }

  .contacta-row {
    width: 50%;
    margin-bottom: 2.25rem;
    :first-child {
      width: 0;
    }
    :nth-child(5) {
      width: 50%;
      color: black;
    }
    :nth-child(6) {
      width: 50%;
    }
    :nth-child(7) {
      width: 50%;
    }
    :nth-child(8) {
      width: 50%;
    }
    :nth-child(9) {
      width: 100%;
    }
    :nth-child(10) {
      width: 100%;
    }
    :nth-child(11) {
      width: 100%;
    }
    :nth-child(12) {
      width: 100%;
    }
  }

  .label-option{
    display: flex;
    gap: 1.5rem;
  }
  input {
    height: 2rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")};
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: normal;
    }
    :focus {
      outline: none;
      background: transparent;
      font-family: normal;
      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: white;
      font-size: 1rem;
      background: transperant;
      font-family: normal;
    }
    ::-moz-focus-outer {
      color: white;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  label {
    color: white;
  }
  textarea {
    font-family: normal;
    width: 100%;
    height: 10rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    color: white;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#B1B1B1")};
    overflow: hidden;
    ::placeholder {
      font-family: normal;

      font-size: 1rem;
      margin-bottom: 10rem;
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
    }
    :focus {
      outline: none;
      background: transparent;

      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: white;
      font-size: 1rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    ::-moz-focus-outer {
      color: white;
    }
  }

  button {
    background: transparent;
    border: 1px solid white;
    width: 35%;
    color: white;
    padding: 0.5rem 0.75rem;
    transition: all 0.2s ease-in-out;
    :hover {
      color: #2b3c31;
      background: white;
    }
  }
`