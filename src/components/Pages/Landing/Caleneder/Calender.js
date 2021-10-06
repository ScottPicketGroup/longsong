import React, {useEffect} from 'react'
import { CalanderWrapper} from './Calender.css'
import Days from './Days/Days'
import Navigation from './Navigation/Navigation'
import { useStaticQuery, graphql } from "gatsby"
const Calender = () => {
  const [daysView, setDaysView] = React.useState(false)
  

  const [currentMonth, setCurrentMonth] = React.useState(0)
  const [nextMonth, setNextMonth] = React.useState(1)
  const [events, setEvents] = React.useState([])

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
setEvents(data.allContentfulLongsongEvents.edges)
}, [data])


    return (
        <CalanderWrapper >
          <Navigation daysView={daysView} setDaysView={setDaysView}
          currentMonth={currentMonth} 
          setCurrentMonth={setCurrentMonth}
          nextMonth = {nextMonth}
          setNextMonth = {setNextMonth}
          />
          <Days 
          events={events}
          daysView={daysView} currentMonth={currentMonth}
          currentMonth={currentMonth} 
          setCurrentMonth={setCurrentMonth}
          nextMonth = {nextMonth}
          setNextMonth = {setNextMonth} />
        </CalanderWrapper>
    )
}

export default Calender
