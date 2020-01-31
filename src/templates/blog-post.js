import get from "lodash/get"
import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import BlogPost from "../components/BlogPost"

import BathImage from "../images/baths.png"
import BeachImage from "../images/beach.png"
import KnittingImage from "../images/knitting.png"
import LavendarImage from "../images/lavender.png"
import NatureImage from "../images/nature.png"
import ReadingImage from "../images/reading.png"

const MainWrapper = styled.div`
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 250px 1fr;
  grid-template-areas:
    "beach nature lavendar knitting     reading    baths"
    ". . blog-post blog-post . .";
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
        <BeachDangle src={BeachImage} width="125px" />
        <NatureDangle src={NatureImage} width="175px" />
        <LavendarDangle src={LavendarImage} width="125px" />
        <KnittingDangle src={KnittingImage} width="160px" />
        <ReadingDangle src={ReadingImage} width="150px" />
        <BathDangle src={BathImage} width="125px" />
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
