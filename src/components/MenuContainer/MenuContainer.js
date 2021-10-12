import React, { useRef } from "react"
import { BC2 } from "../global-styles/typography.css"
import LongsongIcon from "./Icons/LongsongIcon"
import MenuIcon from "./Icons/MenuIcon"
import { EventsWrapper, MainWrapper, MenuWrapper } from "./MenuContainer.css"
import MenuSlideOutContainer from "./MenuSlideOutContainer/MenuSlideOutContainer"
import useScrollPosition from "../hooks/ScrollPosition"
import Month from "../Pages/Landing/Caleneder/Navigation/Month"
import useChangeMonth from "../hooks/ChangeMonth"
import useGetElementSize from "../hooks/ItemSizing"

const MenuContainer = ({
  menuOpen,
  setMenuOpen,
  activePage,
  setActivePage,
}) => {
  const scrollPosition = useScrollPosition()
  const {
    currentMonth,
    nextMonth,
    handlePreviousMonthChange,
    handleNextMonthChange,
  } = useChangeMonth()

  const menuRef = useRef(null)

  const { elementWidth } = useGetElementSize(menuRef)

  return (
    <MenuWrapper ref={menuRef}>
      <MainWrapper>
        <MenuIcon setMenuOpen={setMenuOpen} setActivePage={setActivePage} />
        {elementWidth > 72 ? (
          <>
            {scrollPosition >= 530 && (
              <Month
                menu
                currentMonth={currentMonth}
                nextMonth={nextMonth}
                handlePreviousMonthChange={handlePreviousMonthChange}
                handleNextMonthChange={handleNextMonthChange}
              />
            )}
            {scrollPosition <= 530 && (
              <LongsongIcon setActivePage={setActivePage} />
            )}
          </>
        ) : (
          <LongsongIcon setActivePage={setActivePage} />
        )}
      </MainWrapper>
      <EventsWrapper>
        <BC2>Private Events</BC2>
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
