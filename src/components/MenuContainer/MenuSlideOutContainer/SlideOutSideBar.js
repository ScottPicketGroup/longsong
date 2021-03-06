import React from "react"
import { MenuText } from "../../global-styles/typography.css"
import LongsongSubMenuIcon from "../Icons/LongsongSubMenuIcon"
import MenuX from "../Icons/MenuX"
import { DesktopMenuIconWrapper, MobileMenuIconWrapper } from "../MenuContainer.css"
import { SlideOutSideBarWrapper } from "./MenuSlideOutContianer.css"

const SlideOutSideBar = ({ setMenuOpen, menuOpen, activePage, setActivePage }) => {

  return (
    <SlideOutSideBarWrapper menuOpen={menuOpen}>
      <DesktopMenuIconWrapper> <MenuX menuOpen={menuOpen} setMenuOpen={setMenuOpen} setActivePage={setActivePage} /></DesktopMenuIconWrapper>
      <MobileMenuIconWrapper>
        {activePage > 1 ?
          (
            <MenuText
              onClick={() => setActivePage(0)}
            > MENU </MenuText>
          ) :
          (
            <MenuText
              onClick={() => setMenuOpen(false)}
            > CLOSE </MenuText>
          )
        }
         <LongsongSubMenuIcon onClick={() => setMenuOpen(false)} setActivePage={setActivePage} setMenuOpen={setMenuOpen} menuOpen={menuOpen}
         />
      </MobileMenuIconWrapper>
    </SlideOutSideBarWrapper>
  )
}

export default SlideOutSideBar
