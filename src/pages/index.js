import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroBackground from "../components/Pages/Landing/Hero/HeroBackgound"
import LandingPageModules from "../components/Pages/Landing/LandingPageModules"

const IndexPage = ({ data }) => {
  const { heroImage, heroTextOverImage, landingPageModules } =
    data.allContentfulLongsongLandingPageContent.edges[0].node

  return (
    <Layout fd="column" heroImage={heroImage}>
      <Seo title="Home" />
      <HeroBackground
        heroImage={heroImage}
        heroTextOverImage={heroTextOverImage}
      />
      <LandingPageModules data={landingPageModules} />
    </Layout>
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
          heroTextOverImage
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
