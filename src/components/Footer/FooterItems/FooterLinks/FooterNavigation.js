import React, {useEffect} from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = ({
  menuOpen,
  setMenuOpen,
  activePage,
  setActivePage,
  foodMenu,
  drinksMenu
}) => {
console.log(menuOpen)
const [open, setOpen] = React.useState(menuOpen)


useEffect(() => {

alert(open)
}, [open])

  const handleFooterLink = () => {
    setOpen(!menuOpen)
  setActivePage(5)
  console.log(activePage)
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
