import { useEffect, useState } from "react";

const useGetDaysOfMonth = () => {
    
    
    const [daysToDisplay, setDaysToDisplay] = useState()
    const date = new Date()
    const todaysDate = date.getDate()
    const day = date.getDay()
    const year = date.getFullYear()
    const month = date.getMonth()
  
  
    useEffect(() => {
      let date = new Date(Date.UTC(year, month, 1))
      
      const day = { weekday: "long" }
      const dat = { day: "numeric" }
      let days = []
      
      while (date.getUTCMonth() === month) {
        let iterator = date.getDate()
        
      if ( iterator < 10 ){
        days.push({
          day: date.toLocaleDateString("au-EN", day),
          date: "0" + date.toLocaleDateString("au-EN", dat),
        })}
        else{
        days.push({
          day: date.toLocaleDateString("au-EN", day),
          date: date.toLocaleDateString("au-EN", dat),
        })}
        date.setUTCDate(date.getUTCDate() + 1)
      }
      setDaysToDisplay(days)
    
      
    }, [])

    return { day, year, month, daysToDisplay, date, todaysDate }
}

export default useGetDaysOfMonth