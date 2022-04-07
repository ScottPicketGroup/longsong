import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroBackground from "../components/Pages/Landing/Hero/HeroBackgound"
import LandingPageModules from "../components/Pages/Landing/LandingPageModules"

const IndexPage = ({ data }) => {
  const { heroImage, landingPageSections } =
    data.contentfulLandingPageContent

  //components state

  //  use effect 
  // let modulesToPush = []
  // map landingPageModules => modulesToPush.push({name: arrayname.firstlettertocapital, props: props})
  // setmodules (modulestopush)




  return (
    <Layout fd="column" heroImage={heroImage}>
      <Seo title="Home" />
       <HeroBackground />
      <LandingPageModules data={landingPageSections} /> 
    </Layout>
  )
}

export default IndexPage

export const landingPageData = graphql`
query landing {
  contentfulLandingPageContent(id: {eq: "4a312602-defe-550a-b9b5-2393ed6dd3ee"}) {
    id
    heroImage {
      gatsbyImageData(placeholder: BLURRED)
    }
    textOverHeroImage {
      raw
    }
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
      ... on ContentfulLandingPageMenuSection {
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
      ... on ContentfulLandingPagePrivateDiningSection {
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
    }
  }
}


`
