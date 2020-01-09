import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'

import BlogPost from '../components/BlogPost.js'
import gridPaper from '../images/grid-paper.png'

const MainWrapper = styled.div`
  background-color: #a2e9f9;
  border-top: 1px solid #7cc2fd;
  padding: 0 20px;
`

const SiteTitle = styled.h1`
  color: #f3c39a;
`

const FeaturedPostWrapper = styled.div`
  background-color: #eee;
  border: 2px solid #ccc;
  padding: 0 20px;
`

const GridPaperImageWrapper = styled.div`
  background-color: #fff;
  background-image: url(${gridPaper});
  background-repeat: repeat;
  background-size: cover;
  border-top: 1px solid #f4f4f4;
  display: none;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 100%;
  @media screen and (min-width: 40rem) {
    display: block;
  }
`

class BlogIndex extends React.Component {
  render() {
    const post = get(this, 'props.data.featured.edges[0].node')

    return (
      <MainWrapper>
        <SiteTitle>
          Anxious in Brooklyn
        </SiteTitle>
        <GridPaperImageWrapper>
        <FeaturedPostWrapper>
          <BlogPost
            key={post.slug}
            post={post}
          />
        </FeaturedPostWrapper>
        </GridPaperImageWrapper>
        <Link to={`/blog-posts/`}>Earlier Posts</Link>
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
