import get from "lodash/get"
import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import FeaturedBlogPost from "../components/FeaturedBlogPost"
import BathImage from "../images/baths.png"
import BeachImage from "../images/beach.png"
import KnittingImage from "../images/knitting.png"
import LavendarImage from "../images/lavender.png"
import NatureImage from "../images/nature.png"
import ReadingImage from "../images/reading.png"

const MainWrapper = styled.div`
  display: grid;
  width: var(--desktop-width);
  margin: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 250px repeat(2, 1fr);
  grid-template-areas:
    "beach nature lavendar knitting     reading    baths"
    ".     .        .        blog-post  blog-post  blog-post"
    "blog-title blog-title .          blog-post  blog-post  blog-post";
`

const BeachDangle = styled.img`
  grid-area: beach;
`
const KnittingDangle = styled.img`
  grid-area: knitting;
`
const LavendarDangle = styled.img`
  grid-area: lavendar;
`
const NatureDangle = styled.img`
  grid-area: nature;
`
const ReadingDangle = styled.img`
  grid-area: reading;
`
const BathDangle = styled.img`
  grid-area: baths;
`

const BlogTitleWrapper = styled.section`
  grid-area: blog-title;
  align-self: center;
  justify-self: center;
`

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
        <BeachDangle src={BeachImage} width="125px" />
        <NatureDangle src={NatureImage} width="175px" />
        <LavendarDangle src={LavendarImage} width="125px" />
        <KnittingDangle src={KnittingImage} width="160px" />
        <ReadingDangle src={ReadingImage} width="150px" />
        <BathDangle src={BathImage} width="125px" />
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
