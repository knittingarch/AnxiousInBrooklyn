import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const BlogPostTitle = styled.p`
  padding-top: 15px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #7cc2fd;
`

const Title = ({ title }) => <BlogPostTitle>{title}</BlogPostTitle>

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
