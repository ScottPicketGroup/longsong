import React, { createContext, useContext, useState, useEffect } from "react"

const ChangeMonthContext = createContext()

export const ChangeMonthProvider = ({ children }) => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
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

  const handlePreviousMonthChange = () => {
    let next = nextMonth - 1
    let current = currentMonth - 1
    if (current >= month) {
      setCurrentMonth(current)
      setNextMonth(next)
      setIsFade(false)
    }
  }

  const handleNextMonthChange = () => {
    let next = nextMonth + 1
    let current = currentMonth + 1
    setNextMonth(next)
    setCurrentMonth(current)
    setIsFade(false)
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
