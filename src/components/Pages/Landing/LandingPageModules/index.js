import React from "react"

import PrivateEventModule from "./PrivateEventModule"
import MenusModule from "./MenusModule"
import EventsModule from "./EventsModule"

const LandingEventsContainer = ({ data }) => {
  console.log(data)
  return (
    <>
      
      <MenusModule data={data[0]} />
      {/* <EventsModule data={data[2].landingPageEventsList} /> */}
      <PrivateEventModule data={data[1]} />
    </>
  )
}

export default LandingEventsContainer
