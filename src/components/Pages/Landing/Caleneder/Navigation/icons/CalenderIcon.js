import React from "react"
import { MonthIconWrapper } from "../../Calender.css"

const CalenderIcon = ({daysView, setDaysView}) => {

  return (
    <MonthIconWrapper xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 39.869 40"
    daysView={daysView}
    onClick={() => setDaysView(false)}
   >
      <g
        id="Group_4547"
        data-name="Group 4547"
        transform="translate(-145.148 -8.5)"
      >
        <rect
          id="Rectangle_4532"
          data-name="Rectangle 4532"
          width="17.143"
          height="17.143"
          transform="translate(167.874 31.357)"
         
        />
        <rect
          id="Rectangle_4533"
          data-name="Rectangle 4533"
          width="17.143"
          height="17.143"
          transform="translate(167.874 8.5)"
      
        />
        <rect
          id="Rectangle_4534"
          data-name="Rectangle 4534"
          width="17"
          height="17"
          transform="translate(145.148 31.5)"
          
        />
        <rect
          id="Rectangle_4535"
          data-name="Rectangle 4535"
          width="17"
          height="17"
          transform="translate(145.148 8.5)"
          
        />
      </g>
    </MonthIconWrapper>
  )
}

export default CalenderIcon
