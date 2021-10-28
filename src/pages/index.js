import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroBackground from "../components/Pages/Landing/Hero/HeroBackgound"
import LandingPageModules from "../components/Pages/Landing/LandingPageModules"

const IndexPage = ({ data }) => {
  const { heroImage, textOverHeroImage, landingPageModules } =
    data.allContentfulLongsongLandingPageContent.edges[0].node

  //components state

  //  use effect 
  // let modulesToPush = []
  // map landingPageModules => modulesToPush.push({name: arrayname.firstlettertocapital, props: props})
  // setmodules (modulestopush)




  return (
   <>
   </>
  )
}

export default IndexPage

export const landingPageData = graphql`
  query landingPageQuery {
    allContentfulLongsongLandingPageContent {
      edges {
        node {
          heroImage {
            file {
              url
              details {
                size
              }
            }
            gatsbyImageData(placeholder: BLURRED)
          }
          textOverHeroImage {
            raw
          }
          landingPageModules {
            ... on ContentfulLongsongLandingPagePrivateDiningSection {
              id
              title
              intro {
                raw
              }
              gallery {
                gatsbyImageData
              }
            }
            ... on ContentfulLongsongLandingPageMenuSection {
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
            ... on ContentfulLandingPageEventsModule {
              id
              landingPageEventsList {
                eventDate(formatString: "HH.mm")
                eventName
                slug
                eventDescription {
                  raw
                }
                eventMedia {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
