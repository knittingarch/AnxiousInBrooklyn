const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
              id: edge.node.id
            }
          })
        })
        return
      })

    )
  })
}