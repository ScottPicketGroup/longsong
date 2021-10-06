import React from "react"
import { Month1, Month2 } from "../../../../global-styles/typography.css"
import { MonthItem, MonthsContainer } from "../Calender.css"

import useMonthsInfo from '../../../../hooks/monthInfo'

const Month = ({currentMonth, setCurrentMonth, nextMonth, setNextMonth}) => {

const {thisMonthInfo, nextMonthInfo, month} = useMonthsInfo(currentMonth, nextMonth)

  
const handlePreviousMonthChange = () => {

if(currentMonth == 0) { setCurrentMonth(0) 
  setNextMonth(1)
}
else if (currentMonth < 12) {setCurrentMonth(currentMonth --) 
setNextMonth(nextMonth--)
}

}

  
const handleNextMonthChange = () => {
setNextMonth(nextMonth ++)
setCurrentMonth(currentMonth++)
  console.log(nextMonth)
  }
  return (
    <MonthsContainer cols="2" >
      <MonthItem >
        <Month1 onClick={handlePreviousMonthChange}>{thisMonthInfo[0]}</Month1>
        <Month1>{thisMonthInfo[1]}</Month1>
      </MonthItem>
      <MonthItem >
        <Month2 onClick={handleNextMonthChange}>{nextMonthInfo[0]}</Month2>
        <Month2 >{nextMonthInfo[1]}</Month2>
      </MonthItem>
    </MonthsContainer>
  )
}

export default Month
