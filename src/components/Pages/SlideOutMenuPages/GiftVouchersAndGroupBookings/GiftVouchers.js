import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Button } from "../../../global-styles/GlobalStyles.css"
import { Heading1 } from "../../../global-styles/typography.css"
import { BreakLine } from "../../../MenuContainer/MenuSlideOutContainer/SlideOutMenuNavigation/SlideOutMenuNavigation.css"
import {
  ImageWrapper,
  SlideOutPageWrapper,
  SectionWrapper,
  TextContainer,
} from "../Space/Space.css"
import Renderer from "../../../rich-text-renderers/sample"



const GiftVouchers = ({ activePage }) => {
  const data = useStaticQuery(graphql`
    query GiftVouchers {
      contentfulLongsongPageContent(contentful_id: {eq: "7aRmLZ6sUc9SbpIPPRRj7A"}) {
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
        <ImageWrapper full marginRequired>
          <GatsbyImage
            image={getImage(data.contentfulLongsongPageContent.giftVouchersHeroImge)}
            alt={data.contentfulLongsongPageContent.giftVouchersHeroImge.title}
          />
        </ImageWrapper>

        <TextContainer right full marginBottom="md" >
          <BreakLine none />
          <Heading1 marginBottom="md">
          {data.contentfulLongsongPageContent.longsongGiftVoucher}

          </Heading1>
          <Renderer node={data.contentfulLongsongPageContent.longsongGiftVoucherDescription} />

          <Button marginBottom="xl">
          <a
              href={data.contentfulLongsongPageContent.longsongGiftVoucherLink}
              target="_blank"
              rel="noreferrer"
            >
              PURCHAGE VOUCHER
            </a>
            </Button>
        </TextContainer>
        <TextContainer right full marginBottom="md">
          <BreakLine none />
          <Heading1 marginBottom="md">
            {data.contentfulLongsongPageContent.groupGiftVoucherHeading}
          </Heading1>
          <Renderer node={data.contentfulLongsongPageContent.groupGiftVoucherDescription} />
          <Button marginBottom="xl"><a
              href={data.contentfulLongsongPageContent.groupGiftVoucherLink}
              target="_blank"
              rel="noreferrer"
            >
              PURCHAGE VOUCHER
            </a></Button>
        </TextContainer>
      </SectionWrapper>
    </SlideOutPageWrapper>
  )
}

export default GiftVouchers
