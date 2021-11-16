import React, { useRef } from "react"
import { BC2 } from "../global-styles/typography.css"
import LongsongIcon from "./Icons/LongsongIcon"
import MenuIcon from "./Icons/MenuIcon"
import { EventsWrapper, MainWrapper, MenuWrapper } from "./MenuContainer.css"
import MenuSlideOutContainer from "./MenuSlideOutContainer/MenuSlideOutContainer"

const MenuContainer = ({
  menuOpen,
  setMenuOpen,
  activePage,
  setActivePage,
}) => {
  const menuRef = useRef(null)

  return (
    <MenuWrapper ref={menuRef}>
      <MainWrapper>
        <MenuIcon setMenuOpen={setMenuOpen} setActivePage={setActivePage} />
        <LongsongIcon />
      </MainWrapper>
      <EventsWrapper>
        <BC2
          style={{ cursor: `pointer` }}
          onClick={() => {
            setActivePage(3)
            setMenuOpen(true)
          }}
        >
          Private Events
        </BC2>
      </EventsWrapper>
      <MenuSlideOutContainer
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </MenuWrapper>
  )
}

export default MenuContainer
