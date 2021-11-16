import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  TextContainer,
  EventSectionWrapper,
} from "../../SlideOutMenuPages/Space/Space.css"
import Slider from "../../../ImageSlider"
import Renderer from "../../../rich-text-renderers/sample"
import {
  HeadingAndIntroWrapper,
  LandingPageModuleContainer,
  TimeAndButtonWrapper,
} from "./index.css"
import { Time } from "../../../../templates/EventTemplate/index.css"

const EventsModule = () => {
  const data = useStaticQuery(graphql`
    query landingEventsQuery {
      allContentfulLandingPageEventsModule(
        filter: { id: { eq: "00760aef-4841-5f1b-ad1a-a1f2336506ae" } }
      ) {
        edges {
          node {
            id
            landingPageEventsList {
              id
              eventDate(formatString: "DD.MM")
              eventName
              eventDescription {
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
      }
    }
  `)

  const { eventMedia, eventDate, eventName, eventDescription } =
    data.allContentfulLandingPageEventsModule.edges[0].node
      .landingPageEventsList[0]

  return (
    <LandingPageModuleContainer>
      <EventSectionWrapper style={{ marginBottom: "3.25rem" }}>
        <TextContainer full>
          <TimeAndButtonWrapper>
            <Time style={{ margin: "0 0 3rem 0" }}>{eventDate}</Time>
          </TimeAndButtonWrapper>
          <BreakLine first style={{ width: `86%` }} />
          <HeadingAndIntroWrapper>
            <Heading1 marginBottom="md">{eventName}</Heading1>
            <Renderer node={eventDescription} />
          </HeadingAndIntroWrapper>
        </TextContainer>
        <ImageWrapper>
          <Slider imageData={eventMedia[0]} aspcetRatio="9/16" />
        </ImageWrapper>
      </EventSectionWrapper>
    </LandingPageModuleContainer>
  )
}

export default EventsModule

export const EventsImageWrapper = styled(ImageWrapper)`
  aspect-ratio: 3/4;
  width: 50%;

  @media (min-width: 451px) {
    width: 100%;
  }
`
