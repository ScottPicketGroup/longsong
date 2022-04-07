import { useStaticQuery, graphql } from "gatsby"

export default function useBarPageQuery() {
    const data = useStaticQuery(graphql`
    query BarPage {
        contentfulBarPage(id: {eq: "2c32b162-4b2c-53fa-9796-e9429a632caf"}) {
          id
          section1Description {
            raw
          }
          section1Title
          section1Description {
            raw
          }
          section1Gallery {
            gatsbyImageData(placeholder: BLURRED)
          }
          section2Title
          section2Description {
            raw
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
          section2Gallery {
            gatsbyImageData(placeholder: BLURRED)
          }
          section3Title
          section3Description {
            raw
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
          section3Gallery {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      
    
  `)

  const barPageData = {
    firstSection: {
        title: data.contentfulBarPage.section1Title,
        content: data.contentfulBarPage.section1Description,
        imageData: data.contentfulBarPage.section1Gallery,
      },
      secondSection: {
        title: data.contentfulBarPage.section2Title,
        content: data.contentfulBarPage.section2Description,
        imageData: data.contentfulBarPage.section2Gallery,
      },
      thirdSection: {
        title: data.contentfulBarPage.section3Title,
        content: data.contentfulBarPage.section3Description,
        imageData: data.contentfulBarPage.section3Gallery,
      }
  }

  return barPageData
}