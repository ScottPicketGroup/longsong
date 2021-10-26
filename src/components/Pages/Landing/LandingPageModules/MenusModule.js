import React from "react"

import { Link } from "gatsby"
import Slider from "../../../ImageSlider"
import {
  EventContentContainer,
  TextContainer,
  LandingPageModuleContainer,
  ImageWrapper,
  MenusModuleWrapper,
  MenusModuleHalfWrapper,
} from "./index.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import { Heading1, BC1 } from "../../../global-styles/typography.css"

const MenusModule = ({ data }) => {

  return (
    <LandingPageModuleContainer>
      <MenusModuleWrapper>
        <MenusModuleHalfWrapper>
          <ImageWrapper>
            <Slider imageData={data.foodMenuImage}></Slider>
          </ImageWrapper>
          <EventContentContainer style={{ marginTop: "3rem" }}>
            <TextContainer full>
              <BreakLine none />
              <Heading1 marginBottom="md">{data.foodMenuHeading}</Heading1>
              <BC1 marginBottom="md">{data.foodMenuIntro}</BC1>
              <Link to={data.foodMenuPdf.file.url}>
                <BC1 style={{ color: "#457E5C" }}>View more.</BC1>
              </Link>
            </TextContainer>
          </EventContentContainer>
        </MenusModuleHalfWrapper>

        <MenusModuleHalfWrapper>
          <ImageWrapper>
            <Slider imageData={data.drinksMenuImage}></Slider>
          </ImageWrapper>
          <EventContentContainer style={{ marginTop: "3rem" }}>
            <TextContainer full>
              <BreakLine none />
              <Heading1 marginBottom="md">{data.foodMenuHeading}</Heading1>
              <BC1 marginBottom="md">{data.foodMenuIntro}</BC1>
              <Link to={data.drinksMenuPdf.file.url}>
                <BC1 style={{ color: "#457E5C" }}>View more.</BC1>
              </Link>
            </TextContainer>
          </EventContentContainer>
        </MenusModuleHalfWrapper>
      </MenusModuleWrapper>
    </LandingPageModuleContainer>
  )
}

export default MenusModule
