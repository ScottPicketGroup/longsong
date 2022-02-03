import React, { createContext, useContext, useState, useEffect } from "react"

const ChangeMonthContext = createContext()

export const ChangeMonthProvider = ({ children }) => {
  const date = new Date()
  const month = date.getMonth()
  const [year, setYear] = useState(date.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(month)
  const [nextMonth, setNextMonth] = useState(month + 1)
  const [isFade, setIsFade] = useState(false)

  const [thisMonthInfo, setThisMonthInfo] = useState([])
  const [nextMonthInfo, setNextMonthInfo] = useState([])

  useEffect(() => {
    const newDate = new Date(Date.UTC(year, currentMonth, 1))
    const options = { month: "short" }
    const thisMonth = newDate.toLocaleDateString("en-EU", options)
    const nextMonthDate = new Date(Date.UTC(year, currentMonth + 1, 1))
    const nextMonth = nextMonthDate.toLocaleDateString("en-EU", options)
    const thisMonthYear = newDate.getFullYear()
    const nextMonthYear = nextMonthDate.getFullYear()

    setThisMonthInfo([thisMonth, thisMonthYear])
    setNextMonthInfo([nextMonth, nextMonthYear])
    // eslint-disable-next-line
  }, [currentMonth])

  // compile variable with DDMMYY
  // compare against actual DDMMYY
  //

  const todaysMonthYear = `${date.getMonth()}` + `${year - 2000}`
  const currentMonthYear = `${currentMonth}` + `${thisMonthInfo[1] - 2000}`

 // console.log(currentMonthYear, todaysMonthYear)
  const handlePreviousMonthChange = () => {
    if ( currentMonth === 0 ) {
      setYear(year - 1)
      setCurrentMonth(11)
      setNextMonth(1)
    } 
    else if  (currentMonthYear > todaysMonthYear) {
      setCurrentMonth(currentMonth - 1)
      setNextMonth(nextMonth - 1)
    }
  }

  const handleNextMonthChange = () => {
    if (currentMonth === 11) {
      setYear(year + 1)
      setCurrentMonth(0)
      setNextMonth(1)
    } else {
      setCurrentMonth(currentMonth + 1)
      setNextMonth(nextMonth + 1)
    }
  }

  return (
    <ChangeMonthContext.Provider
      value={{
        isFade,
        setIsFade,
        currentMonth,
        setCurrentMonth,
        nextMonth,
        setNextMonth,
        year,
        setYear,
        handlePreviousMonthChange,
        handleNextMonthChange,
        thisMonthInfo,
        nextMonthInfo,
      }}
    >
      {children}
    </ChangeMonthContext.Provider>
  )
}
const useChangeMonth = () => {
  const context = useContext(ChangeMonthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
export default useChangeMonth
