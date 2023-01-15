import { NotOpenToPublic } from "./DetailsDisplayComponents/NotOpenToPublic"
import { Link } from "gatsby"
import React from "react"
import { Heading2 } from "../../../../global-styles/typography.css"
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import EventContentsSection from "./DetailsDisplayComponents/EventContentsSection"
import { EventFooterWrapper, EventInfoWrapper } from "../Calender.css"
import NoEventDisplay from "./DetailsDisplayComponents/NoEventDisplay"

const EventDetailsDisplay = ({
  eventDetails,
  actualMonth,
  setMenuOpen,
  item,
  day,
}) => {
  

  return (
    <>
      {
        // no event
        typeof item.event == "undefined" ? (
          <NoEventDisplay item={item} />
        ) : // not open to public
        eventDetails.isTheVenueOpenToThePublic === false ? (
          <NotOpenToPublic item={item} />
        ) : // event
        item.event.node ? (
          <EventContentsSection item={item} />
        ) : (
          <></>
        )
      }
      {eventDetails.eventDate &&
      eventDetails.eventDate.slice(5, 10).replace("-", "") ===
        actualMonth + item.date ? (
        <EventFooterWrapper>
          <Link
            onClick={() => setMenuOpen(false)}
            to={`events/${eventDetails.eventName.replace(/\s/g, "-")}${
              "-" +
              eventDetails.eventDate.slice(5, 10) +
              "-" +
              eventDetails.eventDate.slice(0, 4)
            }`}
          >
            VIEW DETAILS
          </Link>
          <LongsongIcon />
        </EventFooterWrapper>
      ) : (
        <EventFooterWrapper>
          <LongsongIcon />
        </EventFooterWrapper>
      )}
      {/* {

    !eventDetails ?

  (
    <>no event</>
  ) :

      eventDetails && 
      eventDetails.isTheVenueOpenToThePublic === false ? (
       <></>
      ) : 
      
      (
        <EventInfoWrapper>
          <EventContents>
          
            {item.event && item.event.node.eventName && eventDetails.isTheVenueOpenToThePublic !== false? (
              <>
                <Heading2>{eventDetails.eventName}</Heading2>
                {eventDetails &&
                eventDetails.eventDate &&
                parseInt(eventDetails.eventDate.slice(11, 14)) - 12 !== -12 ? (
                  <Heading2>
                    
                    {`FROM ${
                      parseInt(eventDetails.eventDate.slice(11, 14)) - 12
                    }`}
                    –LATE
                  </Heading2>
                ) : !eventDetails.eventDate || !eventDetails.eventDate.includes("00:00")   ? (
                  <>
                    <Heading2>OPEN 5PM–LATE</Heading2>
                  </>
                ) : null}
                <Heading2>{eventDetails.drinksSpecialTitle}</Heading2>
                <Heading2>{eventDetails.foodSpecialTitle}</Heading2>
              </>
            ) : (
              <>
             
              </>
            )}

            <Heading2>
              {dayOfWeek === "Sunday" ||
              dayOfWeek === "Monday" ||
              dayOfWeek === "Tuesday"
                ? "CLOSED"
                : eventDetails.eventDate &&
                  eventDetails.eventDate.slice(5, 10).replace("-", "") ===
                    actualMonth + item.date}
            </Heading2>
          </EventContents>

          
        </EventInfoWrapper>
      )} */}
    </>
  )
}

export default EventDetailsDisplay
