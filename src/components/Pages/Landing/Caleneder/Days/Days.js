import React, {useRef, useState} from "react"

<<<<<<< HEAD
import useGetDaysOfMonth from '../../../../hooks/DateInformation'
=======
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth() 
>>>>>>> a46762fe4e53922b2f0e24dcfb48985b84c122b8

import CalanderView from "../CalenderViews/CalanderView"
import EventsListView from "../CalenderViews/EventsListView"

<<<<<<< HEAD
import { DaysWrapper } from "../Calender.css"
import useGetElementSize from "../../../../hooks/ItemSizing"
=======
  useEffect(() => {
    let date = new Date(Date.UTC(2021, month, 1))
    
    const day = { weekday: "long" }
    const dat = { day: "numeric" }
    let days = []
    
    while (date.getUTCMonth() === month) {
      let iterator = date.getDate()
      
    if ( iterator < 10 ){
      days.push({
        day: date.toLocaleDateString("au-EN", day),
        date: "0" + date.toLocaleDateString("au-EN", dat),
      })}
      else{
      days.push({
        day: date.toLocaleDateString("au-EN", day),
        date: date.toLocaleDateString("au-EN", dat),
      })}
      date.setUTCDate(date.getUTCDate() + 1)
    }
    setDaysToDisplay(days)
  
    
  }, [month])
>>>>>>> a46762fe4e53922b2f0e24dcfb48985b84c122b8


const Days = ({ daysView }) => {
  const { daysToDisplay, day, date, todaysDate } = useGetDaysOfMonth()
  const daysWrapperRef = useRef(null)
  const {elementWidth} = useGetElementSize(daysWrapperRef)
  const [openModel, setOpenModel] = useState(1)
 

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
