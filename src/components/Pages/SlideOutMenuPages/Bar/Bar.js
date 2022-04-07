import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageSections from "../PageSections"
import { SlideOutPageWrapper } from "./Space.css"

const Bar = ({ activePage }) => {
  const data = useStaticQuery(graphql`
  query stallsAndYard {
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
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
          }
          file {
            url
          }
        }
      }
      featuredPerformerTitle
      featuredPerformerDescription {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
          }
          file {
            url
          }
        }
      }
      barSnacksGallery {
        gatsbyImageData
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
      imageData: data.contentfulLongsongPageContent.barSnacksGallery
    }
  }
  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
     <PageSections data={newData} /> 
    </SlideOutPageWrapper>
  )
}

export default Bar
