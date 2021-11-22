import React, { useEffect } from "react"
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import {
  EventDetailsWrapper,
  EventListWrapper,
  EventFooterWrapper,
  EventInfoWrapper,
  EventContents,
} from "../Calender.css"
import {
  Heading3,
  Number1,
  Heading2,
} from "../../../../global-styles/typography.css"
import { DateDisplayContainer } from "../Calender.css"
import { Link } from "gatsby"
import useActivePage from "../../../../hooks/ActivePage"

const EventDetailsModal = ({
  open,
  height,
  width,
  i,
  setOpen,
  day,
  dayOfWeek,
  todaysDate,
  month,
  item,
  setOpenModel
}) => {
  const [eventDetails, setEventDetails] = React.useState({})
  const { setMenuOpen } = useActivePage()

  useEffect(() => {
    if(item.event ) setEventDetails(item.event.node)
  }, [item])

  
  
  return (
    <EventDetailsWrapper
      open={open}
      height={(height - 1) * 3}
      width={(width / 7) * 2 - 10}
      i={i}
      onClick={() => setOpen(false)}
      onMouseLeave={() => setOpenModel(null)}
    >
      <EventListWrapper width={width} height={height - 1} i={i}>
        <DateDisplayContainer height={height - 1} width={width} modal>
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
          <Number1
            dayOfWeek={day}
            day={day}
            date={todaysDate}
            i={i}
            key={i + 2}
          >
            {item.date}
          </Number1>
        </DateDisplayContainer>
      </EventListWrapper>

      {eventDetails.isTheVenueOpenToThePublic === false ? (
        <EventInfoWrapper>
          <EventContents>
            <Heading2>CLOSED</Heading2>
          </EventContents>
          <EventFooterWrapper>
            <LongsongIcon />
          </EventFooterWrapper>
        </EventInfoWrapper>
      ) : (
        <EventInfoWrapper>
          <EventContents>
            {item.event && item.event.node.eventName ? (
              <>
                  {eventDetails.eventName && <Heading2>OPEN 5PM-late</Heading2>} 
                <Heading2>{eventDetails.eventName}</Heading2>
                <Heading2>{eventDetails.drinksSpecialTitle}</Heading2>
                <Heading2>{eventDetails.foodSpecialTitle}</Heading2>
              </>
            ) : (
              <></>
            )}
        
            <Heading2>
              {dayOfWeek === "Sunday" ||
              dayOfWeek === "Monday" ||
              dayOfWeek === "Tuesday"
                ? "CLOSED"
                : eventDetails.eventDate && eventDetails.eventDate.slice(5,10).replace("-", "") ==  (month + 1) + item.date
                ? 
                 `${ parseInt(eventDetails.eventDate.slice(12,14)) - 2}` + "PM"
                : "OPEN 5PM-late"}
             
            </Heading2>
          </EventContents>

          {eventDetails.eventName ? (
            <EventFooterWrapper >
              <Link
                onClick={() => setMenuOpen(false)}
                to={`events/${eventDetails.eventName.replace(/\s/g, '-')}${"-" + eventDetails.eventDate.slice(5,10) + "-" + eventDetails.eventDate.slice(0,4)}`}
              >
                VIEW DETAILS
              </Link>
              <LongsongIcon />
            </EventFooterWrapper>
          ) : (
            <EventFooterWrapper>
              <LongsongIcon />
            </EventFooterWrapper>
          )}
        </EventInfoWrapper>
      )}
    </EventDetailsWrapper>
  )
}

export default EventDetailsModal
