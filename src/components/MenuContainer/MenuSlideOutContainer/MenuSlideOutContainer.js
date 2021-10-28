import React from "react"
import {
  PageContainer,
  PageWrapper,
  SectionContainer,
} from "../../global-styles/containers.css"

import SlideOutSideBar from "./SlideOutSideBar"
import SlideOutMenuNavigation from "./SlideOutMenuNavigation/SlideOutMenuNavigation"

import SlideOutLanding from "../../Pages/SlideOutMenuPages/Landing/SlideOutLanding"
import Space from "../../Pages/SlideOutMenuPages/Space/Space"
import GiftVouchers from "../../Pages/SlideOutMenuPages/GiftVouchersAndGroupBookings/GiftVouchers"

import {
  MenuSlideOutWrapper,
  PageContentContainer,
  RightMenuContainer,
  WhatsOnCalendarContainer,
} from "./MenuSlideOutContianer.css"
import GroupBookings from "../../Pages/SlideOutMenuPages/GiftVouchersAndGroupBookings/GroupBookings"
import ContactUs from "../../Pages/SlideOutMenuPages/ContactUs/ContactUs"
import Footer from "../../Footer/Footer"
import WhatsOn from "../../Pages/SlideOutMenuPages/WhatsOn/WhatsOn"
import Calender from "../../Pages/Landing/Caleneder/Calender"
const MenuSlideOutContainer = ({
  menuOpen,
  setMenuOpen,
  activePage,
  setActivePage,
}) => {
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
          <SectionContainer flex>
            <PageContentContainer>
              <SlideOutLanding activePage={activePage} />
              <Space activePage={activePage} />
              <WhatsOn activePage={activePage} />
              <GroupBookings activePage={activePage} />
              <GiftVouchers activePage={activePage} />
              <ContactUs activePage={activePage} />
            </PageContentContainer>
            <RightMenuContainer activePage={activePage}>
              <SlideOutMenuNavigation
              setMenuOpen={setMenuOpen}
                setActivePage={setActivePage}
                activePage={activePage}
              />
            </RightMenuContainer>
          </SectionContainer>
          <WhatsOnCalendarContainer marginBottom="xl" marginTop="lg" activePage={activePage} page={6}>
            <Calender />
          </WhatsOnCalendarContainer>
          <Footer />
        </PageWrapper>
      </PageContainer>
    </MenuSlideOutWrapper>
  )
}

export default MenuSlideOutContainer
