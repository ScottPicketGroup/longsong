import React from "react"
import { BC4 } from "../../../global-styles/typography.css"
import { SubscribeWrapper } from "./Subscribe.css"
import SubscribeForm from "./SubscribeForm"

const FooterSocials = () => {
  return (
    <SubscribeWrapper>
      <BC4 marginBottom="sm">SUBSCRIBE</BC4>
      <BC4 marginBottom="md">
      Sign up for updates from the Scott Pickett Group and be the first to hear about events, collaborations and more. 
      </BC4>
      <SubscribeForm />
    </SubscribeWrapper>
  )
}

export default FooterSocials
