import React from "react"
import { BC4 } from "../../../global-styles/typography.css"
import { LongrainLinkWrapper, Underline } from "./LongrainLink.css"

const LongrainLink = () => {
  return (
    <LongrainLinkWrapper>
      <BC4 marginBottom="sm">
        <a
          href="https://longrainmelbourne.com/"
          target="_blank"
          rel="noreferrer"
        >
          LONGRAIN
        </a>
        <Underline /> 
      </BC4>
    </LongrainLinkWrapper>
  )
}

export default LongrainLink
