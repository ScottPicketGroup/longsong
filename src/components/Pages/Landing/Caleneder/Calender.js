import React, { useEffect, useRef } from "react"
import { CalanderWrapper } from "./Calender.css"
import Days from "./Days/Days"
import Navigation from "./Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import useGetElementSize from "../../../hooks/ItemSizing"
import useChangeMonth from "../../../hooks/ChangeMonth"
import useWindowDimensions from "../../../hooks/useWindowDimensions"

const Calender = ({ setCalenderRef }) => {
  const [daysView, setDaysView] = React.useState(false)
  const [events, setEvents] = React.useState([])
  const calenderRef = useRef(null)
  const { elementWidth } = useGetElementSize(calenderRef)
  const {
    isFade,
    setIsFade,
    currentMonth,
    setCurrentMonth,
    nextMonth,
    setNextMonth,
    handlePreviousMonthChange,
    handleNextMonthChange,
  } = useChangeMonth()
  const { height, width } = useWindowDimensions();
  const data = useStaticQuery(graphql`
    query allEvents {
      allContentfulLongsongEvents {
        edges {
          node {
            drinksSpecialDetails {
              raw
            }
            drinksSpecialTitle
            eventDate(formatString: "DDMMYY")
            eventDescription {
              raw
            }
            eventMedia {
              gatsbyImageData
            }
            eventName
            foodSpecialDetails {
              raw
            }
            isTheVenueOpenToThePublic
            foodSpecialTitle
          }
        }
      }
    }
  `)
  useEffect(() => {
    data && setEvents(data.allContentfulLongsongEvents.edges)
  }, [data])

  useEffect(() => {
    setIsFade(true)
  }, [currentMonth, isFade])

  useEffect(() => {
    if (width <= 450) {
      setDaysView(true)
      
    }
  }, [daysView])



  // useEffect(() => {
  //   setCalenderRef(calenderRef)
  // }, [calenderRef])

  return (
    <CalanderWrapper ref={calenderRef}>
      <Navigation
        daysView={daysView}
        setDaysView={setDaysView}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        nextMonth={nextMonth}
        setNextMonth={setNextMonth}
        handlePreviousMonthChange={handlePreviousMonthChange}
        handleNextMonthChange={handleNextMonthChange}
      />
      {isFade && (
        <Days
          events={events}
          daysView={daysView}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          nextMonth={nextMonth}
          setNextMonth={setNextMonth}
        />
      )}
    </CalanderWrapper>
  )
}

export default Calender
