import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
  padding: 5px;
  width: 300px;
`

const ImageStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px",
  marginBottom: "0",
}

const Image = ({ src, alt }) => (
  <ImageWrapper>
    <img src={src} alt={alt} style={ImageStyle} />
  </ImageWrapper>
)

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default Image
