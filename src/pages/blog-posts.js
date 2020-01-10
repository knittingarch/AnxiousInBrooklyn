import React from 'react'
import { Link, graphql } from 'gatsby';
import get from 'lodash/get'

import BlogPost from '../components/BlogPost'


class BlogPosts extends React.Component {
  render() {
    const posts = get(this, 'props.data.blogPosts.edges')

    return (
      <div>
        {posts.map(post => (
          <div>
            <BlogPost key={post.node.slug} post={post.node} />
            <Link to={`/${post.node.slug}`}>{post.node.title}</Link>
            <br />
          </div>
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
    }
  }
`
