import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
  object-fit: cover;
  background: ${props => `url(${props.backgroundImage}) no-repeat`};
  height: 15rem;
  width: 100%;
  margin: 0.5rem 0 1.5rem;
`

const FeaturedImage = ({ backgroundImage }) => (
  <ImageWrapper backgroundImage={backgroundImage} />
)

FeaturedImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  backgroundImage: PropTypes.string,
}

export default FeaturedImage
