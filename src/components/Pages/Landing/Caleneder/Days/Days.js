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
import { BreakLine } from "../../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
const Days = ({ daysView }) => {
  const [daysToDisplay, setDaysToDisplay] = React.useState()

  const date = new Date()
  const day = date.getDay()
  const year = date.getYear()
  const month = date.getMonth()

  useEffect(() => {
    var date = new Date(Date.UTC(year, month, 1))
    const day = { weekday: "long" }
    const dat = { day: "numeric" }
    var days = []
    while (date.getUTCMonth() === month) {
      days.push({
        day: date.toLocaleDateString("au-EN", day),
        date: date.toLocaleDateString("au-EN", dat),
      })
      date.setUTCDate(date.getUTCDate() + 1)
    }
    setDaysToDisplay(days)
  }, [])
  console.log(daysToDisplay)
  return (
    <DaysWrapper cols={daysView}>
      {daysToDisplay &&
        daysToDisplay.map((item, i) =>
          daysView && day < i + 1 ? (
            <DayContainer>
              <DateDisplayContainer day={item.date} date={day} i={i} key={i}>
                <DateDisplayContainer>
                  <Heading3 day={item.date} date={day} i={i}>
                    {item.day}
                  </Heading3>
                  <Number1 day={item.date} date={day} i={i}>
                    {item.date}
                  </Number1>
                </DateDisplayContainer>
              </DateDisplayContainer>
            </DayContainer>
          ) : !daysView ? (
            <DayContainer day={item.date} date={day} i={i} key={i}>
               <DateDisplayContainer>
              <Heading3 day={item.date} date={day} i={i}>
                {item.day}
              </Heading3>
              <Number1 day={item.date} date={day} i={i}>
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
