import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
      <div style={{ marginBottom: '2em' }}>
        <div>
          View/purchase my work at Great Northern Contemporary Craft Fair Online <Link to="/gnccf2">here</Link>
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