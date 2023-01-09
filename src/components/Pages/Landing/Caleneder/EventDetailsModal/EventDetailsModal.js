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
  currentMonth,
  item,
  setOpenModel,
}) => {
  const [eventDetails, setEventDetails] = React.useState({})
  const [eventDate, setEventDate] = React.useState()
  const { setMenuOpen } = useActivePage()
  const [actualMonth, setActualMonth] = React.useState()

  useEffect(() => {
    if(!item.event) return
    if (item.event) {
      const eventDateRaw = new Date(item.event.node.eventDate)
      const day = eventDateRaw.getDay() > 10 ? "0" + eventDateRaw.getDay() : eventDateRaw.getDay()
      setEventDetails(item.event.node)
      console.log('eventDateRaw', day)
    }
    if (currentMonth < 10) {
      setActualMonth("0" + (currentMonth + 1))
    } else {
      setActualMonth(currentMonth + 1)
    }
  }, [item, currentMonth])

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
      {/* event open to publick ? if not say that */}
      {eventDetails && eventDetails.isTheVenueOpenToThePublic === false ? (
        <EventInfoWrapper>
          <EventContents>
            <Heading2>{eventDetails.eventName}</Heading2>
            {parseInt(eventDetails.eventDate.slice(11, 14)) - 12 !== -12 && (
              <Heading2>{`FROM ${
                parseInt(eventDetails.eventDate.slice(11, 14)) - 12
              }–LATE`}</Heading2>
            )}
          </EventContents>
          <EventFooterWrapper>
            <LongsongIcon />
          </EventFooterWrapper>
        </EventInfoWrapper>
      ) : (
        <EventInfoWrapper>
          <EventContents>
            <Heading2>
              {dayOfWeek === "Sunday" ||
              dayOfWeek === "Monday" ||
              dayOfWeek === "Tuesday"
                ? "CLOSED"
                : dayOfWeek === "Friday"
                ? "OPEN 4PM-LATE"
                : eventDetails.venueOpenBeforeEventStart === false
                ? ""
                : "OPEN 5PM-LATE"}
           
            </Heading2>
            {item.event && item.event.node.eventName ? (
              <>
                <Heading2>{eventDetails.eventName}</Heading2>
                {eventDetails &&
                eventDetails.eventDate &&
                parseInt(eventDetails.eventDate.slice(11, 14)) - 12 !== -12 ? (
                  <Heading2>
                    {`FROM ${
                      parseInt(eventDetails.eventDate.slice(11, 14)) - 12
                    }`}
                    –LATE
                  </Heading2>
                ) : !eventDetails.eventDate ? (
                  <>
                    <Heading2>OPEN 5PM–LATE</Heading2>
                  </>
                ) : null}
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
                ? ""
                : eventDetails.eventDate &&
                  eventDetails.eventDate.slice(5, 10).replace("-", "") ===
                    actualMonth + item.date}
            </Heading2>
          </EventContents>

          {eventDetails.eventDate &&
          eventDetails.eventDate.slice(5, 10).replace("-", "") ===
            actualMonth + item.date ? (
            <EventFooterWrapper>
              <Link
                onClick={() => setMenuOpen(false)}
                to={`events/${eventDetails.eventName.replace(/\s/g, "-")}${
                  "-" +
                  eventDetails.eventDate.slice(5, 10) +
                  "-" +
                  eventDetails.eventDate.slice(0, 4)
                }`}
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
