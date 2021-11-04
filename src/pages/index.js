import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroBackground from "../components/Pages/Landing/Hero/HeroBackgound"
import LandingPageModules from "../components/Pages/Landing/LandingPageModules"

const IndexPage = ({ data }) => {
  const { heroImage, textOverHeroImage, landingPageSections } =
    data.allContentfulLongsongLandingPageContent.edges[0].node

  //components state

  //  use effect 
  // let modulesToPush = []
  // map landingPageModules => modulesToPush.push({name: arrayname.firstlettertocapital, props: props})
  // setmodules (modulestopush)




  return (
    <Layout fd="column" heroImage={heroImage}>
      <Seo title="Home" />
      {/* <HeroBackground 
        
      />
      <LandingPageModules data={landingPageSections} /> */}
    </Layout>
  )
}

export default IndexPage

export const landingPageData = graphql`
query landing {
  allContentfulLongsongLandingPageContent {
    edges {
      node {
        id
        landingPageSections {
          ... on ContentfulLandingPageEventsModule {
            id
            landingPageEventsList {
              id
              eventDate(formatString: "DD.MM")
              eventName
              slug
              eventDescription {
                raw
              }
              eventMedia {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
          ... on ContentfulLongsongLandingPagePrivateDiningSection {
            id
            gallery {
              gatsbyImageData
              title
            }
            intro {
              raw
            }
            title
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
        }
        textOverHeroImage {
            raw
          }
        heroImage {

        file {
              url
              details {
                size
              }
            }
            gatsbyImageData(placeholder: BLURRED)}
      }
    }
  }
}

`
