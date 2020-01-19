import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const BlogPostDate = styled.h1`
  margin-bottom: 6px;
  font-family: "Fredericka the Great";
  font-size: 36px;
`

const Date = ({ date }) => <BlogPostDate>{date}</BlogPostDate>

Date.propTypes = {
  date: PropTypes.string,
}

export default Date
