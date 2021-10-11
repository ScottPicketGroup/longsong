import React from "react"
import { BC2, Heading2 } from "../../../../global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../../global-styles/containers.css"
import { ScrollToCalenderContainer } from "../Hero.css"
import LandingDownArrow from "./LandingDownArrow"

const ScrollToCalender = ({excuteScroll}) => {
  return (
    <ScrollToCalenderContainer onClick={excuteScroll}>
      <DesktopWrapper>
        <Heading2>VIEW OUR UPCOMING EVENTS</Heading2>
      </DesktopWrapper>
      <MobileWrapper>
        <BC2>VIEW OUR UPCOMING EVENTS</BC2>
      </MobileWrapper>
      <LandingDownArrow />
    </ScrollToCalenderContainer>
  )
}

export default ScrollToCalender
