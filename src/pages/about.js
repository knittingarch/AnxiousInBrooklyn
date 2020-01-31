import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import BathImage from "../images/baths.png"
import BeachImage from "../images/beach.png"
import KnittingImage from "../images/knitting.png"
import LavendarImage from "../images/lavender.png"
import NatureImage from "../images/nature.png"
import ReadingImage from "../images/reading.png"

const MainWrapper = styled.div`
  display: grid;
  max-width: var(--desktop-width);
  margin: 0 auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 275px repeat(2, 1fr);
  grid-template-areas:
    "beach nature lavendar knitting     reading    baths"
    ".          about      about      about      about      ."
    ".          about      about      about      about      .";
`

const AboutSection = styled.section`
  grid-area: about;
  align-self: center;
  justify-self: center;
  padding: var(--standard-spacing);
  border: 1px dashed #bbb;
  background: rgb(238, 238, 238, 0.5);
`

const BeachDangle = styled.img`
  grid-area: beach;
`
const KnittingDangle = styled.img`
  grid-area: knitting;
`
const LavendarDangle = styled.img`
  grid-area: lavendar;
`
const NatureDangle = styled.img`
  grid-area: nature;
`
const ReadingDangle = styled.img`
  grid-area: reading;
`
const BathDangle = styled.img`
  grid-area: baths;
`

const PageTitle = styled.h1`
  color: #f3c39a;
  letter-spacing: 2px;
`

const PageText = styled.p`
  font-size: 18px;
`

const Welcome = styled.span`
  font-family: "League Script", cursive;
  letter-spacing: 4px;
  color: #333;
`

const linkStyle = {
  textDecoration: "none",
  marginTop: "var(--standard-spacing)",
}

const AboutPage = () => (
  <MainWrapper>
    <BeachDangle src={BeachImage} width="125px" />
    <NatureDangle src={NatureImage} width="175px" />
    <LavendarDangle src={LavendarImage} width="125px" />
    <KnittingDangle src={KnittingImage} width="160px" />
    <ReadingDangle src={ReadingImage} width="150px" />
    <BathDangle src={BathImage} width="125px" />
    <AboutSection>
      <PageTitle>
        <Welcome>Welcome to </Welcome> Anxious in Brooklyn
      </PageTitle>
      <PageText>
        In May 2018, I moved to New York, excited by the possibilities that
        awaited me. New York can be a very hard place to adjust to. Folks are
        endlessly busy, public transit can be trying. In a word, it’s lonely
        here for a lot of people, including yours truly. Nearly 2 years in
        though, I have developed some self-care habits to cope: nature, crafts,
        skin care, Korean culture, reading. I’ll be posting about my mental
        health and what I am doing to improve it. I hope you’ll join me on this
        journey as I conquer the challenges of being a transplant in one of the
        most populated, most isolating cities in the world.
      </PageText>
      <Link to="/" style={linkStyle}>
        Back to Home
      </Link>
    </AboutSection>
  </MainWrapper>
)

export default AboutPage
