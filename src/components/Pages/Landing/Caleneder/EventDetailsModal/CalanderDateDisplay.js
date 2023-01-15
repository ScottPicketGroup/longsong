import React from "react"
import { Number1 } from "../../../../global-styles/typography.css"
import { DateDisplayContainer, EventListWrapper } from "../Calender.css"
import { DayLongForm } from "./DayLongForm"

const CalanderDateDisplay = ({ height, width, day, todaysDate, i, item }) => {
  return (
    <EventListWrapper width={width} height={height - 1} i={i}>
      <DateDisplayContainer height={height - 1} width={width} modal>
        <DayLongForm day={day} todaysDate={todaysDate} i={i} item={item} />
        <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i} key={i + 2}>
          {item.date}
        </Number1>
      </DateDisplayContainer>
    </EventListWrapper>
  )
}

export default CalanderDateDisplay
