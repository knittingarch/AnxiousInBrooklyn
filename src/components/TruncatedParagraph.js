import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Truncate from 'react-truncate';

const BlogPostText = styled.p`
  width: 417px;
  margin-top: 0;
`

const style = {
  textDecoration: 'none',
  color: '#f268ae',
}


const TruncatedParagraph = ({ text, slug }) => (
  <>
    <BlogPostText>
      <Truncate lines={3} ellipsis={<span>... <Link to={`/${slug}`} style={style}>read more</Link></span>}>
        {text}
      </Truncate>
    </BlogPostText>
  </>
)

export default TruncatedParagraph
