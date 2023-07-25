import React from "react"
import { Heading2 } from "../../../../../global-styles/typography.css"
import { EventContents, EventInfoWrapper } from "../../Calender.css"

const NoEventDisplay = ({ item }) => {
  return (
    <EventInfoWrapper>
      <EventContents>
        <Heading2>
          {item.day === "Sunday" ||
          item.day === "Monday" ||
          item.day === "Tuesday" ||
          item.day === "Wednesday"
            ? "CLOSED"
            : item.day === "Friday"
            ? "OPEN 4PM-LATE"
            : "OPEN 5PM-LATE"}
        </Heading2>
      </EventContents>
    </EventInfoWrapper>
  )
}

export default NoEventDisplay
