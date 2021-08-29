import React from "react"
import { BC4 } from "../../../global-styles/typography.css"
import { SubscribeWrapper } from "./Subscribe.css"
import SubscribeForm from "./SubscribeForm"

const FooterSocials = () => {
  return (
    <SubscribeWrapper>
      <BC4 marginBottom="sm">SUBSCRIBE</BC4>
      <BC4 marginBottom="md">
      Sign up to our newletter for news, stories and invitations to the things we love to share and enjoy from Pickett & Co.
      </BC4>
      <SubscribeForm />
    </SubscribeWrapper>
  )
}

export default FooterSocials
