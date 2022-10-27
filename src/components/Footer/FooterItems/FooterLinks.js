import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { DesktopWrapper } from "../../global-styles/containers.css"
import { FooterLinksColumn, FooterLinksGrid } from "../Footer.css"
import FooterContactDetails from "./FooterContactDetails/FooterContactDetails"
import FooterNavigation from "./FooterLinks/FooterNavigation"
import FooterSocials from "./FooterSocials/FooterSocials"
import FooterLongrain from "./Longgrain/Longrain"

const FooterLinks = ({ menuOpen, setMenuOpen, activePage, setActivePage, refElement, openingTimes }) => {

  const data = useStaticQuery(graphql`
  query menuLink {
    contentfulFooterDetails(id: {eq: "1077f512-6ba3-5f1c-9549-9f6893907c41"}) {
      openingTimes {
        raw
      }
    }
    contentfulPageContent {
    
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
          foodMenu={data.contentfulPageContent.foodMenu}
          drinksMenu={data.contentfulPageContent.drinksMenu}
          refElement={refElement}
        />
      </DesktopWrapper>
      <FooterContactDetails openingTimes={data.contentfulFooterDetails}/>
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
