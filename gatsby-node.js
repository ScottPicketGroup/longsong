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
            slug
            eventMedia {
              title
            }
            eventDescription {
              raw
            }
            eventDate
          
           
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
    const path = `/events/${node.eventName.replace(/\s/g, '-')}${"-" + node.eventDate.slice(5,10) + "-" + node.eventDate.slice(0,4)}`
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

