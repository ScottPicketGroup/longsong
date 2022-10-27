import React from "react"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { BC4 } from "../../../global-styles/typography.css"
import Renderer from "../../../rich-text-renderers/sample-footer"
import { FooterLinksColumn } from "../../Footer.css"

const FooterContactDetails = ({openingTimes}) => {
  console.log('openingTimes', openingTimes.openingTimes)
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
        03 9653 1611
      </BC4>
      <BC4>Opening Hours:</BC4>
      <Renderer node={openingTimes.openingTimes}/>
     
    </FooterLinksColumn>
  )
}

export default FooterContactDetails
