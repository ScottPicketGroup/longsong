import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { BC3, BC2, Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"

const GroupBookings = ({ activePage }) => {
  return (
    <SlideOutPageWrapper activePage={activePage} page={3}>
      <SectionWrapper column>
        <ImageWrapper full>
          <StaticImage
            src="../../../../images/GroupBookingsAndGiftVouchers/groupBookings.png"
            alt="gift voucher image"
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

        <TextContainer right full>
          <BreakLine none />
          <Heading1> Group Bookings</Heading1>
          <Heading1 marginBottom="md"> Video</Heading1>
          <BC2 marginBottom="lg">
            Longsong is available for private functions. We can hold from 10 up
            to 180 people. For more information please contact us:
            info@longsong.com.au.
          </BC2>
          <Button marginBottom="xl">ARRANGE A BOOKING</Button>
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GroupBookings
