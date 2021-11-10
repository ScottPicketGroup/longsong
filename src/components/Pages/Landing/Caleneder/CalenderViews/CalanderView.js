import React, { useRef, useState, useEffect } from "react"

import { DayContainer, DateDisplayContainer, EmptyDayContainer } from "../Calender.css"
import EventDetailsModal from "../EventDetailsModal/EventDetailsModal"

import { Heading3, Number1 } from "../../../../global-styles/typography.css"

import useActivePage from "../../../../hooks/ActivePage"

const CalanderView = ({
  day,
  i,
  item,
  todaysDate,
  openModel,
  setOpenModel,
  currentMonth,
  modalWidth,
  month,
}) => {
  const [open, setOpen] = useState(false)
  const dayContainerRef = useRef(null)
  const { activePage } = useActivePage()

  const [elementWidth, setElementWidth] = useState(0)
console.log(item)
  useEffect(() => {
    if (dayContainerRef.current)
      setElementWidth(dayContainerRef.current.clientWidth)
  }, [activePage, dayContainerRef])

  useEffect(() => {
    openModel === i ? setOpen(true) : setOpen(false)
  }, [openModel])
  // console.log("month" +month)
  // console.log("cccmonth" +currentMonth)
  // console.log("today" +todaysDate)
  // console.log("i" +i)
  // console.log("day" +day)
  // console.log("itemday" + item.day)

  return item.day === "" && item.date === "" ? (
    <EmptyDayContainer />
  ) : (
    <DayContainer
      dayOfWeek={day}
      ref={dayContainerRef}
      height={elementWidth}
      currentMonth={currentMonth}
      month={month}
      calander
      dayOfWeek={item.day}
      day={day}
      date={todaysDate}
      i={i}
      key={i + 1}
      onClick={() => setOpenModel(i)}
    >
      <DateDisplayContainer height={elementWidth}>
        <Heading3
          calander
          month={month}
          currentMonth={currentMonth}
          calander
          dayOfWeek={item.day}
          day={day}
          date={todaysDate}
          i={i}
          key={i + 1}
        >
          {item.date == todaysDate ? "TODAY" :item.date == todaysDate + 1 ? "TOMORROW" : item.day.toUpperCase()}
        </Heading3>
        <Number1
          month={month}
          currentMonth={currentMonth}
          calander
          dayOfWeek={item.day}
          day={day}
          date={todaysDate}
          i={i}
          key={i + 2}
        >
          {item.date}
        </Number1>

        <EventDetailsModal
          eventData={item.event}
          dayOfWeek={day}
          day={day}
          date={todaysDate}
          i={i}
          key={i}
          height={elementWidth}
          item={item}
          open={open}
          i={i + 1}
          width={modalWidth}
          month={month}
          onClick={() => setOpen(false)}
          setOpen={setOpen}
        />
      </DateDisplayContainer>
    </DayContainer>
  )
}

export default CalanderView
