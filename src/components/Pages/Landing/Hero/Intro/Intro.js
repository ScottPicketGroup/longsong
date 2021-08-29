import React from "react"
import { BC1, BC2 } from "../../../../global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../../global-styles/containers.css"
import { IntroContainerWrapper } from "../Hero.css"
const Intro = () => {
  return (
    <IntroContainerWrapper>
      <DesktopWrapper>
        <BC1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in
          nulla voluptatum omnis corporis incidunt voluptates rerum labore iusto
          fugit atque at ratione, tempora ducimus molestias, vitae porro.
          Numquam, corrupti?
        </BC1>
      </DesktopWrapper>
      <MobileWrapper>
        <BC2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in
          nulla voluptatum omnis corporis incidunt voluptates rerum labore iusto
          fugit atque at ratione, tempora ducimus molestias, vitae porro.
          Numquam, corrupti
        </BC2>
      </MobileWrapper>
    </IntroContainerWrapper>
  )
}

export default Intro
