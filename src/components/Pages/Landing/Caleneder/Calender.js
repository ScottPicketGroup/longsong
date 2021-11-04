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
            slug
            drinksSpecialDetails {
              raw
            }
            drinksSpecialTitle
            eventDate(formatString: "DDMMYY HH.mm")
            eventDescription {
              raw
            }
            eventMedia {
              gatsbyImageData
            }
            eventName
           
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

  return (
    <CalanderWrapper ref={calenderRef}>
      <Navigation daysView={daysView} setDaysView={setDaysView} />
      {isFade && <Days events={events} daysView={daysView} />}
    </CalanderWrapper>
  )
}

export default Calender
