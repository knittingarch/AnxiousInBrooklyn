import React from 'react'
import { Link, graphql } from "gatsby";

// import Layout from "../components/layout";
// import SEO from "../components/seo";

class BlogPosts extends React.Component {
  render() {
    const blogPosts = this.props.data.allContentfulBlogPost.edges;

    return (
      <div>
      <p>I am coming from src/pages/blog-posts.js</p>
      <h1>"Here's a list of all my blog posts!"</h1>
        {blogPosts.map(post => (
         <p>{post.node}</p>
        ))}
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
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
