import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StallsAndYard from "../StallsAndYard"
import { SlideOutPageWrapper } from "./Space.css"

const Space = ({ activePage }) => {




  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
       {/* <StallsAndYard data={newData} /> */}
    </SlideOutPageWrapper>
  )
}

export default Space
