/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
shop disabled until required
 

// You can delete this file if you're not using it
*/
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    query MyQuery {
      allContentfulLongsongEvents {
        edges {
          node {
            id
            eventName
            eventMedia {
              title
              gatsbyImageData
              description
            }
            eventDescription {
              raw
            }
            eventDate(formatString: "YYYY-MM-DD HH.mm")
            drinksSpecialTitle
            drinksSpecialDetails {
              raw
            }
            foodSpecialTitle
            foodSpecialDetails {
              raw
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const EventTemplate = path.resolve(`src/templates/EventTemplate/index.js`)
  result.data.allContentfulLongsongEvents.edges.forEach(({ node }) => {
    const path = `/events/${node.eventName.toLowerCase().replace(" ", "-")}`
    createPage({
      path,
      component: EventTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        eventData: node,
      },
    })
  })
}

