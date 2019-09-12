import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import galleryStyles from "./gallery.module.css"


export default ({ data }) => (
  <Layout  className={galleryStyles.album}>
    <section>
    {data.allGalleryYaml.edges[0].node.images.map(image =>
      <div>
        <Img
          className={galleryStyles.image}
          fluid={image.image.childImageSharp.fluid}
          alt={image.alt || image.image.name}
        />
      </div>
    )}
    </section>
  </Layout>
)

export const query = graphql` 
  query MyQuery {
    allGalleryYaml {
      edges {
        node {
          id
          images {
            image {
              id
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query MyQuery {
//     allImageSharp {
//       edges {
//         node {
//           id
          // fluid {
          //   ...GatsbyImageSharpFluid
          // }
//         }
//       }
//     }
//     directory(absolutePath: {eq: "gallery"}) {
//       id
//     }
//   }
//   `

/*
import React from "react"
import Layout from "../components/layout"
import galleryStyles from "./gallery.module.css"

const Img = props => (
  <img className={galleryStyles.image} {...props}/>
)

export default () => (
  <Layout>
    <section className={galleryStyles.album}>    
      <Img src="/images/crossing-point-detail.jpg" alt="Crossing Point - detail"/>
      <Img src="/images/crossing-point.JPG" alt="Crossing Point"/>
      <Img src="/images/fox-track.jpg" alt="Fox track"/>
      <Img src="/images/fox.jpg" alt="Fox"/>
      <Img src="/images/ghost.jpg" alt="Ghost"/>
      <Img src="/images/habitation.jpg" alt="Habitation 1"/>
      <Img src="/images/habitation2.JPG" alt="Habitation 2"/>
      <Img src="/images/habitation3.jpg" alt="Habitation 3"/>
      <Img src="/images/habitation4.jpg" alt="Habitation 4"/>
      <Img src="/images/barn-owl.jpg" alt="Barn Owl"/>
    </section>
  </Layout>
)
*/