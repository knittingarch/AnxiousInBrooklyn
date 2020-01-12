import React from 'react'
import styled from 'styled-components'

import Date from './Date'
import Image from './Image'
import Paragraph from './Paragraph'
import Tag from './Tag'
import Title from './Title'

// Possible Colors
// color: #7cc2fd;
// color: #f268ae;

const BlogPostWrapper = styled.section`
  margin: 20px;
  flex-direction: row;
`

const ImageWrapper = styled.div`
  display: inline-block;
`

const BlogPost = ({ post }) => (
  <BlogPostWrapper>
    <Date date={post.publishedDate} />
    {post.tags.map((tag) => (
      <Tag tag={tag} />
    ))}
    <Title title={post.title} />
    <ImageWrapper>
      {post.media.map((image) => (
          <Image
            src={image.file.url}
            alt={image.file.fileName}
          />
      ))}
    </ImageWrapper>
    <Paragraph text={post.description.internal.content} />
  </BlogPostWrapper>
)

export default BlogPost
