import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
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
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
const EventsListView = ({
  day,
  i,
  item,
  todaysDate,
  currentMonth,
  month,
  date,
  events
}) => {
  const dayContainerRef = useRef(null)
  const { elementWidth } = useGetElementSize(dayContainerRef)
  const asdf = parseInt(item.date, 10)

const thisFakeMonth = month + 2
const componentDate = item.date 


const [event, setEvent] = React.useState({})

events.map(e => {
 
  if (e.node.eventDate.slice(0,2) === componentDate) console.log(e)
})



  return (
<>
    {
      events.map(e => {
        if(e.node.eventDate.slice(0,2) === componentDate) 
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
         {asdf === todaysDate + 1
            ? "Tomorrow"
            : item.day === "Sunday"
            ? "Closed" : e.node.isTheVenueOpenToThePublic === false ? "Longsong bar is closed for private event"
            : (
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
             {e.node.eventName} 
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
                {e.node.drinksSpecialTitle}
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
               {e.node.foodSpecialTitle}
              </Heading2>
            </EventsListPerformerDetailsWrapper>
            )}
      
  
      </EventsListDetailsWrapper>
      <EventsListDetailsViewDetailsLink
        currentMonth={currentMonth}
        calander
        month={month}
        currentMonth={currentMonth}
        calander
        dayOfWeek={item.day}
        day={day}
        date={todaysDate}
        i={i}
      >
        {e.node.isTheVenueOpenToThePublic === false ? (
 <Link to={`events/${e.node.eventName.toLowerCase().replace(" ", "-")}`}>VIEW DETAILS</Link>
        ): (
          "CLOSED"
        )}
        
          
  
      </EventsListDetailsViewDetailsLink>
    </EventDayContainer>
  
          
        )
      } )
    }
</>
  )
}

export default EventsListView
