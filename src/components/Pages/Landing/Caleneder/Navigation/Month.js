import React from "react"
import { Month1, Month2 } from "../../../../global-styles/typography.css"
import { MonthItem, MonthsContainer } from "../Calender.css"

import useGetDaysOfMonth from '../../../../hooks/DateInformation'

const Month = () => {
  const {year, month} = useGetDaysOfMonth()

  let date = new Date(Date.UTC(year, month, 1))
  const options = {month: 'short'};
  const thisMonth = date.toLocaleDateString('en-EU', options)
  const nextMonthDate = new Date(Date.UTC(year, month + 1, 1))
  const nextMonth = nextMonthDate.toLocaleDateString('en-EU', options)
  const thisMonthYear
  return (
    <MonthsContainer cols="2" >
      <MonthItem>
        <Month1>{thisMonth}</Month1>
        <Month1>{year}</Month1>
      </MonthItem>
      <MonthItem>
        <Month2>{nextMonth}</Month2>
        <Month2 >2021</Month2>
      </MonthItem>
    </MonthsContainer>
  )
}

export default Month
