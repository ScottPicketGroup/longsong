import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  TextContainer,
  SectionWrapper,
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
import { Button } from "../../../global-styles/GlobalStyles.css"
import { BC1 } from "../../../global-styles/typography.css"

const EventsModule = () => {

  const data = useStaticQuery(graphql`
  query landingEventsQuery {
    allContentfulLandingPageEventsModule {
      edges {
        node {
          landingPageEventsList {
            id
            eventDate(formatString: "DD.MM")
            eventName
            eventDescription {
              raw
            }
            slug
            eventMedia {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, aspectRatio: 0.8)
            }
          }
        }
      }
    }
  }
  
  
  `)

  

const {slug, eventMedia, eventDate, eventName, eventDescription } = data.allContentfulLandingPageEventsModule.edges[0].node.landingPageEventsList[0]

  return (
    <LandingPageModuleContainer>
      <EventSectionWrapper style={{ marginBottom: "3.25rem" }}>
       <TextContainer full>
          <TimeAndButtonWrapper>
            <Time style={{ margin: "0 0 3rem 0" }}>{eventDate}</Time>
         
          </TimeAndButtonWrapper>
          <BreakLine first
          style={{width: `86%`}}
          />
          <HeadingAndIntroWrapper>
            <Heading1 marginBottom="md">{eventName}</Heading1>
            <Renderer node={eventDescription} />
            <Link to={"/events/" + slug}>
              <BC1 style={{ color: "#457E5C" }}>Learn more.</BC1>
            </Link>
          </HeadingAndIntroWrapper>
          </TextContainer>
        <ImageWrapper style={{ width: "50%",  aspectRatio:"9/16" }}  >
          <Slider 
          style={{ width: "50%", minHeight: `100%`, aspectRatio:"9/16" }}
          imageData={eventMedia[0]} aspcetRatio="9/16"/>
        </ImageWrapper>
      </EventSectionWrapper>
      
    </LandingPageModuleContainer>
  )
}

export default EventsModule
