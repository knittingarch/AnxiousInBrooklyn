import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import SimplifiedBlogPost from '../components/SimplifiedBlogPost'


const linkStyle = {
  margin: '20px',
  textDecoration: 'none',
  color: '#f268ae',
}

const hrRule = {
  width: '437px',
  margin: '20px'
}


class BlogPosts extends React.Component {
  render() {
    const posts = get(this, 'props.data.blogPosts.edges')

    return (
      <div>
        {posts.map(post => (
          <div>
            <SimplifiedBlogPost key={post.node.slug} post={post.node} />
            <Link to="/" style={linkStyle}>Back to Home</Link>
            <hr style={hrRule} />
          </div>
        ))}
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
