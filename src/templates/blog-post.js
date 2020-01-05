import React from 'react'
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost

    return (
      <Layout>
      <SEO title={post.title} />
      <div className="blogPost">
        <h1>{post.title}</h1>
        <div className="tags">
          {post.tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="body-text">{post.description.internal.content}</p>
        <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
`
