import get from "lodash/get"
import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import BlogPost from "../components/BlogPost"

const MainWrapper = styled.div`
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 250px 1fr;
  grid-template-areas:
    "activities activities activities"
    ".          blog-post  .";
`

// const ActivitiesBanner = styled.section`
//   grid-area: activities;
// `

const BlogPostWrapper = styled.section`
  grid-area: blog-post;
  align-self: center;
  justify-self: center;
  padding: var(--standard-spacing);
  border: 1px dashed #ccc;
  background: rgb(238, 238, 238, 0.3);
  margin-bottom: 50px;
`

const linkStyle = {
  margin: "var(--standard-spacing)",
  textDecoration: "none",
  color: "#f268ae",
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, "props.data.contentfulBlogPost")

    return (
      <MainWrapper>
        <BlogPostWrapper>
          <BlogPost post={post} />
          <Link to="/" style={linkStyle}>
            Back to Home
          </Link>
        </BlogPostWrapper>
      </MainWrapper>
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
