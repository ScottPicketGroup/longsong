import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StallsAndYard from "../StallsAndYard"
import { SlideOutPageWrapper } from "./Space.css"

const Space = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query StallsAndYard {
      contentfulLongsongPageContent(contentful_id: {eq: "7aRmLZ6sUc9SbpIPPRRj7A"}) {
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
        query MyQuery {
          contentfulLongsongPageContent(id: {eq: "a93d3e6e-66c6-56f3-870e-bbd14f35a26e"}) {
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
        
      }
    }
  `)

  const newData = {
    firstSection: {
      title: data.contentfulLongsongPageContent.theStallsTitle,
      content: data.contentfulLongsongPageContent.theStallsDescription,
      imageData: data.contentfulLongsongPageContent.theStallsMedia,
    },
    secondSection: {
      title: data.contentfulLongsongPageContent.theYardTitle,
      content: data.contentfulLongsongPageContent.theYardContent,
      imageData: data.contentfulLongsongPageContent.theYardMedia
    },
    thirdSection: {
      title: data.contentfulLongsongPageContent.featuredPerformerTitle,
      content: data.contentfulLongsongPageContent.featuredPerformerDescription,
      
    }
  }

  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
      <StallsAndYard data={newData} />
    </SlideOutPageWrapper>
  )
}

export default Space
