import { useEffect, useState } from "react"

const useGetDaysOfMonth = (currentMonth, nextMonth, events) => {
  const [daysToDisplay, setDaysToDisplay] = useState([])
  const date = new Date()
  const todaysDate = date.getDate()
  const day = date.getDay()
  const year = date.getFullYear()
  const month = date.getMonth()
  let monthtoIt = currentMonth < 12 ? currentMonth - 1 : currentMonth % 12 - 1
  const dat = { day: "numeric" }

  useEffect(() => {
   
    let date = new Date(Date.UTC(year, currentMonth, 1))
   
    const day = { weekday: "long" }
    const dat = { day: "numeric" }
    let days = []
    while (date.getUTCMonth() - 1 === monthtoIt) {
      let iterator = date.getDate()
      let m
      if (iterator < 10 && events) {
        const eventToPush = events.map(event => {
          if (
            "0" + date.toLocaleDateString("au-EN", dat) ==
            event.node.eventDate.split(1)[0]
          ) {
            m = event
            
          }
        })

        days.push({
          dayIndex: date.getDay(),
          day: date.toLocaleDateString("au-EN", day),
          date: "0" + date.toLocaleDateString("au-EN", dat),
          event: m,
        })
      } else {
        const eventToPush = events && events.map(event => {
          if (
          date.toLocaleDateString("au-EN", dat) ==
            event.node.eventDate.split(1)[0]
          ) {
            m = event
            console.log(m, 'hi', event)
          }
        }) 
       
        days.push({
          dayIndex: date.getDay(),
          day: date.toLocaleDateString("au-EN", day),
          date: date.toLocaleDateString("au-EN", dat),
          event: m,
        })
      }
      date.setUTCDate(date.getUTCDate() + 1)
    }
    const renderDates = () => {
      if (days.length === 0) return
      let daysForDisplay = []
      const startDiff = days[0].dayIndex
      let i = 1
      while (i < 43) {
        if (i >= startDiff && i <= days.length + startDiff - 1) {
          daysForDisplay.push(days[i - startDiff])
          i++
        } else {
          daysForDisplay.push({
            dayIndex: i % 7 + 1,
            day: "",
            date: "",
            event: {},
          })
          i++
        }
      }
      return daysForDisplay
    }
    const data = renderDates();
    setDaysToDisplay(data)
  }, [currentMonth, nextMonth, events])

  return { day, year, month, daysToDisplay, date, todaysDate }
}

export default useGetDaysOfMonth
