import get from "lodash/get"
import { Link, graphql } from "gatsby"
import React from "react"

import BlogPost from "../components/BlogPost"

const style = {
  margin: "20px",
  textDecoration: "none",
  color: "#f268ae",
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, "props.data.contentfulBlogPost")

    return (
      <div>
        <BlogPost post={post} />
        <Link to="/" style={style}>
          Back to Home
        </Link>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
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
`
