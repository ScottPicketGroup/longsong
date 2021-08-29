import React from "react"
import { MENU } from "../../global-styles/typography.css"
import LongsongSubMenuIcon from "../Icons/LongsongSubMenuIcon"
import MenuX from "../Icons/MenuX"
import { DesktopMenuIconWrapper, MobileMenuIconWrapper } from "../MenuContainer.css"
import { SlideOutSideBarWrapper } from "./MenuSlideOutContianer.css"

const SlideOutSideBar = ({ setMenuOpen, menuOpen, setActivePage}) => {
  return (
    <SlideOutSideBarWrapper menuOpen={menuOpen}>
       <DesktopMenuIconWrapper> <MenuX menuOpen={menuOpen} setMenuOpen={setMenuOpen} setActivePage={setActivePage} /></DesktopMenuIconWrapper>
       <MobileMenuIconWrapper>
        <MENU
         onClick={() => setMenuOpen(false)}
        >CLOSE</MENU>
        <LongsongSubMenuIcon onClick={() => setMenuOpen(true)} setActivePage={setActivePage}/>
    </MobileMenuIconWrapper>
    </SlideOutSideBarWrapper>
  )
}

export default SlideOutSideBar
