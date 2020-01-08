import React from "react"
// import Link from 'gatsby-link'
// import styled from 'styled-components'
import get from 'lodash/get'

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    // const { data } = this.props
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = data.allMarkdownRemark.edges
    const featuredPost = get(this, 'props.data.featured.edges[0].node')

    return (
      <div>
        <p>I am coming from src/pages/index.js</p>
        {featuredPost.title}<br />
        {featuredPost.tags}<br />
        {featuredPost.publishedDate}<br />
        {featuredPost.slug}<br />
        {featuredPost.description.internal.content}<br />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    featured: allContentfulBlogPost(
      sort: { fields: [publishedDate], order: DESC }
      limit: 4
    ) { 
      edges {
      node {
        title
        publishedDate
        description {
          internal {
            content
          }
        }
        slug
        tags
        media {
          file {
            url
          }
        }
      }
    }
    }
  }
`
