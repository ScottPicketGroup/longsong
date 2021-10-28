import { Link } from "gatsby"
import React from "react"

const LongsongSubMenuIcon = ({setMenuOpen, menuOpen}) => {
  return (
    <Link to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.796"
      height="28.1"
      viewBox="0 0 27.796 28.1"
      onClick={() => {
        if(menuOpen === true) setMenuOpen(false) 
      }}
    >
      <g id="L_White" transform="translate(-13.822 -8.163)">
        <path
          id="Path_10271"
          data-name="Path 10271"
          d="M15.073,8.163V9.289h4.9V29.954h7.405v4.8H29.3V28.828H21.9V8.163Z"
          transform="translate(1.229)"
          fill="#467f5c"
        />
        <path
          id="Path_10272"
          data-name="Path 10272"
          d="M27.642,18.5a2.589,2.589,0,0,0-2.242,1.3,3.55,3.55,0,0,1,.389-.022,3.692,3.692,0,0,1,3.65,3.194,2.6,2.6,0,0,0-1.8-4.477"
          transform="translate(11.376 10.162)"
          fill="#467f5c"
        />
        <g
          id="Group_4535"
          data-name="Group 4535"
          transform="translate(13.822 10.433)"
        >
          <path
            id="Path_10273"
            data-name="Path 10273"
            d="M13.822,9.308v25.83H27.287V29.971H19.881V9.308Z"
            transform="translate(-13.822 -9.308)"
            fill="#fff"
          />
          <path
            id="Path_10274"
            data-name="Path 10274"
            d="M29.485,22.3a2.6,2.6,0,1,1-2.6-2.6,2.6,2.6,0,0,1,2.6,2.6"
            transform="translate(-3.544 0.904)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
    </Link>
  )
}

export default LongsongSubMenuIcon