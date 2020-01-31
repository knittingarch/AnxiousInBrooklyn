import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import natureTagSwipe from "../images/nature_swipe.png"

const BlogPostTagWrapper = styled.div`
  background-image: url(${natureTagSwipe});
  background-repeat: no-repeat;
  display: inline-block;
  width: 75px;
`

const BlogPostTag = styled.li`
  list-style-type: none;
  margin-left: 5px;
  font-family: "League Script", cursive;
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
