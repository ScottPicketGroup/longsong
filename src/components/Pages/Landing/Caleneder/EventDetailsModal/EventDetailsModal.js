import React, {useEffect} from 'react'
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import {
  EventDetailsWrapper,
  EventListWrapper,
  EventFooterWrapper,
  EventInfoWrapper,
  EventContents
} from "../Calender.css"
import { Heading3, Number1, Heading2 } from "../../../../global-styles/typography.css"
import { DateDisplayContainer } from "../Calender.css"
import { Link } from 'gatsby'


const EventDetailsModal = ({ open, setOpenModel, height, width, i, setOpen, day, dayOfWeek, todaysDate, item, month }) => {
const [eventDetails, setEventDetails] = React.useState({})

useEffect(() => {
  item.event && setEventDetails(item.event.node)
}, [item])

  return (

    <EventDetailsWrapper
      open={open}
      height={height * 3}
      width={width / 7 * 2 - 10}
      i={i}
      onClick={() => setOpen(false)}
    >
      <EventListWrapper width={width} height={height} i={i}>
        <DateDisplayContainer
          height={height}
          width={width}
          modal
        >
          <Heading3
            calander
            dayOfWeek={day} day={day} date={todaysDate} i={i} key={i + 1}>
            {item.date === todaysDate + 1 ? 'Tomorrow' : item.day}
          </Heading3>
          <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i} key={i + 2}>
            {item.date}
          </Number1>
        </DateDisplayContainer>
      </EventListWrapper>



      
      {
            eventDetails.isTheVenueOpenToThePublic === false ? (
           <EventInfoWrapper>
             <EventContents>
             <Heading2>
               Longsong Bar is closed for a private function
             </Heading2>
              </EventContents>
              <EventFooterWrapper>
         
        
          <LongsongIcon />
        </EventFooterWrapper>
           </EventInfoWrapper>
            ) : (
              <EventInfoWrapper>
        <EventContents>
        {eventDetails.eventMedia ? (
        <>
        <Heading2>
            {eventDetails.eventName }
          </Heading2>
          <Heading2>
            {eventDetails.drinksSpecialTitle}
          </Heading2>
          <Heading2>
          {eventDetails.foodSpecialTitle}
          </Heading2>
          </>
         ) : <></>
        
        } 
          <Heading2>
            
         Happy Hour

          </Heading2>
          <Heading2>
            5 - 7 PM
          </Heading2>
        </EventContents>
        <EventFooterWrapper>
          {
            eventDetails.eventName &&   <Link to={`events/${eventDetails.slug`}>VIEW DETAILS</Link>
          }
      
        
          <LongsongIcon />
        </EventFooterWrapper>
      </EventInfoWrapper>

            )
          }
    </EventDetailsWrapper>

  )
}

export default EventDetailsModal