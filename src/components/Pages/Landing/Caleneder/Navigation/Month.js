import React from "react"
import { Month1, Month2 } from "../../../../global-styles/typography.css"
import {
  MenuMonthsContainer,
  MenuMonthItem,
  MonthItem,
  MonthsContainer,
} from "../Calender.css"

import useChangeMonth from "../../../../hooks/ChangeMonth"
import useScrollPosition from "../../../../hooks/ScrollPosition"

const Month = ({ menu }) => {
  const {
    thisMonthInfo,
    nextMonthInfo,
    handlePreviousMonthChange,
    handleNextMonthChange,
  } = useChangeMonth()

  const scrollPosition = useScrollPosition()

  return menu ? (
    <MenuMonthsContainer cols="2" scrollPosition={scrollPosition}>
      <MenuMonthItem onClick={handlePreviousMonthChange}>
        <Month1>{thisMonthInfo[0]}.</Month1>
      </MenuMonthItem>
      <MenuMonthItem onClick={handleNextMonthChange}>
        <Month2>{nextMonthInfo[0]}.</Month2>
      </MenuMonthItem>
    </MenuMonthsContainer>
  ) : (
    <MonthsContainer cols="2" scrollPosition={scrollPosition}>
      <MonthItem onClick={handlePreviousMonthChange}>
        <Month1>{thisMonthInfo[0]}.</Month1>
        <Month1>{thisMonthInfo[1]}</Month1>
      </MonthItem>
      <MonthItem onClick={handleNextMonthChange}>
        <Month2>{nextMonthInfo[0]}.</Month2>
        <Month2>{nextMonthInfo[1]}</Month2>
      </MonthItem>
    </MonthsContainer>
  )
}

export default Month
