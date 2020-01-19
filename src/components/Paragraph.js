import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Text = styled.p`
  margin-top: 25px;
`

const Paragraph = ({ text }) => <Text>{text}</Text>

Paragraph.propTypes = {
  text: PropTypes.string,
}

export default Paragraph
