/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { Link } from "../components/Link"
import DefaultLayout from "./DefaultLayout"

const PostLayout = ({ data: { mdx } }) => {
  const { title, tags, date, featuredImage } = mdx.frontmatter

  return (
    <DefaultLayout>
      <Link
        href="/posts/"
        sx={{
          display: "block",
          mb: 3,
        }}
      >
        Back
      </Link>
      {featuredImage && (
        <Styled.div
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: [250, 300],
            overflow: "hidden",
            mb: 4,
          }}
        >
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </Styled.div>
      )}
      <Styled.h6>{date}</Styled.h6>
      <Styled.h1>{title}</Styled.h1>
      <Styled.ul
        sx={{
          listStyle: "none",
          display: "flex",
          padding: 0,
          margin: 0,
        }}
      >
        {tags.map((item, index) => (
          <Styled.li key={index}>{item}&nbsp;</Styled.li>
        ))}
      </Styled.ul>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <Styled.div
        sx={{
          mb: 4,
        }}
      >
        <Link
          href="/posts/"
          sx={{
            display: "block",
            mt: 5,
          }}
        >
          Back
        </Link>
      </Styled.div>
    </DefaultLayout>
  )
}

export const contentQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      wordCount {
        paragraphs
        sentences
        words
      }
      timeToRead
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
export default PostLayout