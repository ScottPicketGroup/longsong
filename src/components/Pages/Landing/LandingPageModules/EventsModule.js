import React from "react"
import { Link } from "gatsby"

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

const EventsModule = ({ data }) => {
  return (
    <LandingPageModuleContainer>
      <EventSectionWrapper column style={{ marginBottom: "3.25rem" }}>
        <EventSectionWrapper style={{ justifyContent: "space-between" }}>
          <TimeAndButtonWrapper>
            <Time style={{ margin: "0 0 3rem 0" }}>{data[0].eventDate}</Time>
            {data[0].bookNowData && (
              <Button marginBottom="lg" style={{ width: "80%" }}>
                BOOK NOW
              </Button>
            )}
          </TimeAndButtonWrapper>

          <HeadingAndIntroWrapper>
            <Heading1 marginBottom="md">{data[0].eventName}</Heading1>
            <Renderer node={data[0].eventDescription} />
            <Link
              to={
                "/events/" + data[0].eventName.toLowerCase().replace(" ", "-")
              }
            >
              <BC1 style={{ color: "#457E5C" }}>Learn more.</BC1>
            </Link>
          </HeadingAndIntroWrapper>
        </EventSectionWrapper>
        <ImageWrapper style={{ width: "100%" }} horizontal>
          <Slider imageData={data[0].eventMedia[0]} />
        </ImageWrapper>
      </EventSectionWrapper>
      <SectionWrapper>
        <TextContainer>
          <Time style={{ margin: "0 0 3rem 0" }}>{data[1].eventDate}</Time>
          {data[0].bookNowData && (
            <Button marginBottom="lg" style={{ width: "60%" }}>
              BOOK NOW
            </Button>
          )}
          <BreakLine none />
          <Heading1 marginBottom="md">{data[1].eventName}</Heading1>
          <Renderer node={data[1].eventDescription} />
          <Link
            to={"/events/" + data[1].eventName.toLowerCase().replace(" ", "-")}
          >
            <BC1 style={{ color: "#457E5C" }}>Learn more.</BC1>
          </Link>
        </TextContainer>
        <ImageWrapper>
          <Slider imageData={data[1].eventMedia[0]} aspectRatio="3/4" />
        </ImageWrapper>
      </SectionWrapper>
    </LandingPageModuleContainer>
  )
}

export default EventsModule
