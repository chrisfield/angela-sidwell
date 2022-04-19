import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import galleryStyles from "./gallery.module.css"

const Sold = ({sold}) => {
  if (sold)
    return <span style={{
      backgroundColor: '#ffcccb',
      padding: '10px', 
      borderRadius: '5px',
      marginRight: '1em'
    }}>Sold </span>
  return null;
};

export default ({ data }) => (
  <Layout  className={galleryStyles.album}>
    <section>
      <h2>Available work</h2>
      <p>
        Please email me at
        <a href="mailto:angela@angelasidwell.com"> angela@angelasidwell.com </a>
        or via direct messages on Instagram:
        <a href="https://www.instagram.com/angela_sidwell_artist/"> angela_sidwell_artist </a>,
        for more images, information or to commision a sculpture.
      </p>
      <p>
        Prices include postage within the UK. Worldwide shipping is available at an extra charge.
      </p>
      {data.allForSaleYaml.edges[0].node.images.map((image, index) =>
        <div>
          <Img
            className={galleryStyles.image}
            fluid={image.image.childImageSharp.fluid}
            alt={image.image.name}
          />
          <h3>{ image.name }</h3>
          <div>{ image.description }</div>
          <div>Measurments: { image.dimensions }</div>
          <div>Price: { image.price } <Sold sold={image.sold}/></div>
          <div>{ image.footnote }</div>
          { index + 1  < data.allForSaleYaml.edges[0].node.images.length
            && 
            <>
              <br />
              <hr color="gray" />
              <br />
            </>
          }
        </div>
      )}
    </section>
  </Layout>
)

export const query = graphql` 
  query ForSaleQuery {
    allForSaleYaml {
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
            name
            price
            sold
            description
            dimensions
            footnote
          }
        }
      }
    }
  }
`
