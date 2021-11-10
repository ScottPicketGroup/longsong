import React, { useRef, useState, useEffect } from "react"

import useGetDaysOfMonth from "../../../../hooks/DateInformation"

import CalanderView from "../CalenderViews/CalanderView"
import EventsListView from "../CalenderViews/EventsListView"

import { DaysWrapper } from "../Calender.css"
import useScrollPosition from "../../../../hooks/ScrollPosition"
import useActivePage from "../../../../hooks/ActivePage"
import useChangeMonth from "../../../../hooks/ChangeMonth"

const Days = ({ daysView, events }) => {
  const { currentMonth, nextMonth } = useChangeMonth()
  const { daysToDisplay, todaysDate, month } = useGetDaysOfMonth(
    currentMonth,
    nextMonth,
    // events
  )

  console.log(useGetDaysOfMonth().events)

  const daysWrapperRef = useRef(null)
  const { activePage } = useActivePage()
  const [elementWidth, setElementWidth] = useState(0)

  useEffect(() => {
    if (daysWrapperRef.current)
      setElementWidth(daysWrapperRef.current.clientWidth)
  }, [activePage, daysWrapperRef])

  const [openModel, setOpenModel] = useState(null)
  const scrollPosition = useScrollPosition()

  return (
    <DaysWrapper
      cols={daysView ? "true" : "false"}
      ref={daysWrapperRef}
      scrollPosition={scrollPosition}
    >
      {daysToDisplay &&
        daysToDisplay.map(
          (item, i) =>
            !daysView && (
              <CalanderView
                key={i + 5}
                i={i}
                day={item.date}
                todaysDate={todaysDate}
                // date={date}
                item={item}
                modalWidth={elementWidth}
                currentMonth={currentMonth}
                month={month}
                openModel={openModel}
                setOpenModel={setOpenModel}
              />
            )
        )}
    </DaysWrapper>
  )
}

export default Days
