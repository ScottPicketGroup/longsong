import React from 'react'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Heading1, Heading2, Heading3, BC1 } from "../../components/global-styles/typography.css"
import { Button } from '../global-styles/GlobalStyles.css'

const EventPageRenderer = ({ node }) => {



    const website_url = 'https://'

    const options = {
        // renderMark: {
        //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        //   },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1 marginBottom="md">{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return children[0] !== "" ? <BC1 marginBottom="lg">{children}</BC1> : null
            },
            [INLINES.HYPERLINK]: ({ data }, children) => (
                <Button marginTop="md">
                <a
                style={{fontFamily: `inherit`}}
                    href={
                        `${data.uri.startsWith(website_url) ? data.uri : website_url + data.uri}`}
                    target="_blanc"
                    rel={`${data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
                >{children}</a></Button>)

        },
        renderText: text => {
            return text
              .split("\n")
              .map(i => [i, <br />])
              .flat()
          },
    }

    return (
        <>

            {renderRichText(node, options)}
        </>
    )
}

export default EventPageRenderer
