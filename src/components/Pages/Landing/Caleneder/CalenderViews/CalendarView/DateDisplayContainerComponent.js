import React from "react"
import { DateDisplayContainer } from "../../Calender.css"
import { Heading3, Number1 } from "../../../../../global-styles/typography.css"
import EventDetailsModal from "../../EventDetailsModal/EventDetailsModal"

const DateDisplayContainerComponent = ({
  height,
  i,
  month,
  currentMonth,
  item,
  day,
  todaysDate,
  open,
}) => {
  return (
    <DateDisplayContainer height={height}>
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
  )
}

export default DateDisplayContainerComponent
