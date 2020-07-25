import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default ({ data }) => (
  <Layout>
      <div style={{ marginBottom: '2em' }}>
        <div>
          See my work at Great Northern Contemporary Craft Fair Online <Link to="/gnccf">here</Link>
        </div>
      </div>
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