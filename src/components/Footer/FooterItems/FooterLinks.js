import React from "react"
import { DesktopWrapper } from "../../global-styles/containers.css"
import { FooterLinksColumn, FooterLinksGrid } from "../Footer.css"
import FooterContactDetails from "./FooterContactDetails/FooterContactDetails"
import FooterNavigation from "./FooterLinks/FooterNavigation"
import FooterSocials from "./FooterSocials/FooterSocials"
import FooterLongrain from "./Longgrain/Longrain"

const FooterLinks = ({ menuOpen, setMenuOpen, activePage, setActivePage }) => {
  return (
    <FooterLinksGrid>
      <DesktopWrapper>
        <FooterNavigation
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </DesktopWrapper>
      <FooterContactDetails />
      <DesktopWrapper>
        <FooterSocials />
      </DesktopWrapper>
      <DesktopWrapper>
        <FooterLongrain />
      </DesktopWrapper>
      <DesktopWrapper>
        <FooterLinksColumn />
      </DesktopWrapper>
      <DesktopWrapper>
        <FooterLinksColumn />
      </DesktopWrapper>
    </FooterLinksGrid>
  )
}

export default FooterLinks
