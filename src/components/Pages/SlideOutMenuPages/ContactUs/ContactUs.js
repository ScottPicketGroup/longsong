import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Bar/Space.css"
import styled from "styled-components"
import Renderer from "../../../rich-text-renderers/sample"
import { Helmet } from "react-helmet"

const ContactUs = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query ContactUs {
      contentfulPageContent(
        id: { eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e" }
      ) {
        contactUsDescription {
          raw
        }
        id
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
          <Renderer node={data.contentfulPageContent.contactUsDescription} />
        </TextContainer>
      </SectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <Heading1> Contact Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ExternalForm id="CONTACTA_61960d1629fed0387a8dae7f" />
          {/* <ContactUsForm /> */}
        </TextContainer>
      </SectionWrapper>
      <Helmet>
        <script type="text/javascript" async>
          var script = document.createElement("script"); script.type =
          "text/javascript"; script.src =
          "https://forms.contacta.io/61960d1629fed0387a8dae7f.js";
          document.getElementsByTagName("head")[0].appendChild(script);
        </script>
        <div id="CONTACTA_61960d1629fed0387a8dae7f"></div>
      </Helmet>
    </SlideOutPageWrapper>
  )
}

export default ContactUs

export const ExternalForm = styled.div`
  .checkbox-option {
    margin-top: -0.75rem;
    margin-left: -1rem;
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid #cacece;
    transform: scale(0.4);
    padding: 25px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  .checkbox-option:checked {
    background-color: #0f231d;
    border: none;
  }

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
      width: 100%;
    }
    :nth-child(6) {
      width: 100%;
      display: flex;
    }
  }

  .label-option {
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

  button .btn,
  .btn-primary {
    font-family: normal;
    font-size: 1rem !important;
    background: transparent !important;
    text-transform: uppercase !important;
    line-height: 46px !important;
    border-radius: 0px !important;
    border: 1px solid white;
    width: 225px !important;
    color: white;
    padding: 0rem 2.75rem !important;
    transition: all 0.2s ease-in-out;
    :hover {
      color: #2b3c31 !important;
      background: white !important;
    }
  }
`
