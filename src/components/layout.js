import React, { useEffect } from "react"
import styled from "styled-components"
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

const Layout = ({ children, fd, heroImage }) => {
  const { menuOpen, setMenuOpen, activePage, setActivePage } = useActivePage();
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
            <LongrainLink heroImage/>
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
            />
          </PageWrapper>
        </PageContainer>
      )}
    </>
  )
}

export default Layout

const Big = styled.div`
  height: 100vh;
  width: 100vw;
`
