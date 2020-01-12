import React from 'react'
import styled from 'styled-components'

const BlogPostImageWrapper = styled.div`
  width: 417px;
`

const ImageWidth = {
  width: '100%'
}


const Image = ({ src, alt }) => (
  <BlogPostImageWrapper>
      <img src={src} alt={alt} style={ImageWidth} />
  </BlogPostImageWrapper>
)

export default Image

