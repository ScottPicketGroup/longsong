import { useStaticQuery, graphql } from "gatsby"

export default function useGiftVoucherPageQuery() {
  const giftVoucherPageData = useStaticQuery(graphql`
    query GiftVouchersPage {
      contentfulGiftVouchers(id: {}) {
        id
        longsongVoucherHeading
        longsongVoucherLinkLabel
        longsongVoucherLinkUrl
        longsongVoucherDescription {
          raw
        }
        groupVoucherHeading
        groupVoucherLinkLabel
        groupVoucherLinkUrl
        groupVoucherDescription {
          raw
        }
        heroImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  return giftVoucherPageData
}
