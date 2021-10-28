import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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

const MenusModule = () => {
  const data = useStaticQuery(graphql`
  query menusModuleData {
    allContentfulLongsongLandingPageMenuSection {
      edges {
        node {
          id
          foodMenuImage {
            gatsbyImageData(aspectRatio: 1)
          }
          drinksMenuImage {
            gatsbyImageData(aspectRatio: 1)
          }
          foodMenuHeading
          drinksMenuHeading
          foodMenuIntro
          drinksMenuIntro
          drinksMenuPdf {
            file {
              url
            }
          }
          foodMenuPdf {
            file {
              url
            }
          }
        }
      }
    }
  }
  `)

  const {
    foodMenuHeading,
          drinksMenuHeading,
          foodMenuIntro,
          drinksMenuIntro,
          drinksMenuImage,
          drinksMenuPdf,
          foodMenuPdf,
          foodMenuImage

   } = data.allContentfulLongsongLandingPageMenuSection.edges[1].node  

  return (
    <LandingPageModuleContainer>
      <MenusModuleWrapper>
        <MenusModuleHalfWrapper>
          <ImageWrapper>
            <Slider imageData={foodMenuImage}></Slider>
          </ImageWrapper>
          <EventContentContainer style={{ marginTop: "3rem" }}>
            <TextContainer full>
              <BreakLine none />
              <Heading1 marginBottom="md">{foodMenuHeading}</Heading1>
              <BC1 marginBottom="md">{foodMenuIntro}</BC1>
              <Link to={foodMenuPdf.file.url}>
                <BC1 style={{ color: "#457E5C" }}>View menu</BC1>
              </Link>
            </TextContainer>
          </EventContentContainer>
        </MenusModuleHalfWrapper>

        <MenusModuleHalfWrapper>
          <ImageWrapper>
            <Slider imageData={drinksMenuImage}></Slider>
          </ImageWrapper>
          <EventContentContainer style={{ marginTop: "3rem" }}>
            <TextContainer full>
              <BreakLine none />
              <Heading1 marginBottom="md">{drinksMenuHeading}</Heading1>
              <BC1 marginBottom="md">{drinksMenuIntro}</BC1>
              <Link to={drinksMenuPdf.file.url}>
                <BC1 style={{ color: "#457E5C" }}>View drinks list</BC1>
              </Link>
            </TextContainer>
          </EventContentContainer>
        </MenusModuleHalfWrapper>
      </MenusModuleWrapper>
    </LandingPageModuleContainer>
  )
}

export default MenusModule
