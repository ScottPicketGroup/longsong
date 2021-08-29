import React from 'react'
import { CalanderWrapper} from './Calender.css'
import Days from './Days/Days'
import Navigation from './Navigation/Navigation'

const Calender = () => {
  const [daysView, setDaysView] = React.useState(false)
  const [month, setMonth] = React.useState("Jan")
  console.log(daysView)
    return (
        <CalanderWrapper >
          <Navigation daysView={daysView} setDaysView={setDaysView}/>
          <Days daysView={daysView}/>
        </CalanderWrapper>
    )
}

export default Calender
