import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import BlogPost from '../components/BlogPost'


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.contentfulBlogPost')

    return (
      <div className="blogPost">
        <BlogPost key={post.slug} post={post} />
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString:"MMM DD, YYYY")
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
