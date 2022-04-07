import React from "react"
import PageSections from "../PageSections"
import { SlideOutPageWrapper } from "./Space.css"
import useBarPageQuery from "./BarPageQuery"

const Bar = ({ activePage }) => {
const pageData = useBarPageQuery()


  return (
    <SlideOutPageWrapper activePage={activePage} page={2}>
     <PageSections data={pageData} /> 
    </SlideOutPageWrapper>
  )
}

export default Bar
