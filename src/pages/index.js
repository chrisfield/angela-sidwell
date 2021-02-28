import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="fox"
      />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "fox-head.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `