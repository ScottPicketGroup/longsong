import React from "react"
import { Heading2 } from "../../../../../global-styles/typography.css"
import { EventContents, EventInfoWrapper } from "../../Calender.css"

const EventContentsSection = ({ item }) => {

  return (
    <EventInfoWrapper>
      <EventContents>
        <Heading2>{item.event.node.eventName}</Heading2>
        {item.event.node.eventDate.slice(11, 16) === "00:00" ? (
          <Heading2>
           {  item.day === "Friday"
            ? "FROM 4PM"
            : "FROM 5PM"}
          </Heading2>
        ) : (
          <Heading2>
            {`FROM ${parseInt(item.event.node.eventDate.slice(11, 14)) - 12}PM`}
            
          </Heading2>
        )}
        {/* <>
          <Heading2>{item.event.node.eventName}</Heading2>
          { item.eventDate ? (
            <Heading2>
              
              {`FROM ${parseInt(item.event.node.eventDate.slice(11, 14)) - 12}`}
              –LATE
            </Heading2>
          ) : !item.event.node.eventDate || !item.event.node.eventDate.includes("00:00") ? (
            <>
              <Heading2>OPEN 5PM–LATE</Heading2>
            </>
          ) : null}
          <Heading2>{item.drinksSpecialTitle}</Heading2>
          <Heading2>{item.foodSpecialTitle}</Heading2>
        </> */}
      </EventContents>
    </EventInfoWrapper>
  )
}

export default EventContentsSection
