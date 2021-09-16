import React from "react"
import { BC4 } from "../../../global-styles/typography.css"
import { FooterLinksColumn } from "../../Footer.css"

const FooterSocials = () => {
  return (
    <FooterLinksColumn>
      <BC4 marginBottom="md">SOCIAL MEDIA</BC4>
      <BC4 marginBottom="sm">
        <a href="http://instagram.com/longsongmelbourne" target="_blank" rel="noreferrer">Instagram</a>
      </BC4>
      <BC4>
        <a href="https://www.facebook.com/longsongmelbourne/" target="_blank" rel="noreferrer">Facebook</a>
      </BC4>
    </FooterLinksColumn>
  )
}

export default FooterSocials
