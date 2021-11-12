import React from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = ({
  setMenuOpen,
  setActivePage,
  foodMenu,
  drinksMenu,
  refElement,
}) => {

  return (
    <FooterLinksColumn>
      <FooterLink marginBottom="md">LONGSONG</FooterLink>
      <FooterLink marginBottom="sm">
        <a href={drinksMenu.file.url} target="_blank" rel="noreferrer">
          Drinks
        </a>
      </FooterLink>
      <FooterLink marginBottom="sm">
        <a href={foodMenu.file.url} target="_blank" rel="noreferrer">
          Food
        </a>
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(3)
          setMenuOpen(true)
          refElement.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Private Events
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(4)
          setMenuOpen(true)
          refElement.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Gift Vouchers
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(5)
          setMenuOpen(true)
          refElement.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Contact
      </FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={() => {
          setActivePage(7)
          setMenuOpen(true)
          refElement.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Terms and Conditions
      </FooterLink>
    </FooterLinksColumn>
  )
}

export default FooterNavigation
