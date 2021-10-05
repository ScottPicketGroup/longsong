import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { BC3, Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"

const GiftVouchers = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query GiftVouchers {
      contentfulLongsongPageContent {
        giftVouchersHeroImge {
          title
          gatsbyImageData
        }
        longsongGiftVoucher
        longsongGiftVoucherDescription {
          raw
        }
        longsongGiftVoucherLink
        groupGiftVoucherHeading
        groupGiftVoucherDescription {
          raw
        }
        groupGiftVoucherLink
      }
    }
  `)

  return (
    <SlideOutPageWrapper activePage={activePage} page={4}>
      <SectionWrapper column>
        <ImageWrapper full>
          <GatsbyImage
            image={
              data.contentfulLongsongPageContent.giftVouchersHeroImge
                .gatsbyImageData
            }
            alt={data.contentfulLongsongPageContent.giftVouchersHeroImge.title}
          />
          <DesktopWrapper>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              PREVIOUS | NEXT
            </BC3>
          </DesktopWrapper>
          <MobileWrapper imageControls>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              1/2
            </BC3>
            <BC3
              style={{
                color: `grey`,
              }}
              marginTop="md"
            >
              VIEW FULLSCREEN
            </BC3>
          </MobileWrapper>
        </ImageWrapper>

        <TextContainer right full marginBottom="md">
          <BreakLine none />
          <Heading1 marginBottom="md">{data.contentfulLongsongPageContent.longsongGiftVoucher}</Heading1>
          {renderRichText(data.contentfulLongsongPageContent.longsongGiftVoucherDescription)}
          <Button marginBottom="xl">PURCHAGE VOUCHER</Button>
        </TextContainer>
        <TextContainer right full marginBottom="md">
          <BreakLine none />
          <Heading1 marginBottom="md">{data.contentfulLongsongPageContent.groupGiftVoucherHeading}</Heading1>
          {renderRichText(data.contentfulLongsongPageContent.groupGiftVoucherDescription)}
          <Button marginBottom="xl">PURCHAGE VOUCHER</Button>
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GiftVouchers
