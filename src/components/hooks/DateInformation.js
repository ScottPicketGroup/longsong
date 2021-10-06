import { useEffect, useState } from "react";

const useGetDaysOfMonth = () => {
    const date = new Date()
    const day = date.getDay()
    const year = date.getFullYearYear()
    const month = date.getMonth()
    const [daysToDisplay, setDaysToDisplay] = useState()

    useEffect(() => {
        let date = new Date(Date.UTC(2021, month, 1))

        const day = { weekday: "long" }
        const dat = { day: "numeric" }
        let days = []

        while (date.getUTCMonth() === month) {
            let iterator = date.getDate()

            if (iterator < 10) {
                days.push({
                    day: date.toLocaleDateString("au-EN", day),
                    date: "0" + date.toLocaleDateString("au-EN", dat),
                })
            }
            else {
                days.push({
                    day: date.toLocaleDateString("au-EN", day),
                    date: date.toLocaleDateString("au-EN", dat),
                })
            }
            date.setUTCDate(date.getUTCDate() + 1)
        }
        setDaysToDisplay(days)


    }, [date])

    return { day, year, month, daysToDisplay }
}

export default useGetDaysOfMonth