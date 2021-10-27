import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroBackground from "../components/Pages/Landing/Hero/HeroBackgound"
import LandingPageModules from "../components/Pages/Landing/LandingPageModules"

<<<<<<< HEAD
//import components you have made for those sections

const IndexPage = () => {
  const [calenderRef, setCalenderRef] = useState(null);
  const excuteScroll = () => calenderRef.current.scrollIntoView({behavior: "smooth", inline: "nearest"});
=======
const IndexPage = ({ data }) => {
  const { heroImage, heroTextOverImage, landingPageModules } =
    data.allContentfulLongsongLandingPageContent.edges[0].node
>>>>>>> 022b2d8c819e0e0a5260c441923dd86443633f23

  //components state

  //  use effect 
  // let modulesToPush = []
  // map landingPageModules => modulesToPush.push({name: arrayname.firstlettertocapital, props: props})
  // setmodules (modulestopush)




  return (
    <Layout fd="column" heroImage={heroImage}>
      <Seo title="Home" />
<<<<<<< HEAD
      <Hero excuteScroll={excuteScroll} />
      {/* <Calender setCalenderRef={setCalenderRef} /> */}

  {/* modules.map((module, i) => <BlankComponnet component={component.name} props={props}) */}
=======
      <HeroBackground
        heroImage={heroImage}
        heroTextOverImage={heroTextOverImage}
      />
      <LandingPageModules data={landingPageModules} />
>>>>>>> 022b2d8c819e0e0a5260c441923dd86443633f23
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
