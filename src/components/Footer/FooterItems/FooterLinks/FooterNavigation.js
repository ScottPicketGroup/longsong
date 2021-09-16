import React from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = ({
  setMenuOpen,
  setActivePage,
}) => {
  return (
    <FooterLinksColumn>
      <FooterLink marginBottom="md">LONGSONG</FooterLink>
      <FooterLink marginBottom="sm">Drinks</FooterLink>
      <FooterLink marginBottom="sm">Food</FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(3)
          setMenuOpen(true)
        }}
      >
        Private Events
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(4)
          setMenuOpen(true)
        }}
      >
        Gift Vouchers
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(5)
          setMenuOpen(true)
        }}
      >
        Contact
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        //    onClick={() => {
        //     setActivePage(5)
        //     setMenuOpen(true)

        //    }}
      >
        Terms and Conditions
      </FooterLink>
    </FooterLinksColumn>
  )
}

export default FooterNavigation
