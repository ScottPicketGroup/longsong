import React from "react"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  SlideOutPageWrapper,
} from "../Bar/Space.css"
import PageSections from "../PageSections"
import FirstModule from "../FIrstModule"
import ContactUsForm from "./ContactForm/ContactUsForm"
import Intro from "./Intro"
import usePrivateDiningQuery from "./PrivateDiningQuery"

const GroupBookings = ({ activePage }) => {
const pageData = usePrivateDiningQuery()

  return (
    <SlideOutPageWrapper activePage={activePage} page={3}>
      <Intro data={pageData.intro} />
      <PageSections data={pageData} margin="normal" />
      <FirstModule data={pageData}/>
      <BreakLine first />
      <ContactUsForm />
    </SlideOutPageWrapper>
  )
}

export default GroupBookings
