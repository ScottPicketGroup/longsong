import React, { useEffect } from "react"
import { Heading2, Heading3, Number1 } from "../../../../global-styles/typography.css"
import {
  DayContainer,
  DaysWrapper,
  DateDisplayContainer,
  EventDetailsWrapper,
  EventListWrapper,
  EventFooterWrapper,
} from "../Calender.css"
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"



const Days = ({ daysView }) => {
  const [daysToDisplay, setDaysToDisplay] = React.useState()

  const date = new Date()
  const day = date.getDay()
  const year = date.getYear().slice(1,year.length)
  const month = date.getMonth() 


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
  
    
  }, [])



  return (
    <DaysWrapper cols={daysView ? "true" : "false"}>
      {daysToDisplay &&
        daysToDisplay.map((item, i) =>
          daysView && day < i + 1 ? (
            <DayContainer i={i}>
              <DateDisplayContainer  dayOfWeek={item.day} day={item.date} date={date.getDate()} i={i} key={i}>
                <DateDisplayContainer>
                  <Heading3 dayOfWeek={item.day} day={item.date} date={date.getDate()} i={i}>
                    {item.day}
                  </Heading3>
                  <Number1 dayOfWeek={item.day} day={item.date} date={date.getDate()} i={i}>
                    {item.date}
                  </Number1>
                </DateDisplayContainer>
              </DateDisplayContainer>
            </DayContainer>
          ) : !daysView ? (
            <DayContainer day={item.date} date={date.getDate()} i={i} key={i}>
               <DateDisplayContainer>
              <Heading3 day={item.date} date={date.getDate()} i={i}>
                {item.day}
              </Heading3>
              <Number1 day={item.date} date={date.getDate()} i={i}>
                {item.date}
              </Number1>
              </DateDisplayContainer>
              <EventDetailsWrapper>
                <EventListWrapper>
                  <Heading2>
                    Event 1
                  </Heading2>
                  <Heading2>
                    Event 1
                  </Heading2>
                  <Heading2 marginBottom="sm">
                    Event 1
                  </Heading2>
               
                </EventListWrapper>
                <EventFooterWrapper>
                  <Heading2>VIEW DETAILS</Heading2>
                  <LongsongIcon/>
                </EventFooterWrapper>
              </EventDetailsWrapper>
            </DayContainer>
          ) : null
        )}
    </DaysWrapper>
  )
}

export default Days
