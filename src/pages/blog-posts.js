import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import SimplifiedBlogPost from "../components/SimplifiedBlogPost"

const MainWrapper = styled.div`
  display: grid;
  width: var(--desktop-width);
  margin: 0 auto;
  grid-template-columns: 0.5fr var(--mobile-large-width) 0.5fr;
  grid-template-areas: "activities-left blog-posts activities-right";
`

// const ActivitiesBanner = styled.section`
//   grid-area: activities-left;
// `

// const ActivitiesBanner = styled.section`
//   grid-area: activities-right;
// `

const BlogPostsWrapper = styled.section`
  grid-area: blog-posts;
  align-self: center;
  justify-self: center;
`

const Posts = styled.div`
  border: 1px dashed #ccc;
  background: rgb(238, 238, 238, 0.3);
  margin-bottom: 50px;
`

const linkStyle = {
  margin: "var(--standard-spacing)",
  textDecoration: "none",
  color: "#f268ae",
}

const BlogPosts = ({ data }) => {
  const posts = data.blogPosts.edges

  return (
    <MainWrapper>
      <BlogPostsWrapper>
        {posts.map(post => (
          <Posts key={post.node.id}>
            <SimplifiedBlogPost post={post.node} />
            <Link to="/" style={linkStyle}>
              Back to Home
            </Link>
            <br />
            <br />
          </Posts>
        ))}
      </BlogPostsWrapper>
    </MainWrapper>
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
