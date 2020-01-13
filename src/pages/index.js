import get from "lodash/get"
import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import blogPostBorder from "../images/blog_post_border.svg"
import dotGridPaper from "../images/dot-grid.png"
import FeaturedBlogPost from "../components/FeaturedBlogPost"

const MainWrapper = styled.div`
  background-image: url(${dotGridPaper});
  background-repeat: repeat;
  display: flex;
  height: 700px;
  width: 1400px;
`

const AboutWrapper = styled.section`
  align-self: flex-end;
  margin: 0 75px 200px;
`

const SiteTitle = styled.h1`
  font-family: "Fredericka the Great";
  color: #f3c39a;
`

const style = {
  textDecoration: "none",
  color: "#f268ae",
}

const FeaturedPostWrapper = styled.section`
  align-self: flex-end;
  background-image: url(${blogPostBorder});
  background-repeat: none;
  width: 477px;
  height: 425px;
  padding: 10px;
  margin: auto;
`

class BlogIndex extends React.Component {
  render() {
    const post = get(this, "props.data.featured.edges[0].node")

    return (
      <MainWrapper>
        <AboutWrapper>
          <SiteTitle>Anxious in Brooklyn</SiteTitle>
          <Link to={`/about/`} style={style}>
            About this blog
          </Link>
          <br />
          <Link to={`/blog-posts/`} style={style}>
            All Posts
          </Link>
        </AboutWrapper>
        <FeaturedPostWrapper>
          <FeaturedBlogPost key={post.slug} post={post} />
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
