import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import { Heading3, Number1 } from "../../../../global-styles/typography.css"
import {
  DayContainer,
  EventsDateDisplayContainer,
  EventDetailsWrapper,
  EventsListDetailsWrapper,
  EventsListDetailsViewDetailsLink,
  EventsListPerformerDetailsWrapper,
  EventsListMenusDetailsWrapper,
  EventDayContainer,
  EventHeading2,
  EventBC3,
  OnlyDesktopWrapper,
  OnlyMobileWrapper,
} from "../Calender.css"
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import { MobileWrapper } from "../../../../global-styles/containers.css"
const EventsListView = ({
  day,
  i,
  item,
  todaysDate,
  currentMonth,
  month,
  date,
  events,
  daysView,
}) => {
  const dayContainerRef = useRef(null)
  const asdf = parseInt(item.date, 10)
  const thisFakeMonth = month + 2
  const componentDate = item.date

  const [event, setEvent] = React.useState({})

  const [elementWidth, setElementWidth] = useState(0)

  useEffect(() => {
    if (dayContainerRef.current)
      setElementWidth(dayContainerRef.current.clientWidth)
  }, [dayContainerRef, daysView])

  events.map(e => {
    if (e.node.eventDate.slice(0, 2) === componentDate) console.log(e)
  })

  return (
    <>
      {events.map((e, index) => {
        if (e.node.eventDate.slice(0, 2) === componentDate)
          return (
            <EventDayContainer
              key={index}
              i={i}
              ref={dayContainerRef}
              currentMonth={currentMonth}
              month={month}
              dayOfWeek={item.day}
              day={day}
              date={todaysDate}
              height={elementWidth / 3.5}
              events
            >
              <EventsDateDisplayContainer
                events
                currentMonth={currentMonth}
                month={month}
                dayOfWeek={item.day}
                day={day}
                date={todaysDate}
                i={i}
                height={elementWidth / 3.5}
                width={elementWidth / 7 - 10}
              >
                <OnlyDesktopWrapper>
                  <Heading3 dayOfWeek={day} day={day} date={todaysDate} i={i}>
                    {asdf === todaysDate + 1
                      ? "TOMORROW"
                      : asdf === todaysDate
                      ? "TODAY"
                      : item.day === "Sunday"
                      ? "CLOSED"
                      : item.day.toUpperCase()}
                  </Heading3>
                  <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i}>
                    {item.date}
                  </Number1>
                </OnlyDesktopWrapper>
                <MobileWrapper>
                  <EventHeading2
                    dayOfWeek={day}
                    day={day}
                    date={todaysDate}
                    i={i}
                    style={{ paddingLeft: "16px" }}
                  >
                    {asdf === todaysDate + 1
                      ? "TOMORROW"
                      : asdf === todaysDate
                      ? "TODAY"
                      : item.day === "Sunday"
                      ? "CLOSED"
                      : item.day}
                  </EventHeading2>
                  <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i}>
                    {item.date}
                  </Number1>
                </MobileWrapper>
              </EventsDateDisplayContainer>
              <EventsListDetailsWrapper
                month={month}
                currentMonth={currentMonth}
                calander
                dayOfWeek={item.day}
                day={day}
                date={todaysDate}
                i={i}
              >
                <OnlyDesktopWrapper>
                  {item.day === "Sunday" ? (
                    <EventBC3>Closed</EventBC3>
                  ) : e.node.isTheVenueOpenToThePublic === false ? (
                    <EventBC3 style={{ paddingLeft: "2.5rem" }}>
                      LONGSING BAR IS CLOSD FOR PRIVATE EVENTS
                    </EventBC3>
                  ) : (
                    <EventsListPerformerDetailsWrapper>
                      <EventBC3
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        i={i}
                      >
                        {e.node.eventName.toUpperCase()}
                      </EventBC3>
                      <EventBC3
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        i={i}
                      >
                        {/* {e.node.drinksSpecialTitle} */}
                        {e.node.eventDate.slice(7, e.node.eventDate.length)}
                      </EventBC3>
                      <EventBC3
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        i={i}
                      >
                        {e.node.foodSpecialTitle}
                      </EventBC3>
                    </EventsListPerformerDetailsWrapper>
                  )}
                </OnlyDesktopWrapper>
                <OnlyMobileWrapper>
                  {item.day === "Sunday" ? (
                    <EventHeading2>Closed</EventHeading2>
                  ) : e.node.isTheVenueOpenToThePublic === false ? (
                    <EventHeading2>
                      LONGSING BAR IS CLOSD FOR PRIVATE EVENTS
                    </EventHeading2>
                  ) : (
                    <EventsListPerformerDetailsWrapper>
                      <EventHeading2
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        i={i}
                      >
                        {e.node.eventName.toUpperCase()}
                      </EventHeading2>
                      <EventHeading2
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        i={i}
                      >
                        {/* {e.node.drinksSpecialTitle} */}
                        {e.node.eventDate.slice(7, e.node.eventDate.length)}
                      </EventHeading2>
                      <EventHeading2
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        i={i}
                      >
                        {e.node.foodSpecialTitle}
                      </EventHeading2>
                    </EventsListPerformerDetailsWrapper>
                  )}
                </OnlyMobileWrapper>
              </EventsListDetailsWrapper>
              <EventsListDetailsViewDetailsLink
                currentMonth={currentMonth}
                calander
                month={month}
                currentMonth={currentMonth}
                calander
                dayOfWeek={item.day}
                day={day}
                date={todaysDate}
                i={i}
              >
                <OnlyDesktopWrapper>
                  {e.node.isTheVenueOpenToThePublic === false ? (
                    <Link
                      to={`events/${e.node.eventName
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      VIEW DETAILS
                    </Link>
                  ) : (
                    "CLOSED"
                  )}
                </OnlyDesktopWrapper>
                <OnlyMobileWrapper>
                  <EventHeading2>
                    {e.node.isTheVenueOpenToThePublic === false ? (
                      <Link
                        to={`events/${e.node.eventName
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        VIEW DETAILS
                      </Link>
                    ) : (
                      "CLOSED"
                    )}
                  </EventHeading2>
                  <LongsongIcon />
                </OnlyMobileWrapper>
              </EventsListDetailsViewDetailsLink>
            </EventDayContainer>
          )
      })}
    </>
  )
}

export default EventsListView
