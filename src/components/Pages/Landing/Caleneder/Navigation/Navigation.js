import React from "react"
import { NavigationWrapper } from "../Calender.css"
import Month from './Month'
import NavigationView from "./NavigationView"
const Navigation = ({daysView, setDaysView}) => {
  return (
    <NavigationWrapper>
      <NavigationView  daysView={daysView} setDaysView={setDaysView}/>
      <Month />
    </NavigationWrapper>
  )
}

export default Navigation
