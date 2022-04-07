import React from 'react'
import { Button } from "../../../global-styles/GlobalStyles.css"
import { Heading1 } from "../../../global-styles/typography.css"
import {
    ImageWrapper,
    SectionWrapper,
    TextContainer,
  } from "../Bar/Space.css"
import Slider from "../../../ImageSlider"
import Renderer from "../../../rich-text-renderers/sample"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
const Intro = ({data}) => {

  return (
    <SectionWrapper column>
    <ImageWrapper full>
      <Slider
        hero
        imageData={
          data.imageData
        }
      />
    </ImageWrapper>
    <TextContainer right full marginBottom="lg" first>
      <BreakLine none />
      <Heading1 marginBottom="md">
        {data.title}
      </Heading1>

      <Renderer
        node={data.content}
      />

      <Button marginBottom="" style={{ marginRight: `2rem` }}>
        <a
          href={data.sampleMenuOne.file.url}
          target="_blank"
          rel="noreferrer"
        >
          FUNCTIONS PACKAGE
        </a>
      </Button>
      <Button>
        <a
          href={data.sampleMenuTwo.file.url}
          target="_blank"
          rel="noreferrer"
        >
          WEDDING PACKAGE
        </a>
      </Button>
    </TextContainer>
  </SectionWrapper>
  )
}

export default Intro