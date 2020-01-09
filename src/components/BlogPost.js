import React from 'react'
import styled from 'styled-components'

const BlogPostWrapper = styled.div`
  border: 3px solid #000;
  width: 50%;
`

const BlogPostDate = styled.h1`
  color: #7cc2fd;
`

const BlogPostTitle = styled.h2`
  color: #f268ae;
`

const BlogPostTags = styled.li`
  color: #dcce76;
  list-style-type: none;
`

const BlogPostText = styled.p`
  font-size: 14px;
`

const BlogPost = ({ post }) => (
  <BlogPostWrapper>
    <BlogPostDate>
      {post.publishedDate}
    </BlogPostDate>
    <BlogPostTags>
      {post.tags}
    </BlogPostTags>
    <BlogPostTitle>
      {post.title}
    </BlogPostTitle>

    <img src={post.media[0].file.url} alt="" />
    <BlogPostText>
      {post.description.internal.content}
    </BlogPostText>
  </BlogPostWrapper>
)

export default BlogPost
