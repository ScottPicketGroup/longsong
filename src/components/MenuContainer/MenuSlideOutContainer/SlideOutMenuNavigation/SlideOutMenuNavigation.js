import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  BreakLine,
  SlideOutMenuNavWrapper,
  MenuItem,
} from "./SlideOutMenuNavigation.css"
import LongsongIcon from "../../Icons/LongsongIcon"

import DownloadIcon from "../../Icons/DownloadIcon"
import { BC1 } from "../../../global-styles/typography.css"
import FBIcon from "../../Icons/FBIcon"
import InstaIcon from "../../Icons/InstaIcon"
import { DesktopMenuIconWrapper } from "../../MenuContainer.css"
const SlideOutMenuNavigation = ({ setActivePage, activePage, setMenuOpen}) => {
  const data = useStaticQuery(graphql`
    query DrinkAndFoodLink {
      contentfulPageContent(
        contentful_id: { eq: "7aRmLZ6sUc9SbpIPPRRj7A" }
      ) {
        drinksMenu {
          file {
            url
            fileName
          }
        }
        foodMenu {
          file {
            fileName
            url
          }
        }
      }
    }
  `)

  return (
    <SlideOutMenuNavWrapper>
      <DesktopMenuIconWrapper>
        
        <LongsongIcon setActivePage={setActivePage} setMenuOpen={setMenuOpen}/>

        <BreakLine />
      </DesktopMenuIconWrapper>
      <MenuItem active={activePage} item={0}>
        <BC1>
        <a
          href={data.contentfulPageContent.drinksMenu.file.url}
          target="_blank"
          rel="noreferrer"
        >
          Drinks
          </a></BC1>
        <a
          href={data.contentfulPageContent.drinksMenu.file.url}
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon />
        </a>
      </MenuItem>
      <MenuItem active={activePage} item={0}>
      <a
          href={data.contentfulPageContent.foodMenu.file.url}
          target="_blank"
          rel="noreferrer"
        >
        <BC1>Food</BC1>
        </a>
        <a
          href={data.contentfulPageContent.foodMenu.file.url}
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon />
        </a>
      </MenuItem>
      <MenuItem onClick={() => setActivePage(2)} active={activePage} item={2}>
        <BC1>Bar</BC1>
      </MenuItem>
      <MenuItem onClick={() => setActivePage(6)} active={activePage} item={6}>
        <BC1>What's on</BC1>
      </MenuItem>
      <MenuItem onClick={() => setActivePage(3)} active={activePage} item={3}>
        <BC1>Private Events</BC1>
      </MenuItem>
      <MenuItem onClick={() => setActivePage(4)} active={activePage} item={4}>
        <BC1>Gift Vouchers</BC1>
      </MenuItem>
      <MenuItem onClick={() => setActivePage(5)} active={activePage} item={5}>
        <BC1>Contact</BC1>
      </MenuItem>
      <MenuItem active={false}>
        <BC1>
          <a
            href="https://longrainmelbourne.com/"
            target="_blank"
            rel="noreferrer"
          >
            Longrain
          </a>
        </BC1>
      </MenuItem>

      <DesktopMenuIconWrapper>
        <BreakLine />
      </DesktopMenuIconWrapper>
      <MenuItem socials>
      <a
          href="https://www.instagram.com/longsongmelbourne"
          target="_blank"
          rel="noreferrer"
        >
        <InstaIcon />
        </a>
        <a
          href="https://www.facebook.com/longsongmelbourne"
          target="_blank"
          rel="noreferrer"
        >
        <FBIcon />
        </a>
      </MenuItem>
    </SlideOutMenuNavWrapper>
  )
}

export default SlideOutMenuNavigation
