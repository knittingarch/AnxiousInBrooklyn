import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import SimplifiedBlogPost from "../components/SimplifiedBlogPost"

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
  grid-template-columns: repeat(3, 11%) 33.3% repeat(3, 11%);
  grid-template-areas: "beach nature lavendar blog-posts knitting reading baths";
`

const BlogPostsWrapper = styled.section`
  grid-area: blog-posts;
  align-self: center;
  justify-self: center;
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
        <BeachDangle src={BeachImage} width="125px" />
        <NatureDangle src={NatureImage} width="175px" />
        <LavendarDangle src={LavendarImage} width="125px" />
        <KnittingDangle src={KnittingImage} width="160px" />
        <ReadingDangle src={ReadingImage} width="150px" />
        <BathDangle src={BathImage} width="125px" />
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
