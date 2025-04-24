import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"

import Slider from "../../../ImageSlider"
import Renderer from "../../../rich-text-renderers/sample"
import {
  HeadingAndIntroWrapper,
  LandingPageModuleContainer,
  TimeAndButtonWrapper,
} from "./index.css"
import { Time } from "../../../../templates/EventTemplate/index.css"
import { SectionWrapper } from "../../SlideOutMenuPages/Bar/Space.css"

const EventsModule = () => {
  const data = useStaticQuery(graphql`
    query landingEventsQuery {
      contentfulLandingPageEventsModule(
        id: { eq: "cea128a7-db15-5a6d-8418-af613bc2846d" }
      ) {
        id
        landingPageEventsList {
          id
          eventDate(formatString: "DD.MM")
          eventName
          eventDescriptionPreview {
            raw
          }
          slug
          eventMedia {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              aspectRatio: 0.8
            )
          }
        }
      }
    }
  `)
  const [events] = useState(
    data.contentfulLandingPageEventsModule.landingPageEventsList
  )
  console.log('events', events)
  return (
    <LandingPageModuleContainer>
      {events && !events[0].eventName.includes("dummy") &&
        events.map((event, i) => (
          <EventSectionWrapper
            style={{ marginBottom: "3.25rem" }}
            key={i}
            i={i}
          >
            <TextContainer full i={i}>
              <TextWrapper>
                <TimeAndButtonWrapper>
                  <Time style={{ margin: "0 0 3rem 0" }}>
                    {event.eventDate}
                  </Time>
                </TimeAndButtonWrapper>
                <BreakLine first style={{ width: `100%` }} />
                <HeadingAndIntroWrapper>
                  <Heading1 marginBottom="md">{event.eventName}</Heading1>
                  <Renderer node={event.eventDescriptionPreview} />
                </HeadingAndIntroWrapper>
              </TextWrapper>
            </TextContainer>
            <ImageWrapper i={i}>
              <Slider imageData={event.eventMedia[0]} aspcetRatio="9/16" />
            </ImageWrapper>
          </EventSectionWrapper>
        ))}
    </LandingPageModuleContainer>
  )
}

export default EventsModule

export const EventSectionWrapper = styled(SectionWrapper)`
  display: flex;
  margin-top: ${props => (props.i !== 0 ? "5.6rem" : "3.25rem")};
  @media (max-width: 450px) {
    :first-child {
      margin-bottom: 3.25rem;
      margin-top: 0;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.i % 2 ? "flex-end" : "")};
  order: ${props => (props.i % 2 ? 1 : 0)};
  width: ${props => (props.full ? "50%" : props.sixty ? "60%" : "40%")};

  float: right;
  margin-top: ${props => (props.first ? "56px" : "")};
  @media (max-width: 450px) {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: ${props => props.i > 0 && "3.5rem"};
  }
`
export const TextWrapper = styled.div`
  width: 90%;
  @media (max-width: 450px) {
    width: 100%;
  }
`

export const ImageWrapper = styled.div`
  width: ${props => (props.full ? "100%" : props.horizontal ? "80%" : "50%")};
  margin-top: ${props => (props.first ? "2.65rem" : "")};
  @media (max-width: 450px) {
    width: 100%;

    margin-bottom: ${props => (props.marginRequired ? "3.5rem" : "")};
  }
`
