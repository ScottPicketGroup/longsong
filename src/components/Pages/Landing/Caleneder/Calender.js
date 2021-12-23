import React, { useEffect, useRef } from "react"
import { CalanderWrapper } from "./Calender.css"
import Days from "./Days/Days"
import Navigation from "./Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"

import useChangeMonth from "../../../hooks/ChangeMonth"
import useWindowDimensions from "../../../hooks/useWindowDimensions"

const Calender = () => {
  const [daysView, setDaysView] = React.useState(false)
  const [events, setEvents] = React.useState([])
  const calenderRef = useRef(null)
  const { isFade, setIsFade, currentMonth } = useChangeMonth()

  const { width } = useWindowDimensions()
  const data = useStaticQuery(graphql`
    query allEvents {
      allContentfulLongsongEvents {
        edges {
          node {
            id
            eventName
            slug
            eventMedia {
              title
            }
            eventDescription {
              raw
            }
            eventDate
            isTheVenueOpenToThePublic
            venueOpenBeforeEventStart
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
    // eslint-disable-next-line
  }, [currentMonth, isFade])

  useEffect(() => {
    if (width <= 450) {
      setDaysView(true)
    }
    // eslint-disable-next-line
  }, [daysView])

  return (
    <CalanderWrapper ref={calenderRef}>
      <Navigation daysView={daysView} setDaysView={setDaysView} />
      <Days daysView={daysView} events={events} />
    </CalanderWrapper>
  )
}

export default Calender
