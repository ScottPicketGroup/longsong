import React from "react"
import { BreakLine, SlideOutMenuNavWrapper, MenuItem } from "./SlideOutMenuNavigation.css"
import LongsongIcon from "../../Icons/LongsongIcon"

import DownloadIcon from "../../Icons/DownloadIcon"
import { BC1 } from "../../../global-styles/typography.css"
import FBIcon from "../../Icons/FBIcon"
import InstaIcon from "../../Icons/InstaIcon"
import { DesktopMenuIconWrapper } from "../../MenuContainer.css"
const SlideOutMenuNavigation = ({ setActivePage, activePage }) => {

console.log(activePage)

  return (
    <SlideOutMenuNavWrapper>
      <DesktopMenuIconWrapper>
      <LongsongIcon setActivePage={setActivePage}/>

      <BreakLine />
      </DesktopMenuIconWrapper>
      <MenuItem active={activePage} item={0}> <BC1>Drinks</BC1> <DownloadIcon/></MenuItem>
      <MenuItem active={activePage} item={0}> <BC1>Food</BC1> <DownloadIcon/></MenuItem>
      <MenuItem onClick={() => setActivePage(2)} active={activePage} item={2}> <BC1>Space</BC1> </MenuItem>
      <MenuItem onClick={() => setActivePage(3)} active={activePage} item={3}> <BC1>Group Bookings</BC1> </MenuItem>
      <MenuItem onClick={() => setActivePage(4)} active={activePage} item={4}> <BC1>Gift Vouchers</BC1></MenuItem>
      <MenuItem onClick={() => setActivePage(5)} active={activePage} item={5}> <BC1 >Contact</BC1> </MenuItem>


    <DesktopMenuIconWrapper>
      <BreakLine />
      </DesktopMenuIconWrapper>
      <MenuItem socials>
      <InstaIcon />
      <FBIcon/>
      </MenuItem>
    </SlideOutMenuNavWrapper>
  )
}

export default SlideOutMenuNavigation
