import React, { useRef } from "react"
import { Link } from "gatsby"
import { BC2 } from "../global-styles/typography.css"
import LongsongIcon from "./Icons/LongsongIcon"
import MenuIcon from "./Icons/MenuIcon"
import { EventsWrapper, MainWrapper, MenuWrapper } from "./MenuContainer.css"
import MenuSlideOutContainer from "./MenuSlideOutContainer/MenuSlideOutContainer"
import useScrollPosition from "../hooks/ScrollPosition"
import Month from "../Pages/Landing/Caleneder/Navigation/Month"
import useChangeMonth from "../hooks/ChangeMonth"
import useGetElementSize from "../hooks/ItemSizing"
import ScrollToPlugin from "gsap/ScrollToPlugin"

const MenuContainer = ({
  menuOpen,
  setMenuOpen,
  activePage,
  setActivePage,
}) => {
  //refs and external hooks
  const menuRef = useRef(null)
  const { elementWidth } = useGetElementSize(menuRef)
  const {
    currentMonth,
    nextMonth,
    handlePreviousMonthChange,
    handleNextMonthChange,
  } = useChangeMonth()
  const scrollPosition = useScrollPosition()

  // state

  const [menuPage, setMenuPage] = React.useState(0)

  const handleOpenEvents = () => {
    setMenuOpen(true)
    setMenuPage(3)
  }

  return (
    <MenuWrapper ref={menuRef}>
      <MainWrapper>
        <MenuIcon setMenuOpen={setMenuOpen} setActivePage={setActivePage} />
        <Link to="/">
          <LongsongIcon />
        </Link>
        {/* {elementWidth > 250 ? (
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
              <Link to="/">
                <LongsongIcon />
              </Link>
            )}
          </>
        ) : (
          <Link to="/">
            <LongsongIcon />
          </Link>
        )} */}
      </MainWrapper>
      <EventsWrapper>
        <BC2
        style={{cursor: `pointer`}}
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
