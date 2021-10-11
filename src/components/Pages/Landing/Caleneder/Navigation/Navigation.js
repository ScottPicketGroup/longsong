import React from "react"
import { NavigationWrapper } from "../Calender.css"
import Month from './Month'
import NavigationView from "./NavigationView"
const Navigation = ({daysView, setDaysView, currentMonth, nextMonth, handleNextMonthChange, handlePreviousMonthChange}) => {

  return (
    <NavigationWrapper>
      <NavigationView  daysView={daysView} setDaysView={setDaysView}/>
      <Month 
        currentMonth={currentMonth} 
        nextMonth={nextMonth}
        handleNextMonthChange={handleNextMonthChange}
        handlePreviousMonthChange={handlePreviousMonthChange}
      />
    </NavigationWrapper>
  )
}

export default Navigation
