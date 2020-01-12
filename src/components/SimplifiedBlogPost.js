import React from 'react'
import styled from 'styled-components'

import Date from './Date'
import Tag from './Tag'
import Title from './Title'
import TruncatedParagraph from './TruncatedParagraph'

const BlogPostWrapper = styled.section`
  margin: 20px;
  width: 477px;
  align-content: flex-end;
`


const BlogPost = ({ post }) => (
  <BlogPostWrapper>
    <Date date={post.publishedDate} />
    {post.tags.map((tag) => (
      <Tag tag={tag} />
    ))}
    <Title title={post.title} />
    <TruncatedParagraph
      text={post.description.internal.content}
      slug={post.slug}
    />
  </BlogPostWrapper>
)

export default BlogPost
