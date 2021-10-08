import React, { useRef, useState, useEffect } from 'react'

import { DayContainer, DateDisplayContainer } from "../Calender.css"
import EventDetailsModal from '../EventDetailsModal/EventDetailsModal'

import { Heading3, Number1 } from "../../../../global-styles/typography.css"

import useGetElementSize from '../../../../hooks/ItemSizing'

const CalanderView = ({ day, i, item, todaysDate, modalWidth, openModel, setOpenModel }) => {

    const [open, setOpen] = useState(false)
    const dayContainerRef = useRef(null)

    const { elementWidth } = useGetElementSize(dayContainerRef)

    useEffect(() => {
        openModel === i ? setOpen(true) : setOpen(false)
    }, [openModel])


    return (
        <DayContainer dayOfWeek={day} day={day} date={todaysDate} i={i} key={i} ref={dayContainerRef} height={elementWidth}
            onClick={() => setOpenModel(i)}
        >
            <DateDisplayContainer
                height={elementWidth}
            >
                <Heading3
                    calander
                    dayOfWeek={item.day} day={day} date={todaysDate} i={i} key={i + 1}>
                    {item.date == todaysDate + 1 ? 'Tomorrow' : item.day}
                </Heading3>
                <Number1 dayOfWeek={item.day} day={day} date={todaysDate} i={i} key={i + 2} >
                    {item.date}
                </Number1>

                <EventDetailsModal
                eventData = {item.event}
                    dayOfWeek={day} day={day} date={todaysDate} i={i} key={i} height={elementWidth} item={item}
                    open={open}
                    i={i + 1}
                    height={elementWidth}
                    width={modalWidth}
                    onClick={() => setOpen(false)}
                    setOpen={setOpen}
                />
            </DateDisplayContainer>
        </DayContainer>
    )
}

export default CalanderView
