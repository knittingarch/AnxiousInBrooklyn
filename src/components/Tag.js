import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import tagSwipe from "../images/swipe.png"

const BlogPostTagWrapper = styled.div`
  background-image: url(${tagSwipe});
  background-repeat: no-repeat;
  display: inline-block;
  width: 75px;
`

const BlogPostTag = styled.li`
  list-style-type: none;
  margin-left: 15px;
  font-family: "League Script", cursive;
  letter-spacing: 0.5px;
  color: #000;
`

const Tag = ({ tag }) => (
  <BlogPostTagWrapper>
    <BlogPostTag>{tag}</BlogPostTag>
  </BlogPostTagWrapper>
)

Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
