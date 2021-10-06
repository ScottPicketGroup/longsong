import React from "react"
import { DayIconWrapper } from "../../Calender.css"

const DayIcon = ({ setDaysView, daysView }) => {

  return (
    <DayIconWrapper
   
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      viewBox="0 0 40 40"
      onClick={() => setDaysView(!daysView)}
    >
      <path
        id="Path_10468"
        data-name="Path 10468"
        d="M31.357,48.5V31.357H48.5V48.5Zm0-40H48.5V25.643H31.357ZM8.5,42.786H25.643V48.5H8.5Zm0-11.429H25.643v5.714H8.5Zm0-11.429H25.643v5.714H8.5ZM8.5,8.5H25.643v5.714H8.5Z"
        transform="translate(48.5 48.5) rotate(180)"
       
        fillRule="evenodd"
      />
    </DayIconWrapper>
  )
}

export default DayIcon
