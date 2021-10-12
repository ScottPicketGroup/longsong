import React, { createContext, useContext, useState } from "react"

const ChangeMonthContext = createContext()

export const ChangeMonthProvider = ({ children }) => {
  const [currentMonth, setCurrentMonth] = useState(0)
  const [nextMonth, setNextMonth] = useState(1)
  const [isFade, setIsFade] = useState(false)

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
    <ChangeMonthContext.Provider
      value={{ 
        isFade,
        setIsFade,
        currentMonth,
        setCurrentMonth,
        nextMonth,
        setNextMonth,
        handlePreviousMonthChange,
        handleNextMonthChange
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
