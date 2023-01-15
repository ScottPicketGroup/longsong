import React from "react"
import { Heading2 } from "../../../../../global-styles/typography.css"
import LongsongIcon from "../../../../../MenuContainer/Icons/LongsongIcon"
import {
  EventContents,
  EventFooterWrapper,
  EventInfoWrapper,
} from "../../Calender.css"
export const NotOpenToPublic = ({ item }) => {
    // console.log('item', item.event.node)
  return (
    <EventInfoWrapper>
      <EventContents>
        {item.isoEventDate && item.isoDate === item.isoEventDate && (
          <>
            <Heading2>{item.event.node.eventName}</Heading2>
            <Heading2>
            {item.event.node.eventDate.slice(11, 16) !== "00:00" &&
                `FROM ${
                  parseInt(item.event.node.eventDate.slice(11, 14)) - 12
                }–LATE`}
            </Heading2>
          </>
        )}
      </EventContents>
   
    </EventInfoWrapper>
  )
}
