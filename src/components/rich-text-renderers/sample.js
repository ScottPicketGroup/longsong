import React from 'react'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1, Heading2, Heading3, BC1, BC, BC3, SampleLink } from "../global-styles/typography.css"

const Renderer = ({ node }) => {


    const website_url = 'https://'

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <BC1 marginBottom="sm" ><b>{text}</b></BC1>,
          },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.PARAGRAPH]: (node, children) => <BC1 marginBottom="sm">{children}</BC1>,
            [INLINES.HYPERLINK]: ({ data }, children) => (
                
                <SampleLink
                    href={
                        `${data.uri.startsWith(website_url) ? data.uri : website_url + data.uri}`}
                    target="_blanc"
                    rel={`${data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
                >{children}</SampleLink>)

        },
    }

    return (
        <>

            {renderRichText(node, options)}
        </>
    )
}

export default Renderer
