import React from "react"
import { NavigationWrapper } from "../Calender.css"
import Month from './Month'
import NavigationView from "./NavigationView"
const Navigation = ({daysView, setDaysView, currentMonth, setCurrentMonth, nextMonth, setNextMonth}) => {
  console.log(currentMonth)
  return (
    <NavigationWrapper>
      <NavigationView  daysView={daysView} setDaysView={setDaysView}/>
      <Month 
        currentMonth={currentMonth} 
        setCurrentMonth={setCurrentMonth}
        nextMonth={nextMonth}
        setNextMonth={setNextMonth}
      />
    </NavigationWrapper>
  )
}

export default Navigation
