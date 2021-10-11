import React, { useRef } from "react"

import {
  Heading2,
  Heading3,
  Number1,
} from "../../../../global-styles/typography.css"
import {
  DayContainer,
  EventsDateDisplayContainer,
  EventDetailsWrapper,
  EventsListDetailsWrapper,
  EventsListDetailsViewDetailsLink,
  EventsListPerformerDetailsWrapper,
  EventsListMenusDetailsWrapper,
  EventDayContainer,
} from "../Calender.css"
import useGetElementSize from "../../../../hooks/ItemSizing"
const EventsListView = ({
  day,
  i,
  item,
  todaysDate,
  currentMonth,
  month,
  date,
}) => {
  const dayContainerRef = useRef(null)
  const { elementWidth } = useGetElementSize(dayContainerRef)

  // console.log(parseInt(item.date, 10), date.getDate())
  const asdf = parseInt(item.date, 10)
  console.log(asdf)
  // if (asdf === todaysDate + 1) console.log("tomorrow")
  return (
    <EventDayContainer
      i={i}
      ref={dayContainerRef}
      ref={dayContainerRef}
      height={elementWidth}
      currentMonth={currentMonth}
      month={month}
      dayOfWeek={item.day}
      day={day}
      date={todaysDate}
      i={i}
      height={elementWidth / 3.5}
      events
    >
      <EventsDateDisplayContainer
        events
        currentMonth={currentMonth}
        height={elementWidth}
        currentMonth={currentMonth}
        month={month}
        dayOfWeek={item.day}
        day={day}
        date={todaysDate}
        i={i}
        height={elementWidth / 3.5}
        width={elementWidth / 7 - 10}
      >
        <Heading3 dayOfWeek={day} day={day} date={todaysDate} i={i}>
          {asdf === todaysDate + 1
            ? "Tomorrow"
            : item.day === "Sunday"
            ? "Closed"
            : item.day}
        </Heading3>
        <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i}>
          {item.date}
        </Number1>
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
        <EventsListPerformerDetailsWrapper>
          <Heading2
            calander
            month={month}
            currentMonth={currentMonth}
            calander
            dayOfWeek={item.day}
            day={day}
            date={todaysDate}
            i={i}
          >
            Performer 1
          </Heading2>
          <Heading2
            calander
            month={month}
            currentMonth={currentMonth}
            calander
            dayOfWeek={item.day}
            day={day}
            date={todaysDate}
            i={i}
          >
            Performer 1
          </Heading2>
          <Heading2
            calander
            month={month}
            currentMonth={currentMonth}
            calander
            dayOfWeek={item.day}
            day={day}
            date={todaysDate}
            i={i}
          >
            Performer 1
          </Heading2>
        </EventsListPerformerDetailsWrapper>
        <EventsListMenusDetailsWrapper>
          <Heading2
            calander
            month={month}
            currentMonth={currentMonth}
            calander
            dayOfWeek={item.day}
            day={day}
            date={todaysDate}
            i={i}
          >
            Menu 1
          </Heading2>
          <Heading2
            calander
            month={month}
            currentMonth={currentMonth}
            calander
            dayOfWeek={item.day}
            day={day}
            date={todaysDate}
            i={i}
          >
            Menu 2
          </Heading2>
          <Heading2
            calander
            month={month}
            currentMonth={currentMonth}
            calander
            dayOfWeek={item.day}
            day={day}
            date={todaysDate}
            i={i}
          >
            HappyHour
          </Heading2>
        </EventsListMenusDetailsWrapper>
      </EventsListDetailsWrapper>
      {/* <EventsListDetailsViewDetailsLink currentMonth={currentMonth}
       calander
       month={month}
       currentMonth={currentMonth}
       calander
       dayOfWeek={item.day}
       day={day}
       date={todaysDate}
       i={i}
       >
                View Details
            </EventsListDetailsViewDetailsLink> */}
    </EventDayContainer>
  )
}

export default EventsListView
