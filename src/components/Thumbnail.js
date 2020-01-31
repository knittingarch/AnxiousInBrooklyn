import PropTypes from "prop-types"
import React from "react"

const ThumbnailStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px",
}

const Thumbnail = ({ alt, src }) => (
  <img src={src} alt={alt} style={ThumbnailStyle} />
)

Thumbnail.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default Thumbnail
