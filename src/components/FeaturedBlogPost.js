import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Date from "./Date"
import FeaturedImage from "./FeaturedImage"
import Tag from "./Tag"
import Title from "./Title"
import TruncatedParagraph from "./TruncatedParagraph"

const BlogPostWrapper = styled.section`
  margin: var(--standard-spacing);
  align-content: flex-end;
  width: 92%;
`

const FeaturedBlogPost = ({ post }) => (
  <BlogPostWrapper>
    <Date date={post.publishedDate} />
    {post.tags.map((tag, index) => (
      <Tag key={index} tag={tag} />
    ))}
    <Title title={post.title} />
    <FeaturedImage
      src={post.media[0].file.url}
      alt={post.media[0].file.fileName}
    />
    <TruncatedParagraph
      text={post.description.internal.content}
      slug={post.slug}
    />
  </BlogPostWrapper>
)

FeaturedBlogPost.propTypes = {
  post: PropTypes.object,
}

export default FeaturedBlogPost
