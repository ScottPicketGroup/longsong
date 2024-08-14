import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Bar/Space.css"
import Renderer from "../../../rich-text-renderers/sample"

import useGiftVoucherPageQuery from './useGiftVoucherQuery'

const GiftVouchers = ({ activePage }) => {

  const pageData = useGiftVoucherPageQuery().contentfulGiftVouchers
  
  return (
    <SlideOutPageWrapper activePage={activePage} page={4}>
      <SectionWrapper column>
        <ImageWrapper full marginRequired>
          <GatsbyImage
            image={getImage(pageData.heroImage)}
            alt="voucher image"
          />
        </ImageWrapper>

        <TextContainer right full marginBottom="md">
          <BreakLine none />
          <Heading1 marginBottom="md">
            {pageData.groupVoucherHeading}
          </Heading1>
          <Renderer node={pageData.groupVoucherDescription} />
          <Button marginBottom="xl"><a
              href={pageData.groupVoucherLinkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {pageData.groupVoucherLinkLabel}
            </a></Button>
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GiftVouchers
