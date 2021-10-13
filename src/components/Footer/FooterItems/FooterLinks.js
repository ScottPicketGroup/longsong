import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { DesktopWrapper } from "../../global-styles/containers.css"
import { FooterLinksColumn, FooterLinksGrid } from "../Footer.css"
import FooterContactDetails from "./FooterContactDetails/FooterContactDetails"
import FooterNavigation from "./FooterLinks/FooterNavigation"
import FooterSocials from "./FooterSocials/FooterSocials"
import FooterLongrain from "./Longgrain/Longrain"

const FooterLinks = ({ menuOpen, setMenuOpen, activePage, setActivePage }) => {

  const data = useStaticQuery(graphql`
  query menuLink {
    contentfulLongsongPageContent {
    
      foodMenu {
        file {
          url
          fileName
        }
      }
       drinksMenu {
        file {
          url
          fileName
        }
      }
    }
  }
    
`)


  return (
    <FooterLinksGrid>
      <DesktopWrapper>
        <FooterNavigation
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          activePage={activePage}
          setActivePage={setActivePage}
          foodMenu={data.contentfulLongsongPageContent.foodMenu}
          drinksMenu={data.contentfulLongsongPageContent.drinksMenu}

        />
      </DesktopWrapper>
      <FooterContactDetails />
      <DesktopWrapper>
        <FooterSocials />
      </DesktopWrapper>
      <DesktopWrapper>
        <FooterLongrain />
      </DesktopWrapper>
      <DesktopWrapper>
        <FooterLinksColumn />
      </DesktopWrapper>
      <DesktopWrapper>
        <FooterLinksColumn />
      </DesktopWrapper>
    </FooterLinksGrid>
  )
}

export default FooterLinks
