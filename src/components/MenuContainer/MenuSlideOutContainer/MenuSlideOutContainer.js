import React, { useRef } from "react"
import {
  PageContainer,
  PageWrapper,
  SectionContainer,
} from "../../global-styles/containers.css"

import SlideOutSideBar from "./SlideOutSideBar"
import SlideOutMenuNavigation from "./SlideOutMenuNavigation/SlideOutMenuNavigation"

import SlideOutLanding from "../../Pages/SlideOutMenuPages/Landing/SlideOutLanding"
import Space from "../../Pages/SlideOutMenuPages/Bar/Bar"
import PrivateDining from "../../Pages/SlideOutMenuPages/PrivateDining/PrivateDining"

import {
  MenuSlideOutWrapper,
  PageContentContainer,
  RightMenuContainer,
  WhatsOnCalendarContainer,
  ScrollToTopMenu,
} from "./MenuSlideOutContianer.css"
import ContactUs from "../../Pages/SlideOutMenuPages/ContactUs/ContactUs"
import Footer from "../../Footer/Footer"
import WhatsOn from "../../Pages/SlideOutMenuPages/WhatsOn/WhatsOn"
import Calender from "../../Pages/Landing/Caleneder/Calender"
import LandingDownArrow from "../../Pages/Landing/Hero/Intro/LandingDownArrow"
import TermsAndConditions from "../../Pages/SlideOutMenuPages/TermsAndConditions/TermsAndConditions"
import GiftVouchers from "../../Pages/SlideOutMenuPages/GiftVouchers/GiftVouchers"
const MenuSlideOutContainer = ({
  menuOpen,
  setMenuOpen,
  activePage,
  setActivePage,
}) => {
  const ref = useRef(null)

  return (
    <MenuSlideOutWrapper menuOpen={menuOpen}>
      <PageContainer fd="row">
        <SlideOutSideBar
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          setActivePage={setActivePage}
          activePage={activePage}
        />
        <PageWrapper>
          <SectionContainer ref={ref} flex>
            <PageContentContainer>
              <SlideOutLanding activePage={activePage} />
              <Space activePage={activePage} />
              <WhatsOn activePage={activePage} />
              <GiftVouchers activePage={activePage} />
              <PrivateDining activePage={activePage} />
              <ContactUs activePage={activePage} />
              <TermsAndConditions activePage={activePage} />
            </PageContentContainer>
            <RightMenuContainer activePage={activePage}>
              <SlideOutMenuNavigation
                setMenuOpen={setMenuOpen}
                setActivePage={setActivePage}
                activePage={activePage}
              />
            </RightMenuContainer>
          </SectionContainer>
          <WhatsOnCalendarContainer
            marginBottom="xl"
            marginTop="lg"
            activePage={activePage}
            page={6}
          >
            <Calender />
          </WhatsOnCalendarContainer>
          <Footer
            setMenuOpen={setMenuOpen}
            setActivePage={setActivePage}
            activePage={activePage}
            refElement={ref.current}
          />
          <ScrollToTopMenu
            onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
            menuOpen={menuOpen}
          >
            <LandingDownArrow />
          </ScrollToTopMenu>
        </PageWrapper>
      </PageContainer>
    </MenuSlideOutWrapper>
  )
}

export default MenuSlideOutContainer
