import React from "react"
import { Heading3 } from "../../../../global-styles/typography.css"

export const DayLongForm = ({ day, todaysDate, i, item }) => {
  return (
    <Heading3
      calander
      dayOfWeek={day}
      day={day}
      date={todaysDate}
      i={i}
      key={i + 1}
    >
      {item.date === todaysDate + 1 ? "TOMORROW" : item.day.toUpperCase()}
    </Heading3>
  )
}
