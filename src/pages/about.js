import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import dotGridPaper from "../images/dot-grid.png"

const MainWrapper = styled.div`
  background-image: url(${dotGridPaper});
  background-repeat: repeat;
  display: flex;
`

const PageTitle = styled.h1`
  color: #f3c39a;
`

const style = {
  textDecoration: "none",
  marginTop: "20px",
}

const AboutPage = () => (
  <MainWrapper>
    <PageTitle>About this blog</PageTitle>
    <Link to="/" style={style}>
      Back to Home
    </Link>
  </MainWrapper>
)

export default AboutPage
