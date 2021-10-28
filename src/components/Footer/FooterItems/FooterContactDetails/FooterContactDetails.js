import React from "react"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { BC4 } from "../../../global-styles/typography.css"
import { FooterLinksColumn } from "../../Footer.css"

const FooterContactDetails = () => {
  return (
    <FooterLinksColumn>
      <MobileWrapper>
        <BC4 marginBottom="sm">LOCATION & CONTACT DETAILS</BC4>
      </MobileWrapper>
      <DesktopWrapper>
        <BC4 marginBottom="md">CONTACT DETAILS</BC4>
      </DesktopWrapper>

      <BC4 marginBottom="md">
        Upstairs at <br />
        44 Little Bourke Street VIC 3000 <br />
        <a href="mailto:info@longsong.com.au">info@longsong.com.au</a>
        <br />
        03 9653 1600
      </BC4>
      <BC4 >
        Opening hours: <br />
        Wednesday–Saturday <br />
        5pm–late
      </BC4>
    </FooterLinksColumn>
  )
}

export default FooterContactDetails
