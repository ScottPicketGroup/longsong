import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  Heading1,
  Heading2,
  BC3,
} from "../../components/global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../components/global-styles/containers.css"

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

const EventTemplate = ({ pageContext }) => {
  const eventData = pageContext.eventData
  const eventDateTime = eventData.eventDate.split(" ")
  return (
    <Layout fd="column">
      <Seo title="Home" />
      <EventHeroContainer>
        <ImageWrapper>
          <GatsbyImage
            image={eventData.eventMedia[0].gatsbyImageData}
            alt={eventData.eventMedia[0].title}
          />
          <StaticImage
            className="play-button"
            src="../../images/EventTemplate/playbutton.png"
            alt="play-button"
          />
          <StaticImage
            className="fullscreen-button"
            src="../../images/EventTemplate/fullscreenbutton.png"
            alt="fullscreen-button"
          />
          <DesktopWrapper>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              PREVIOUS | NEXT
            </BC3>
          </DesktopWrapper>
          <MobileWrapper imageControls>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              1/2
            </BC3>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              VIEW FULLSCREEN
            </BC3>
          </MobileWrapper>
        </ImageWrapper>
        <DateContainer>
          <DateWrapper>
            <Heading2>{eventDateTime[0]}</Heading2>
            <Time>{eventDateTime[1]}</Time>
          </DateWrapper>
          <ButtonWrapper>
            <Button>VIEW NEXT DAY</Button>
            <Button>VIEW PREVIOUS DAY</Button>
          </ButtonWrapper>
        </DateContainer>
      </EventHeroContainer>
      <EventContentContainer>
        <TextContainer marginBottom="lg">
          <BreakLine none />
          <Heading1 marginBottom="lg">{eventData.eventName}</Heading1>
          {renderRichText(eventData.eventDescription)}
          <Heading1 marginBottom="lg">{eventData.drinksSpecialTitle}</Heading1>
          {renderRichText(eventData.drinksSpecialDetails)}
          <Heading1 marginBottom="lg">{eventData.foodSpecialTitle}</Heading1>
          {renderRichText(eventData.foodSpecialDetails)}
          <Button>RETURN TO CALENDAR OVERVIEW</Button>
        </TextContainer>
      </EventContentContainer>
    </Layout>
  )
}

export default EventTemplate
