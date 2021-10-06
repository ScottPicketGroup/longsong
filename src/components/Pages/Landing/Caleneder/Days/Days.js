import React, {useRef, useState} from "react"

import useGetDaysOfMonth from '../../../../hooks/DateInformation'

import CalanderView from "../CalenderViews/CalanderView"
import EventsListView from "../CalenderViews/EventsListView"

import { DaysWrapper } from "../Calender.css"
import useGetElementSize from "../../../../hooks/ItemSizing"


const Days = ({ daysView, currentMonth,  nextMonth, events }) => {
  const { daysToDisplay, day, date, todaysDate } = useGetDaysOfMonth(currentMonth,  nextMonth, events)
  const daysWrapperRef = useRef(null)
  const {elementWidth} = useGetElementSize(daysWrapperRef)
  const [openModel, setOpenModel] = useState(null)
 

  return (
    <DaysWrapper cols={daysView ? "true" : "false"}  ref={daysWrapperRef}>
      {daysToDisplay &&
        daysToDisplay.map((item, i) =>
          daysView && day < i + 1 ? (
            <EventsListView day={item.date} date={date} i={i} item={item} key={i + 4} openModel={openModel} setOpenModel={setOpenModel}/>
          ) : !daysView ? (
            <CalanderView day={item.date} todaysDate={todaysDate} i={i} item={item} key={i + 5} modalWidth={elementWidth}
            openModel={openModel} setOpenModel={setOpenModel}
            />
          ) : null
        )}
    </DaysWrapper>
  )
}

export default Days
