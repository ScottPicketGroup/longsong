import React from "react"
import { BC4 } from "../../../global-styles/typography.css"
import { LongrainLinkWrapper, Underline } from "./LongrainLink.css"

const LongrainLink = ({ heroImage }) => {
  return (
    <LongrainLinkWrapper heroImage>
      <BC4 marginBottom="sm">
        <a
          href="https://longrainmelbourne.com/"
          target="_blank"
          rel="noreferrer"
        >
          LONGRAIN STAGING
        </a>
        <Underline /> 
      </BC4>
    </LongrainLinkWrapper>
  )
}

export default LongrainLink
