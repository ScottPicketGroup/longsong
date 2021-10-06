import React from 'react'

import { Heading3, Number1 } from "../../../../global-styles/typography.css"
import { DayContainer, DateDisplayContainer } from "../Calender.css"

const EventsListView = ({ day, i, item, todaysDate }) => {
    console.log(todaysDate)
    return (
         <DayContainer i={i}>
            <DateDisplayContainer dayOfWeek={day} day={day} date={todaysDate} i={i} key={i}>
                <DateDisplayContainer>
                    <Heading3 dayOfWeek={day} day={day} date={todaysDate} i={i} key={i+1}>
                        {item.date === todaysDate + 1 ? 'tomorrow' : item.day}
                    </Heading3>
                    <Number1 dayOfWeek={day} day={day} date={todaysDate} i={i} key={i +2}>
                        {item.date}
                    </Number1>
                </DateDisplayContainer>
            </DateDisplayContainer>
        </DayContainer>

    )
}

export default EventsListView
