import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const BlogPostImageWrapper = styled.div`
  width: 417px;
`

const ImageWidth = {
  width: "100%",
}

const FeaturedImage = ({ src, alt }) => (
  <BlogPostImageWrapper>
    <img src={src} alt={alt} style={ImageWidth} />
  </BlogPostImageWrapper>
)

FeaturedImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default FeaturedImage
