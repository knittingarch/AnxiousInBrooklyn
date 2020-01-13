import PropTypes from "prop-types"
import React from "react"
import { Link, graphql } from "gatsby"

import SimplifiedBlogPost from "../components/SimplifiedBlogPost"

const linkStyle = {
  margin: "20px",
  textDecoration: "none",
  color: "#f268ae",
}

const hrRule = {
  width: "437px",
  margin: "20px",
}


const BlogPosts = ({data}) => {
  const posts = data.blogPosts.edges

  return (
    <div>
      {posts.map(post => (
        <div key={post.node.id}>
          <SimplifiedBlogPost post={post.node} />
          <Link to="/" style={linkStyle}>
            Back to Home
          </Link>
          <hr style={hrRule} />
        </div>
      ))}
    </div>
  )
}

export default BlogPosts

export const pageQuery = graphql`
  query BlogPostsQuery {
    blogPosts: allContentfulBlogPost(
      sort: { fields: [publishedDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          publishedDate(formatString: "MMM DD, YYYY")
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

BlogPosts.propTypes = {
  data: PropTypes.object,
}
