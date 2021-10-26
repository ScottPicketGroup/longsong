import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Pages/Landing/Hero/Hero"
import Calender from "../components/Pages/Landing/Caleneder/Calender"
import HeroBackground from "../components/Pages/Landing/Hero/HeroBackgound"
import LandingPageModules from "../components/Pages/Landing/LandingPageModules"

const IndexPage = ({ data }) => {
  const [calenderRef, setCalenderRef] = useState(null)
  const excuteScroll = () =>
    calenderRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    })

  const { heroImage, heroTextOverImage, landingPageModules } =
    data.allContentfulLongsongLandingPageContent.edges[0].node

  return (
    <Layout fd="column" heroImage={heroImage}>
      <Seo title="Home" />
      {/* <Hero excuteScroll={excuteScroll} />
      <Calender setCalenderRef={setCalenderRef} /> */}
      <HeroBackground
        heroImage={heroImage.file.url}
        heroTextOverImage={heroTextOverImage}
        excuteScroll={excuteScroll}
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
            }
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
