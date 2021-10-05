import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StallsAndYard from "../StallsAndYard"
import { SlideOutPageWrapper } from "./Space.css"

const Space = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query StallsAndYard {
      contentfulLongsongPageContent {
        theStallsTitle
        theStallsMedia {
          gatsbyImageData
          title
        }
        theStallsDescription {
          raw
        }
        theYardTitle
        theYardMedia {
          gatsbyImageData
          title
        }
        theYardContent {
          raw
        }
        featuredPerformerTitle
        featuredPerformerDescription {
          raw
        }
        featuredPerformerMedia {
          gatsbyImageData
          title
        }
      }
    }
  `)

  const newData = {
    firstSection: {
      title: data.contentfulLongsongPageContent.theStallsTitle,
      content: data.contentfulLongsongPageContent.theStallsDescription,
      imageData: data.contentfulLongsongPageContent.theStallsMedia[0].gatsbyImageData,
      imageTitle: data.contentfulLongsongPageContent.theStallsMedia[0].title,
    },
    secondSection: {
      title: data.contentfulLongsongPageContent.theYardTitle,
      content: data.contentfulLongsongPageContent.theYardContent,
      imageData: data.contentfulLongsongPageContent.theYardMedia[0].gatsbyImageData,
      imageTitle: data.contentfulLongsongPageContent.theYardMedia[0].title,
    },
    thirdSection: {
      title: data.contentfulLongsongPageContent.featuredPerformerTitle,
      content: data.contentfulLongsongPageContent.featuredPerformerDescription,
      imageData: data.contentfulLongsongPageContent.featuredPerformerMedia.gatsbyImageData,
      imageTitle: data.contentfulLongsongPageContent.featuredPerformerMedia.title,
    }
  }

  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
      <StallsAndYard data={newData} />
    </SlideOutPageWrapper>
  )
}

export default Space
