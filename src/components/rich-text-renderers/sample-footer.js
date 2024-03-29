import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  Heading1,
  Heading2,
  Heading3,
  BC4,
} from "../global-styles/typography.css"
import { Button } from "../global-styles/GlobalStyles.css"

const Renderer = ({ node }) => {

  
  const Bold = ({ children }) => (
    <p style={{ fontFamily: `bold` }}>{children}</p>
  )

  const website_url = "https://"

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC4 marginBottom="" style={{display: `block`}}>{children}</BC4>
      ),
      [INLINES.HYPERLINK]: ({ data }, children) => (
        
        <Button marginTop="md">
    
          <a
            style={{ fontFamily: `inherit` }}
            href={`${
              data.uri.startsWith(website_url)
                ? data.uri
                : website_url + data.uri
            }`}
            target="_blanc"
            rel={`${
              data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
            }`}
          > 
           {children} 
          </a>
        </Button>
      ),
      [INLINES.ASSET_HYPERLINK]: node => {
        // console.log('node', node.data.target.file ? node.data.target.file.url : '');
        if(node.data.target.file)  return (
          <Button marginTop="md">
    
          <a
            style={{ fontFamily: `inherit` }}
            href={`http://${node.data.target.file.url}`}
            target="_blanc"
            rel="noopener noreferrer"
            
          >
            {node.content[0].value}
          </a>
        </Button>
        ) 
      },
    },
   
  }

  return <>{node && renderRichText(node, options)}</>
  
}

export default Renderer
