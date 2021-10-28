import React from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = ({
  menuOpen,
  setMenuOpen,
  setActivePage,
  foodMenu,
  drinksMenu
}) => {

  const handleFooterLink = () => {
    console.log(`menuOpen`, menuOpen)
  
  
    // setActivePage(3)
    //       setMenuOpen(true)
  }

  return (
    <FooterLinksColumn>
      <FooterLink marginBottom="md">LONGSONG</FooterLink>
      <FooterLink marginBottom="sm"><a
          href={drinksMenu.file.url}
          target="_blank"
          rel="noreferrer"
        >
          Drinks
          </a></FooterLink>
      <FooterLink marginBottom="sm"><a
          href={foodMenu.file.url}
          target="_blank"
          rel="noreferrer"
        >Food</a></FooterLink>
      <FooterLink
        marginBottom="sm"
        onClick={handleFooterLink}
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
