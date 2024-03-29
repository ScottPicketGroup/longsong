import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  EventsDateDisplayContainer,
  EventsListDetailsWrapper,
  EventsListDetailsViewDetailsLink,
  EventsListPerformerDetailsWrapper,
  EventDayContainer,
  EventHeading2,
  EventBC3,
  EventHeading3,
  EventNumber1,
  OnlyDesktopWrapper,
  OnlyMobileWrapper,
} from "../Calender.css"
import LongsongIcon from "../../../../MenuContainer/Icons/LongsongIcon"
import { MobileWrapper } from "../../../../global-styles/containers.css"
import useActivePage from "../../../../hooks/ActivePage"
import useChangeMonth from "../../../../hooks/ChangeMonth"

const EventsListView = ({
  day,
  i,
  item,
  todaysDate,
  month,
  events,
  daysView,
}) => {
  const dayContainerRef = useRef(null)
  const asdf = parseInt(item.date, 10)

  const [elementWidth, setElementWidth] = useState(0)
  const { setMenuOpen } = useActivePage()

  const { year, currentMonth } = useChangeMonth()
  const componentDate = `${year}${
    currentMonth < 10 ? "0" + (currentMonth + 1) : currentMonth + 1
  }${item.date}`
  useEffect(() => {
    setElementWidth(window.innerWidth * 0.423)
  }, [dayContainerRef, daysView])

  // console.log(
  //   events[3].node.eventDate.slice(5,10) + "-" + events[3].node.eventDate.slice(0,4)
  // )

  return (
    <>
      {events.map((e, index) => {
        let eventDate =
          e.node.eventDate
            .slice(0, 4)
            .replace("-", "")
            .replace("-", "")
            .replace("T", "") +
          e.node.eventDate.slice(5, 7) +
          e.node.eventDate.slice(8, 10)

        if (eventDate === componentDate)
          return (
            <EventDayContainer
              key={index}
              i={i}
              ref={dayContainerRef}
              currentMonth={currentMonth}
              month={month}
              dayOfWeek={item.day}
              day={day}
              date={todaysDate}
              isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
              height={elementWidth / 3.5}
              events
            >
              <EventsDateDisplayContainer
                events
                currentMonth={currentMonth}
                month={month}
                dayOfWeek={item.day}
                day={day}
                date={todaysDate}
                i={i}
                isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
                height={elementWidth / 3.5}
                width={elementWidth / 7 - 10}
              >
                <OnlyDesktopWrapper>
                  <EventHeading3
                    dayOfWeek={day}
                    day={day}
                    date={todaysDate}
                    i={i}
                    eventList={true}
                    isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
                  >
                    {asdf === todaysDate + 1
                      ? "TOMORROW"
                      : asdf === todaysDate
                      ? "TODAY"
                      : item.day === "Sunday"
                      ? "CLOSED"
                      : item.day.toUpperCase()}
                  </EventHeading3>
                  <EventNumber1
                    dayOfWeek={day}
                    day={day}
                    date={todaysDate}
                    i={i}
                    eventList={true}
                    isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
                  >
                    {item.date}
                  </EventNumber1>
                </OnlyDesktopWrapper>
                <MobileWrapper>
                  <EventHeading2
                    dayOfWeek={day}
                    day={day}
                    date={todaysDate}
                    i={i}
                    eventList={true}
                    isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
                    style={{ paddingLeft: "16px" }}
                  >
                    {asdf === todaysDate + 1
                      ? "TOMORROW"
                      : asdf === todaysDate
                      ? "TODAY"
                      : item.day === "Sunday"
                      ? "CLOSED"
                      : item.day.toUpperCase()}
                  </EventHeading2>
                  <EventNumber1
                    dayOfWeek={day}
                    day={day}
                    date={todaysDate}
                    i={i}
                    eventList={true}
                    isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
                  >
                    {item.date}
                  </EventNumber1>
                </MobileWrapper>
              </EventsDateDisplayContainer>
              <EventsListDetailsWrapper
                month={month}
                currentMonth={currentMonth}
                calander
                dayOfWeek={item.day}
                day={day}
                date={todaysDate}
                isTheVenueOpenToThePublic={e.node.isTheVenueOpenToThePublic}
                i={i}
              >
                <OnlyDesktopWrapper>
                  {item.day === "Sunday" ? (
                    <EventBC3
                      isTheVenueOpenToThePublic={
                        e.node.isTheVenueOpenToThePublic
                      }
                    >
                      CLOSED
                    </EventBC3>
                  ) : e.node.isTheVenueOpenToThePublic === false ? (
                    <EventBC3
                      isTheVenueOpenToThePublic={
                        e.node.isTheVenueOpenToThePublic
                      }
                      style={{ paddingLeft: "2.5rem" }}
                    >
                      {e.node.eventName}
                    </EventBC3>
                  ) : (
                    <EventsListPerformerDetailsWrapper>
                      <EventBC3
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        isTheVenueOpenToThePublic={
                          e.node.isTheVenueOpenToThePublic
                        }
                        i={i}
                      >
                        {e.node.eventName.toUpperCase()}
                      </EventBC3>
                      <EventBC3
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        isTheVenueOpenToThePublic={
                          e.node.isTheVenueOpenToThePublic
                        }
                        i={i}
                      >
                        {parseInt(e.node.eventDate.slice(11)) + ":00"}
                      </EventBC3>
                      <EventBC3
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        isTheVenueOpenToThePublic={
                          e.node.isTheVenueOpenToThePublic
                        }
                        i={i}
                      >
                        {e.node.foodSpecialTitle}
                      </EventBC3>
                    </EventsListPerformerDetailsWrapper>
                  )}
                </OnlyDesktopWrapper>
                <OnlyMobileWrapper>
                  {item.day === "Sunday" ? (
                    <EventHeading2
                      isTheVenueOpenToThePublic={
                        e.node.isTheVenueOpenToThePublic
                      }
                    >
                      CLOSED
                    </EventHeading2>
                  ) : e.node.isTheVenueOpenToThePublic === false ? (
                    <EventHeading2
                      isTheVenueOpenToThePublic={
                        e.node.isTheVenueOpenToThePublic
                      }
                    >
                      LONGSING BAR IS CLOSD FOR PRIVATE EVENTS
                    </EventHeading2>
                  ) : (
                    <EventsListPerformerDetailsWrapper>
                      <EventHeading2
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        isTheVenueOpenToThePublic={
                          e.node.isTheVenueOpenToThePublic
                        }
                        i={i}
                      >
                        {e.node.eventName.toUpperCase()}
                      </EventHeading2>
                      <EventHeading2
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        isTheVenueOpenToThePublic={
                          e.node.isTheVenueOpenToThePublic
                        }
                        i={i}
                      >
                        {parseInt(e.node.eventDate.slice(11)) + ":00"}
                      </EventHeading2>
                      <EventHeading2
                        calander
                        month={month}
                        currentMonth={currentMonth}
                        calander
                        dayOfWeek={item.day}
                        day={day}
                        date={todaysDate}
                        isTheVenueOpenToThePublic={
                          e.node.isTheVenueOpenToThePublic
                        }
                        i={i}
                      >
                        {e.node.foodSpecialTitle}
                      </EventHeading2>
                    </EventsListPerformerDetailsWrapper>
                  )}
                </OnlyMobileWrapper>
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
                <OnlyDesktopWrapper>
                  {e.node.eventName &&
                  e.node.isTheVenueOpenToThePublic === true ? (
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to={`events/${e.node.eventName.replace(/\s/g, "-")}${
                        "-" +
                        e.node.eventDate.slice(5, 10) +
                        "-" +
                        e.node.eventDate.slice(0, 4)
                      }`}
                    >
                      VIEW DETAILS
                    </Link>
                  ) : (
                    <p style={{ color: "#6A6A6A" }}>CLOSED</p>
                  )}
                </OnlyDesktopWrapper>
                <OnlyMobileWrapper>
                  {e.node.isTheVenueOpenToThePublic === true ? (
                    <EventHeading2
                      isTheVenueOpenToThePublic={
                        e.node.isTheVenueOpenToThePublic
                      }
                    >
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to={`events/${e.node.eventName.replace(/\s/g, "-")}${
                          "-" +
                          e.node.eventDate.slice(5, 10) +
                          "-" +
                          e.node.eventDate.slice(0, 4)
                        }`}
                      >
                        VIEW DETAILS
                      </Link>
                    </EventHeading2>
                  ) : (
                    <EventHeading2
                      isTheVenueOpenToThePublic={
                        e.node.isTheVenueOpenToThePublic
                      }
                    >
                      CLOSED
                    </EventHeading2>
                  )}

                  <LongsongIcon />
                </OnlyMobileWrapper>
              </EventsListDetailsViewDetailsLink>
            </EventDayContainer>
          )
      })}
    </>
  )
}

export default EventsListView
