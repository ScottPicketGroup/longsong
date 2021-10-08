import { useEffect, useState } from "react"

const useGetDaysOfMonth = (currentMonth, nextMonth, events) => {
  const [daysToDisplay, setDaysToDisplay] = useState([])
  const date = new Date()
  const todaysDate = date.getDate()
  const day = date.getDay()
  const year = date.getFullYear()
  const month = date.getMonth()
  let monthtoIt = month + currentMonth - 1

  useEffect(() => {
    let date = new Date(Date.UTC(year, currentMonth + 9, 1))

    const day = { weekday: "long" }
    const dat = { day: "numeric" }
    let days = []
    while (date.getUTCMonth() - 1 === monthtoIt) {
      let iterator = date.getDate()
      let m
      if (iterator < 10) {
        const eventToPush = events.map(event => {
          if (
            "0" + date.toLocaleDateString("au-EN", dat) ==
            event.node.eventDate.split(1)[0]
          ) {
            m = event
          }
        })

        days.push({
          day: date.toLocaleDateString("au-EN", day),
          date: "0" + date.toLocaleDateString("au-EN", dat),
          event: m,
        })
      } else {
        days.push({
          day: date.toLocaleDateString("au-EN", day),
          date: date.toLocaleDateString("au-EN", dat),
          event: m,
        })
      }
      date.setUTCDate(date.getUTCDate() + 1)
    }
    setDaysToDisplay(days)
  }, [currentMonth, nextMonth, events])

  return { day, year, month, daysToDisplay, date, todaysDate }
}

export default useGetDaysOfMonth
