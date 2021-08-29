import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { BC3, BC2, Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"

const GiftVouchers = ({ activePage }) => {
  return (
    <SlideOutPageWrapper activePage={activePage} page={4}>
      <SectionWrapper column>
        <ImageWrapper full>
          <StaticImage
            src="../../../../images/GroupBookingsAndGiftVouchers/giftVoucher.png"
            alt="gift voucher image"
          />
          <BC3 imageControls marginTop="md">
            {" "}
            PREVIOUS | NEXT
          </BC3>
        </ImageWrapper>

        <TextContainer right full>
          <BreakLine none />
       
          <Heading1 marginBottom="md"> Longsong Gift Voucher</Heading1>
          <BC2 marginBottom="md" >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </BC2>
          <Button marginBottom="xl" >
              PURCHAGE VOUCHER
          </Button>
        </TextContainer>
        <TextContainer right full>
          <BreakLine none />
    
          <Heading1 marginBottom="md">Group Gift Voucher</Heading1>
          <BC2 marginBottom="md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </BC2>
          <Button marginBottom="xl" >
              PURCHAGE VOUCHER
          </Button>
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GiftVouchers
