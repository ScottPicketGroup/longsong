import React from "react"
import { Month1, Month2 } from "../../../../global-styles/typography.css"
import { MonthItem, MonthsContainer } from "../Calender.css"

import useMonthsInfo from "../../../../hooks/monthInfo"
import useScrollPosition from "../../../../hooks/ScrollPosition"

const Month = ({ currentMonth, nextMonth, handlePreviousMonthChange, handleNextMonthChange }) => {
  const { thisMonthInfo, nextMonthInfo } = useMonthsInfo(
    currentMonth,
    nextMonth
  )
  const scrollPosition = useScrollPosition();

  return (
    <MonthsContainer cols="2" scrollPosition={scrollPosition}>
      <MonthItem onClick={handlePreviousMonthChange}>
        <Month1>{thisMonthInfo[0]}</Month1>
        <Month1>{thisMonthInfo[1]}</Month1>
      </MonthItem>
      <MonthItem onClick={handleNextMonthChange}>
        <Month2>{nextMonthInfo[0]}</Month2>
        <Month2>{nextMonthInfo[1]}</Month2>
      </MonthItem>
    </MonthsContainer>
  )
}

export default Month
