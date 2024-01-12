import React, { useEffect } from "react"
import Footer from "./Footer/Footer"

import {
  PageContainer,
  PageWrapper,
  SectionContainer,
} from "./global-styles/containers.css"

import { SectionRow } from "./Pages/Landing/LandingPageModules/index.css"

import MenuContainer from "./MenuContainer/MenuContainer"
import LongrainLink from "./Pages/Landing/LongrainLink/LongrainLink"
import useActivePage from "./hooks/ActivePage"
import { LinksWrapper } from "./Pages/Landing/LongrainLink/LongrainLink.css"

const Layout = ({ children, fd, heroImage, openingTimes }) => {
  const { menuOpen, setMenuOpen, activePage, setActivePage } = useActivePage()
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  return (
    <>
      {loading ? (
        <> </>
      ) : (
        <PageContainer fd={fd}>
          <MenuContainer
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            activePage={activePage}
            setActivePage={setActivePage}
          />

          <PageWrapper>
            <LinksWrapper>
              <LongrainLink heroImage />
            </LinksWrapper>
            {heroImage ? (
              <SectionRow marginBottom="xl">{children}</SectionRow>
            ) : (
              <SectionContainer marginBottom="xl">{children}</SectionContainer>
            )}
            <Footer
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              activePage={activePage}
              setActivePage={setActivePage}
              openingTimes={openingTimes}
            />
          </PageWrapper>
        </PageContainer>
      )}
    </>
  )
}

export default Layout
