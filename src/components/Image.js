import React from 'react'
import styled from 'styled-components'

const BlogPostImageWrapper = styled.div`
  padding: 5px;
  width: 250px;
`

const MainImage = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
`

const ImageFooter = styled.div`
  text-align: center;
  padding: 10px 20px;
`

const ImageWidth = {
  width: '100%'
}


const Image = ({ src, alt }) => (
  <BlogPostImageWrapper>
    <MainImage>
      <img src={src} alt={alt} style={ImageWidth} />
      <ImageFooter />
    </MainImage>
  </BlogPostImageWrapper>
)

export default Image
