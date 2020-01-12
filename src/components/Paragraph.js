import React from 'react'
import styled from 'styled-components'

const BlogPostText = styled.p`
  margin-top: 25px;
`

const Paragraph = ({ text }) => (
  <BlogPostText>
    {text}
  </BlogPostText>
)

export default Paragraph
