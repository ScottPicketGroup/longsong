import React from 'react'
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import {
  EventDetailsWrapper,
  EventListWrapper,
  EventFooterWrapper,
} from "../Calender.css"
import { Heading2 } from "../../../../global-styles/typography.css"



const EventDetailsModal = ({ open, setOpenModel, height, width, i, setOpen }) => {


  console.log(open)

  return (

    <EventDetailsWrapper
      open={open}
      height={height * 2}
      width={width / 7 * 2}
      i={i}
      onClick={() => setOpen(false)}
    >
      <EventListWrapper width={width}>
        <Heading2>
          Event 1
        </Heading2>
        <Heading2>
          Event 1
        </Heading2>
        <Heading2 marginBottom="sm">
          Event 1
        </Heading2>

      </EventListWrapper>
      <EventFooterWrapper>
        <Heading2 >VIEW DETAILS</Heading2>
        <LongsongIcon />
      </EventFooterWrapper>
    </EventDetailsWrapper>

  )
}

export default EventDetailsModal
