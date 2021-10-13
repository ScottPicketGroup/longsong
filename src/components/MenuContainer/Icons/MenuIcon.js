import React from "react"
import { MenuText } from "../../global-styles/typography.css"
import { DesktopMenuIconWrapper, MobileMenuIconWrapper } from "../MenuContainer.css"

const MenuIcon = ({setMenuOpen, setActivePage}) => {
  return (
      <>
    <DesktopMenuIconWrapper
   onClick={() => {
    setActivePage(1) 
    setMenuOpen(true)}}
    >
           <svg
      id="Burger_Menu"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 40 40"
    >
      <path
        id="Path_9714"
        data-name="Path 9714"
        d="M40,19H0v2H40Z"
        fill="#fff"
      />
      <path
        id="Path_9715"
        data-name="Path 9715"
        d="M40,0H0V2H40Z"
        fill="#fff"
      />
      <path
        id="Path_9716"
        data-name="Path 9716"
        d="M40,38H0v2H40Z"
        fill="#fff"
      />
    </svg>
    </DesktopMenuIconWrapper>
    <MobileMenuIconWrapper>
        <MenuText
         onClick={() => {
          setActivePage(0) 
          setMenuOpen(true)}}
        >MENU</MenuText>
    </MobileMenuIconWrapper>
    </>
  )
}

export default MenuIcon
