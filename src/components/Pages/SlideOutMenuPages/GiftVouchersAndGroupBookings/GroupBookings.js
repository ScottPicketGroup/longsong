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
import ContactUsForm from "./ContactForm/ContactUsForm"

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
          <Heading1>Private Events</Heading1>
          <Heading1 marginBottom="md">Video</Heading1>
          <BC2 marginBottom="lg">
            Longsong is available for private functions. We can hold from 10 up
            to 180 people. For more information please contact us:
            info@longsong.com.au.
          </BC2>
          <Button marginBottom="xl">FUNCTIONS PACKAGE 1</Button>
        </TextContainer>
        <TextContainer right full>
          <BreakLine none />
          <Heading1>Private Events</Heading1>
          <Heading1 marginBottom="md">Video</Heading1>
          <BC2 marginBottom="lg">
            Longsong is available for private functions. We can hold from 10 up
            to 180 people. For more information please contact us:
            info@longsong.com.au.
          </BC2>
          <Button marginBottom="xl">FUNCTIONS PACKAGE 2</Button>
        </TextContainer>
      </SectionWrapper>
      <SectionWrapper column>
        <TextContainer first>
          <BreakLine none />
          <Heading1 marginBottom="md"> The Stalls</Heading1>
          <BC2 marginBottom="lg">
            Our casual dining area is perfect for sit down events for up to 70
            people. The space offers a mix of high tables and dining tables.
          </BC2>
        </TextContainer>
        <ImageWrapper horizontal>
          <StaticImage
            src="../../../../images/Space/thestalls.png"
            alt="the stalls"
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
      </SectionWrapper>

      <SectionWrapper>
        <TextContainer>
          <BreakLine none />
          <Heading1 marginBottom="md">The Yard</Heading1>
          <BC2 marginBottom="lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam.
          </BC2>
        </TextContainer>
        <ImageWrapper>
          <StaticImage
            src="../../../../images/Space/theyard.png"
            alt="the stalls"
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
      </SectionWrapper>

      <SectionWrapper column>
        <ImageWrapper full>
          <StaticImage
            src="../../../../images/Space/thestalls.png"
            alt="the stalls"
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

        <TextContainer right full first>
          <BreakLine none />
          <Heading1>
            PerformerX
            <br />
            Video
          </Heading1>
          <BC2>
            Our casual dining area is perfect for sit down events for up to 70
            people. The space offers a mix of high tables and dining tables.
          </BC2>
        </TextContainer>
      </SectionWrapper>
      <BreakLine first />
      <SectionWrapper>
        <TextContainer>
          <Heading1>Contact Form</Heading1>
        </TextContainer>
        <TextContainer sixty>
          <ContactUsForm />
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GroupBookings
