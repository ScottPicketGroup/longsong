import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { BC2, BC3, Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  TextContainer,
  SectionWrapper,
} from "./Space.css"

import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"

const Space = ({ activePage }) => {
  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
       
      <SectionWrapper column>
        <TextContainer first>
        <BreakLine  none/>
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
              {" "}
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
              {" "}
              1/2
            </BC3>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              {" "}
              VIEW FULLSCREEN
            </BC3>
          </MobileWrapper>
        </ImageWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <TextContainer >
          <BreakLine none />
          <Heading1 marginBottom="md"> The Yard</Heading1>
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
              {" "}
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
              {" "}
              1/2
            </BC3>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              {" "}
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
              {" "}
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
              {" "}
              1/2
            </BC3>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              {" "}
              VIEW FULLSCREEN
            </BC3>
          </MobileWrapper>
        </ImageWrapper>

        <TextContainer right full first>
          <BreakLine none />
          <Heading1>
            {" "}
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
    </SlideOutPageWrapper>
  )
}

export default Space
