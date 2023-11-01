import { useStaticQuery, graphql } from "gatsby"

export default function usePrivateDiningQuery() {
    const data = useStaticQuery(graphql`
    query PrivateDiningPage {
      contentfulPrivateDiningSectionInSlideOutPage(
        id: {eq: "bf9d4590-2b11-5eed-88c1-a97f252bb543"}
      ) {
        id
        privateEventsHeroImage {
          title
          gatsbyImageData
        }
        groupBookingTitle
        groupBookingsDescription {
          raw
        }
        privateEventSection1title
        privateEventSection1description {
          raw
        }
        privateEventsSection1media {
          gatsbyImageData
          title
        }
        privateEventsSection2title
        privateEventsSection2description {
          raw
        }
        privateEventsSection2media {
          title
          gatsbyImageData
        }
        privateEventsSection3title
        privateEventsSection3description {
          raw
        }
        privateEventsSection3media {
          title
          gatsbyImageData
        }
        privateSection4Title
        privatEventsSection4Description {
          raw
        }
        privateEventsSection4Image {
          gatsbyImageData
        }
        sampleMenuOne {
          title
          file {
            url
            fileName
          }
        }
        sampleMenuTwo {
          title
          file {
            url
            fileName
          }
        }
      }
    }
    
  `)

  const pageData = {
      intro: {
        title: data.contentfulPrivateDiningSectionInSlideOutPage.groupBookingTitle,
      content:
        data.contentfulPrivateDiningSectionInSlideOutPage.groupBookingsDescription,
      imageData: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsHeroImage,
      sampleMenuOne:  data.contentfulPrivateDiningSectionInSlideOutPage.sampleMenuOne,
      sampleMenuTwo: data.contentfulPrivateDiningSectionInSlideOutPage.sampleMenuTwo
      },
    firstSection: {
      title: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventSection1title,
      content:
        data.contentfulPrivateDiningSectionInSlideOutPage.privateEventSection1description,
      imageData: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection1media,
    },
    secondSection: {
      title: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection2title,
      content:
        data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection2description,
      imageData: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection2media,
    },
    thirdSection: {
      title: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection3title,
      content:
        data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection3description,
      imageData: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection3media,
    },
    fourthSection: {
      title: data.contentfulPrivateDiningSectionInSlideOutPage.privateSection4Title,
      content:
        data.contentfulPrivateDiningSectionInSlideOutPage.privatEventsSection4Description,
      imageData: data.contentfulPrivateDiningSectionInSlideOutPage.privateEventsSection4Image,
    },
  }
  return pageData
}
//   privateEventsSection3title
// privateEventsSection3description {
//   raw
// }
// privateEventsSection3media {
//   title
//   gatsbyImageData
// }