import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
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

import { TextContainer } from "../../components/Pages/SlideOutMenuPages/Space/Space.css"
import { Button } from "../../components/global-styles/GlobalStyles.css"
import { BreakLine } from "../../components/MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import Slider from "../../components/ImageSlider"
import { useStaticQuery, graphql, Link } from "gatsby"
import EventPageRenderer from "../../components/rich-text-renderers/eventPageRenderer"
import useActivePage from "../../components/hooks/ActivePage"

const EventTemplate = ({ pageContext }) => {
  const eventData = pageContext.eventData
  const eventDateTime = eventData.eventDate.split(" ")
  const [imageData, setImageData] = useState([])
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulLongsongEvents {
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
    data.allContentfulLongsongEvents.edges.forEach(({ node }) => {
      if (node.id === eventData.id) setImageData(node.eventMedia)
    })
  }, [eventData, data])

  return (
    <Layout fd="column">
      <Seo title="Home" />
      <EventHeroContainer>
        <ImageWrapper>
          {imageData.length > 0 && <Slider imageData={imageData} />}
          <StaticImage
            className="play-button"
            src="../../images/EventTemplate/playbutton.png"
            alt="play-button"
          />
          {/* <StaticImage
            className="fullscreen-button"
            src="../../images/EventTemplate/fullscreenbutton.png"
            alt="fullscreen-button"
          /> */}
        </ImageWrapper>
        <DateContainer>
          <DateWrapper>
            <Heading2>{eventDateTime[0]}</Heading2>
            <Time>{eventDateTime[1]}</Time>
          </DateWrapper>
          <ButtonWrapper>
            {eventData.bookNowButtonLink && <Button>BOOK NOW</Button>}
            <Link to="/">
              <Button onClick={()=> handleOpenMenuClick(6)}>RETURN TO CALENDAR OVERVIEW</Button>
            </Link>
          </ButtonWrapper>
        </DateContainer>
      </EventHeroContainer>
      <EventContentContainer>
        <TextContainer marginBottom="lg">
          <BreakLine none style={{ marginBottom: 56 }} />
          <Heading1 marginBottom="md">{eventData.eventName}</Heading1>
          <EventPageRenderer node={eventData.eventDescription} />
          {/* <Heading1 marginBottom="md">{eventData.drinksSpecialTitle}</Heading1>
          <EventPageRenderer node={eventData.drinksSpecialDetails} />
          <Heading1 marginBottom="md">{eventData.foodSpecialTitle}</Heading1>
          <EventPageRenderer node={eventData.foodSpecialDetails} /> */}
        </TextContainer>
      </EventContentContainer>
    </Layout>
  )
}

export default EventTemplate
