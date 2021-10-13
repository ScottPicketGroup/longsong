
import React, { useEffect } from "react"
import styled from 'styled-components'
import Footer from "./Footer/Footer"
import {
  PageContainer,
  PageWrapper,
  SectionContainer
} from "./global-styles/containers.css"
import { Heading1 } from "./global-styles/typography.css"
import MenuContainer from "./MenuContainer/MenuContainer"
import LongrainLink from "./Pages/Landing/LongrainLink/LongrainLink"

const Layout = ({ children, fd }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activePage, setActivePage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100);
  }, [])


  return (

    <>
    { loading ? (
  <> </>
    ) :
    (
      <PageContainer fd="fd">
<MenuContainer menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage} />

<PageWrapper>
  <LongrainLink />
  <SectionContainer marginBottom="xl">{children}</SectionContainer>
  <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage} />
</PageWrapper>


</PageContainer >
    )}
    </>
  )
}

export default Layout

const Big = styled.div `
height: 100vh;
width: 100vw;
`