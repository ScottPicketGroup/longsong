import React from "react"
import { BC4 } from "../../../global-styles/typography.css"
import { LongrainLinkWrapper, Underline } from "./BookATableLink.css"

const BookATableLink = ({ heroImage }) => {
  return (
    <LongrainLinkWrapper heroImage>
      <BC4 marginBottom="sm">
        <a
          href="https://www.sevenrooms.com/landing/longsong"
          target="_blank"
          rel="noreferrer"
        >
          BOOK A TABLE
        </a>
        <Underline /> 
      </BC4>
    </LongrainLinkWrapper>
  )
}

export default BookATableLink
