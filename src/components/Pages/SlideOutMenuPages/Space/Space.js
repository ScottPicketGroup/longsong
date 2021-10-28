import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StallsAndYard from "../StallsAndYard"
import { SlideOutPageWrapper } from "./Space.css"

const Space = ({ activePage }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulLongsongPageContent {
      edges {
        node {
          id
          featuredPerformerMedia {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  
  `)

  // const newData = {
  //   firstSection: {
  //     title: data.contentfulLongsongPageContent.theStallsTitle,
  //     content: data.contentfulLongsongPageContent.theStallsDescription,
  //     imageData: data.contentfulLongsongPageContent.theStallsMedia,
  //   },
  //   secondSection: {
  //     title: data.contentfulLongsongPageContent.theYardTitle,
  //     content: data.contentfulLongsongPageContent.theYardContent,
  //     imageData: data.contentfulLongsongPageContent.theYardMedia
  //   },
  //   thirdSection: {
  //     title: data.contentfulLongsongPageContent.featuredPerformerTitle,
  //     content: data.contentfulLongsongPageContent.featuredPerformerDescription,
  //     imageData: data.contentfulLongsongPageContent.featuredPerformerMedia
  //   }
  // }

  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
      {/* <StallsAndYard data={newData} /> */}
    </SlideOutPageWrapper>
  )
}

export default Space
