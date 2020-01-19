import get from "lodash/get"
import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

// import blogPostBorder from "../images/blog_post_border.svg"
import FeaturedBlogPost from "../components/FeaturedBlogPost"

const MainWrapper = styled.div`
  display: grid;
  width: var(--desktop-width);
  margin: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 275px repeat(2, 1fr);
  grid-template-areas:
    "activities activities activities activities activities activities"
    ".          .          .          blog-post  blog-post  blog-post"
    "blog-title blog-title .          blog-post  blog-post  blog-post";
`

// @media (min-width: 320px) {
//     .grid {
//       grid-template-areas:
//         "activities"
//         "blog-title"
//         "blog-post";
//     }
//   }

// const ActivitiesBanner = styled.section`
//   grid-area: activities;
// `

const BlogTitleWrapper = styled.section`
  grid-area: blog-title;
  align-self: center;
  justify-self: center;
`

// const FeaturedPostWrapper = styled.section`
//   grid-area: blog-post;
//   background-image: url(${blogPostBorder});
//   background-repeat: no-repeat;
//   background-size: contain;
//   width: var(--mobile-large-width);
//   margin-bottom: -(var(--standard-spacing));
// `

const FeaturedPostWrapper = styled.section`
  grid-area: blog-post;
  padding: var(--standard-spacing);
  border: 1px dashed #ccc;
  background: rgb(238, 238, 238, 0.5);
  width: var(--mobile-large-width);
  margin-bottom: -(var(--standard-spacing));
`

const SiteTitle = styled.h1`
  color: #f3c39a;
  letter-spacing: 2px;
`

const linkStyle = {
  textDecoration: "none",
  color: "#f268ae",
  fontSize: "18px",
}

class BlogIndex extends React.Component {
  render() {
    const post = get(this, "props.data.featured.edges[0].node")

    return (
      <MainWrapper>
        <BlogTitleWrapper>
          <SiteTitle>Anxious in Brooklyn</SiteTitle>
          <Link to={`/about/`} style={linkStyle}>
            About This Blog
          </Link>
          <br />
          <Link to={`/blog-posts/`} style={linkStyle}>
            All Posts
          </Link>
        </BlogTitleWrapper>
        <FeaturedPostWrapper>
          <FeaturedBlogPost post={post} />
        </FeaturedPostWrapper>
      </MainWrapper>
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
      limit: 1
    ) {
      edges {
        node {
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
    }
  }
`
