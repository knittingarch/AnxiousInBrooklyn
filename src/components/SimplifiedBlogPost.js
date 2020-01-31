import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import PostDate from "./Date"
import Tag from "./Tag"
import Thumbnail from "./Thumbnail"
import Title from "./Title"
import TruncatedParagraph from "./TruncatedParagraph"

const BlogPostWrapper = styled.section`
  margin: var(--standard-spacing);
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  grid-column-gap: 5px;
  grid-template-areas:
    "date thumbnail"
    "post post";
  margin-bottom: -20px;
`

const DateWrapper = styled.div`
  grid-area: date;
`

const ThumbnailWrapper = styled.div`
  grid-area: thumbnail;
`

const PostWrapper = styled.div`
  grid-area: post;
  width: 93%;
`

const SimplifiedBlogPost = ({ post }) => (
  <BlogPostWrapper>
    <DateWrapper>
      <PostDate date={post.publishedDate} />
      {post.tags.map(tag => (
        <Tag key={tag} tag={tag} />
      ))}
    </DateWrapper>
    <ThumbnailWrapper>
      <Thumbnail
        src={post.media[0].file.url}
        alt={post.media[0].file.fileName}
      />
    </ThumbnailWrapper>
    <PostWrapper>
      <Title title={post.title} />
      <TruncatedParagraph
        text={post.description.internal.content}
        slug={post.slug}
      />
    </PostWrapper>
  </BlogPostWrapper>
)

SimplifiedBlogPost.propTypes = {
  post: PropTypes.object,
}

export default SimplifiedBlogPost
