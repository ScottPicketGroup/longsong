import React from "react"

import PrivateEventModule from "./PrivateEventModule"
import MenusModule from "./MenusModule"
import EventsModule from "./EventsModule"

const LandingEventsContainer = ({ data }) => {
  return (
    <>
      <PrivateEventModule data={data[2]} />
      <MenusModule data={data[0]} />
      <EventsModule data={data[1].landingPageEventsList} />
    </>
  )
}

export default LandingEventsContainer
