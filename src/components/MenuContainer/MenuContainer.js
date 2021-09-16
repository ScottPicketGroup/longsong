import React from "react"
import { BC2 } from "../global-styles/typography.css"
import LongsongIcon from "./Icons/LongsongIcon"
import MenuIcon from "./Icons/MenuIcon"
import { EventsWrapper, MainWrapper, MenuWrapper } from "./MenuContainer.css"
import MenuSlideOutContainer from "./MenuSlideOutContainer/MenuSlideOutContainer"

const MenuContainer = ({menuOpen, setMenuOpen, activePage, setActivePage}) => {
  

  return (
    <MenuWrapper>
      <MainWrapper>
        <MenuIcon setMenuOpen={setMenuOpen} setActivePage={setActivePage}/>
        <LongsongIcon setActivePage={setActivePage} />
      </MainWrapper>
      <EventsWrapper>
        <BC2>Private Events</BC2>
      </EventsWrapper>
      <MenuSlideOutContainer menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage}/>
    </MenuWrapper>
  )
}

export default MenuContainer
