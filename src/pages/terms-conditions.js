import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Renderer from "../components/rich-text-renderers/sample"

const TermsAndConditionsPage = ({ data }) => {
  const { termsAndConditions } = data.allContentfulLongsongPageContent.nodes[0]
  return (
    <Layout fd="column">
      <Seo title="Home" />
      <Renderer node={termsAndConditions} />
    </Layout>
  )
}

export default TermsAndConditionsPage

export const termsAndConditionsData = graphql`
  query termsAndConditions {
    allContentfulLongsongPageContent {
      nodes {
        termsAndConditions {
          raw
        }
      }
    }
  }
`
