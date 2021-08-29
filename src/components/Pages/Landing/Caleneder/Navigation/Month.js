import React from "react"
import { Month1, Month2 } from "../../../../global-styles/typography.css"
import { MonthItem, MonthsContainer } from "../Calender.css"

const Month = () => {
  return (
    <MonthsContainer cols="2" >
      <MonthItem>
        <Month1>JAN</Month1>
        <Month1>2021</Month1>
      </MonthItem>
      <MonthItem>
        <Month2>FEB</Month2>
        <Month2 >2021</Month2>
      </MonthItem>
    </MonthsContainer>
  )
}

export default Month
