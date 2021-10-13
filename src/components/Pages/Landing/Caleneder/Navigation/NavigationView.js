import React, {useEffect} from 'react'
import { NavigationViewWrapper } from '../Calender.css'
import CalenderIcon from './icons/CalenderIcon'
import DayIcon from './icons/DayIcon'

const NavigationView = ({daysView, setDaysView}) => {



    return (
        <NavigationViewWrapper>
        <CalenderIcon setDaysView={setDaysView} daysView={daysView}/>
        <DayIcon setDaysView={setDaysView} daysView={daysView}/>
      </NavigationViewWrapper>
    )
}

export default NavigationView
