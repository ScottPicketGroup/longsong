import { useEffect, useState } from "react";


const useMonthsInfo = (current, next) => {
    const [thisMonthInfo, setThisMonthInfo] = useState([])
    const [nextMonthInfo, setNextMonthInfo] = useState([])
    
    const date = new Date()
    const year = date.getFullYear() 
    const month = date.getMonth()
    const monthNext = month + 1
   
useEffect(() => {
    let date = new Date(Date.UTC(year, month + current, 1))
    const options = {month: 'short'};
    const thisMonth = date.toLocaleDateString('en-EU', options)
    const nextMonthDate = new Date(Date.UTC(year, month + next, 1))
    const nextMonth = nextMonthDate.toLocaleDateString('en-EU', options)
    const thisMonthYear = date.getFullYear()
    const nextMonthYear = nextMonthDate.getFullYear() 

    setThisMonthInfo([thisMonth, thisMonthYear])
    setNextMonthInfo([nextMonth, nextMonthYear])
}, [current])

return {thisMonthInfo, nextMonthInfo, month}
}

export default useMonthsInfo