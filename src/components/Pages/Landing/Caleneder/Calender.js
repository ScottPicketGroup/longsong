import React, { useEffect, useRef } from "react"
import { CalanderWrapper } from "./Calender.css"
import Days from "./Days/Days"
import Navigation from "./Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"
import useGetElementSize from "../../../hooks/ItemSizing"

const Calender = () => {
  const [daysView, setDaysView] = React.useState(false)

  const [currentMonth, setCurrentMonth] = React.useState(0)
  const [nextMonth, setNextMonth] = React.useState(1)
  const [events, setEvents] = React.useState([])
  const [isFade, setIsFade] = React.useState(false)
  const calenderRef = useRef(null)
  const { elementWidth } = useGetElementSize(calenderRef);
  
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
    if (elementWidth <= 450) {
      setDaysView(true);
    }
  }, [elementWidth, daysView])

  const handlePreviousMonthChange = () => {
    if (currentMonth === 0) {
      setCurrentMonth(0)
      setNextMonth(1)
    } else if (currentMonth < 12) {
      let next = nextMonth - 1
      let current = currentMonth - 1
      setCurrentMonth(current)
      setNextMonth(next)
    }
    setIsFade(false)
  }

  const handleNextMonthChange = () => {
    let next = nextMonth + 1
    let current = currentMonth + 1
    setNextMonth(next)
    setCurrentMonth(current)
    setIsFade(false)
  }

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
      {isFade && <Days
        events={events}
        daysView={daysView}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        nextMonth={nextMonth}
        setNextMonth={setNextMonth}
      />}
    </CalanderWrapper>
  )
}

export default Calender
