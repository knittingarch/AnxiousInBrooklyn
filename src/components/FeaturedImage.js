import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
  object-fit: cover;
`

const ImageWidth = {
  margin: "0 auto",
}

const FeaturedImage = ({ src, alt }) => (
  <ImageWrapper>
    <img src={src} alt={alt} style={ImageWidth} />
  </ImageWrapper>
)

FeaturedImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default FeaturedImage
