import React, { useRef, useState, useEffect } from "react"

import {
  DayContainer,
  DateDisplayContainer,
  EmptyDayContainer,
} from "../Calender.css"
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

  useEffect(() => {
    if (dayContainerRef.current)
      setElementWidth(dayContainerRef.current.clientWidth)
  }, [dayContainerRef])

  useEffect(() => {
    openModel === i ? setOpen(true) : setOpen(false)
    // eslint-disable-next-line
  }, [openModel])
  console.log("elementWidth", elementWidth)
  return item.day === "" && item.date === "" ? (
    <EmptyDayContainer ref={dayContainerRef} />
  ) : (
    <DayContainer
      ref={dayContainerRef}
      currentMonth={currentMonth}
      month={month}
      calander
      dayOfWeek={item.day}
      day={day}
      date={todaysDate}
      i={i}
      key={i + 1}
      onMouseOver={() => setOpenModel(i)}
    >
      <DateDisplayContainer height={elementWidth}>
        <Heading3
          calander
          month={month}
          currentMonth={currentMonth}
          dayOfWeek={item.day}
          day={day}
          date={todaysDate}
          i={i}
          key={i + 1}
        >
          {month === currentMonth && parseInt(item.date) === todaysDate
            ? "TODAY"
            : month === currentMonth && parseInt(item.date) === todaysDate + 1
            ? "TOMORROW"
            : item.day.toUpperCase()}
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
          dayOfWeek={item.day}
          day={day}
          date={todaysDate}
          key={i}
          height={elementWidth}
          item={item}
          open={open}
          i={i + 1}
          width={modalWidth}
          month={month}
          currentMonth={currentMonth}
          onClick={() => setOpen(false)}
          setOpenModel={setOpenModel}
          setOpen={setOpen}
        />
      </DateDisplayContainer>
    </DayContainer>
  )
}

export default CalanderView
