import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  Heading1,
  Heading2,
} from "../../components/global-styles/typography.css"

import {
  EventHeroContainer,
  EventContentContainer,
  DateContainer,
  DateWrapper,
  Time,
  ButtonWrapper,
  ImageWrapper,
} from "./index.css"

import { TextContainer } from "../../components/Pages/SlideOutMenuPages/Bar/Space.css"
import { Button } from "../../components/global-styles/GlobalStyles.css"
import { BreakLine } from "../../components/MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import Slider from "../../components/ImageSlider"
import { useStaticQuery, graphql, Link } from "gatsby"
import EventPageRenderer from "../../components/rich-text-renderers/eventPageRenderer"
import useActivePage from "../../components/hooks/ActivePage"

const EventTemplate = ({ pageContext }) => {
  const eventData = pageContext.eventData
  const eventDateTime = eventData.eventDate
  const [imageData, setImageData] = useState([])
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulEvents {
        edges {
          node {
            id
            eventMedia {
              title
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const { handleOpenMenuClick } = useActivePage()

  useEffect(() => {
    data.allContentfulEvents.edges.forEach(({ node }) => {
      if (node.id === eventData.id && node.eventMedia)
        setImageData(node.eventMedia)
    })
  }, [eventData, data])

  return (
    <Layout fd="column">
      <Seo title="Home" />
      <EventHeroContainer>
        <ImageWrapper>
          {imageData ? (
            <>
              <Slider imageData={imageData} />
            </>
          ) : (
            <Heading1>No Media</Heading1>
          )}
        </ImageWrapper>
        <DateContainer>
          <DateWrapper>
            <Heading2>
              {eventDateTime.slice(8, 10) +
                "." +
                eventDateTime.slice(5, 7) +
                "." +
                eventDateTime.slice(2, 4)}
              <br />
            </Heading2>
            <Time>{eventDateTime.slice(11, 16)}</Time>
          </DateWrapper>
          <ButtonWrapper>
            {eventData.bookNowButtonLink && <Button>BOOK NOW</Button>}
            <Link to="/">
              <Button onClick={() => handleOpenMenuClick(6)}>
                RETURN TO CALENDAR OVERVIEW
              </Button>
            </Link>
          </ButtonWrapper>
        </DateContainer>
      </EventHeroContainer>
      <EventContentContainer>
        <TextContainer marginBottom="lg">
          <BreakLine none style={{ marginBottom: 56 }} />
          <Heading1 marginBottom="md">{eventData.eventName}</Heading1>
          {eventData.eventDescription ? (
            <EventPageRenderer node={eventData.eventDescription} />
          ) : (
            <Heading1>No Description</Heading1>
          )}
        </TextContainer>
      </EventContentContainer>
    </Layout>
  )
}

export default EventTemplate
