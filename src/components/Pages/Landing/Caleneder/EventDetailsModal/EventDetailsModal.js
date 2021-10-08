import React from 'react'
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import {
  EventDetailsWrapper,
  EventListWrapper,
  EventFooterWrapper,
  EventInfoWrapper,
  EventContents
} from "../Calender.css"
import { Heading3, Number1, Heading2 } from "../../../../global-styles/typography.css"
import { DateDisplayContainer } from "../Calender.css"
import { Link } from 'gatsby'


const EventDetailsModal = ({ open, setOpenModel, height, width, i, setOpen, day, dayOfWeek, todaysDate, item }) => {



  return (

    <EventDetailsWrapper
      open={open}
      height={height * 3}
      width={width / 7 * 2 - 10}
      i={i}
      onClick={() => setOpen(false)}
    >
      <EventListWrapper width={width} height={height} i={i}>
        <DateDisplayContainer
          height={height}
          width={width}
          modal
        >
          <Heading3
            calander
            dayOfWeek={day} day={day} date={todaysDate} i={i} key={i + 1}>
            {item.date == todaysDate + 1 ? 'Tomorrow' : item.day}
          </Heading3>
          <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i} key={i + 2}>
            {item.date}
          </Number1>
        </DateDisplayContainer>
      </EventListWrapper>



      <EventInfoWrapper>
        <EventContents>
          <Heading2>
            Event Placeholder
          </Heading2>
          <Heading2>
            The Jeofreys
          </Heading2>
          <Heading2>
            Bar Specials
          </Heading2>
          <Heading2>
            Food Specials
          </Heading2>
          <Heading2>
            
         Happy Hour

          </Heading2>
          <Heading2>
            5 - 7 PM
          </Heading2>
        </EventContents>
        <EventFooterWrapper>
          <Link to="/page-2">
          <Heading2 >VIEW DETAILS</Heading2>
          </Link>
          <LongsongIcon />
        </EventFooterWrapper>
      </EventInfoWrapper>

    </EventDetailsWrapper>

  )
}

export default EventDetailsModal
