import React from "react"
import StallsAndYard from "../StallsAndYard"
import { SlideOutPageWrapper } from "./Space.css"

const Space = ({ activePage }) => {
  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
      <StallsAndYard />
    </SlideOutPageWrapper>
  )
}

export default Space
