import * as React from "react"
import Footer from "./Footer/Footer"
import {
  PageContainer,
  PageWrapper,
  SectionContainer
} from "./global-styles/containers.css"
import MenuContainer from "./MenuContainer/MenuContainer"
import LongrainLink from "./Pages/Landing/LongrainLink/LongrainLink"

const Layout = ({ children, fd }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activePage, setActivePage] = React.useState(1)
  return (
    <PageContainer fd={fd}>
  
    </PageContainer>
  )
}

export default Layout
