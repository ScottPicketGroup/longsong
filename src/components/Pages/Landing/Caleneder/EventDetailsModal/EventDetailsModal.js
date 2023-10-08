import React, { useEffect } from "react"
import CalanderDateDisplay from "./CalanderDateDisplay"

import { EventDetailsWrapper } from "../Calender.css"

import useActivePage from "../../../../hooks/ActivePage"
import EventDetailsDisplay from "./EventDetailsDisplay"

const EventDetailsModal = ({
  open,
  height,
  width,
  i,
  setOpen,
  day,
  todaysDate,
  currentMonth,
  item,
  setOpenModel,
}) => {
  const [eventDetails, setEventDetails] = React.useState({})
  const[itemHeight, setItemHeight] = React.useState(0)
  const { setMenuOpen } = useActivePage()
  const [actualMonth, setActualMonth] = React.useState()

  useEffect(() => {
    if (!item.event) return
    if (item.event) {
      setEventDetails(item.event.node)
    }
    if (currentMonth < 10) {
      setActualMonth("0" + (currentMonth + 1))
    } else {
      setActualMonth(currentMonth + 1)
    }
  }, [item, currentMonth])
useEffect(() => {
  setItemHeight(height)
},[])

  return (
    <EventDetailsWrapper
      open={open}
      height={height * 3 + 15}
      width={width * 2 + 10}
      i={i}
      onClick={() => setOpen(false)}
      onMouseLeave={() => setOpenModel(null)}
    >
      <CalanderDateDisplay
        height={height}
        width={width}
        day={day}
        todaysDate={todaysDate}
        i={i}
        item={item}
      />
      <EventDetailsDisplay
        eventDetails={eventDetails}
        actualMonth={actualMonth}
        setMenuOpen={setMenuOpen}
        item={item}
        day={day}
      />
    </EventDetailsWrapper>
  )
}

export default EventDetailsModal
