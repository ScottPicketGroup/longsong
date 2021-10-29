import React from "react"

import PrivateEventModule from "./PrivateEventModule"
import MenusModule from "./MenusModule"
import EventsModule from "./EventsModule"
import LandingImageGallery from './LandingImageGallery'
const LandingEventsContainer = () => {
 
  return (
    <>
      
      <MenusModule />
      <EventsModule/>
      <PrivateEventModule  /> 
      <LandingImageGallery />
    </>
  )
}

export default LandingEventsContainer

