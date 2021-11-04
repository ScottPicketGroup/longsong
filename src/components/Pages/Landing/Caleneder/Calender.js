import React, { useEffect, useRef } from "react"
import { CalanderWrapper } from "./Calender.css"
import Days from "./Days/Days"
import Navigation from "./Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"

import useChangeMonth from "../../../hooks/ChangeMonth"
import useWindowDimensions from "../../../hooks/useWindowDimensions"

const Calender = () => {
  const [daysView, setDaysView] = React.useState(false)
  // const [events, setEvents] = React.useState([])
  const calenderRef = useRef(null)
<<<<<<< HEAD
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
  const { height, width } = useWindowDimensions()
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
          }
        }
      }
    }
  `)
  useEffect(() => {
    data && setEvents(data.allContentfulLongsongEvents.edges)
  }, [data])
=======
  const { isFade, setIsFade, currentMonth } = useChangeMonth()

  const { width } = useWindowDimensions()
//   const data = useStaticQuery(graphql`
//     query allEvents {
//       allContentfulLongsongEvents {
//         edges {
//           node {
//             slug
//             drinksSpecialDetails {
//               raw
//             }
//             drinksSpecialTitle
//             eventDate(formatString: "DDMMYY HH.mm")
//             eventDescription {
//               raw
//             }
//             eventMedia {
//               gatsbyImageData
//             }
//             eventName
//             isTheVenueOpenToThePublic
//           }
//         }
//       }
//     }
//   `
// )
  // useEffect(() => {
  //   data && setEvents(data.allContentfulLongsongEvents.edges)
  // }, [data])
>>>>>>> 2163e1b9eb77d6af65acbaeeaddb3a5b1328e969

  useEffect(() => {
    setIsFade(true)
  }, [currentMonth, isFade])

  useEffect(() => {
    if (width <= 450) {
      setDaysView(true)
    }
  }, [daysView])

<<<<<<< HEAD
  // useEffect(() => {
  //   setCalenderRef(calenderRef)
  // }, [calenderRef])

=======
>>>>>>> 2163e1b9eb77d6af65acbaeeaddb3a5b1328e969
  return (
    <CalanderWrapper ref={calenderRef}>
      <Navigation daysView={daysView} setDaysView={setDaysView} />
      {/* {isFade && <Days events={events} daysView={daysView} />} */}
      <Days daysView={daysView} />
    </CalanderWrapper>
  )
}

export default Calender
