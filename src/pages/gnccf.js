import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import galleryStyles from "./gallery.module.css"
import gnccfStyles from "./gnccf.module.css"

export default ({ data }) => {
  // const images = data.allGnccfYaml.edges[0].node.images;
  return (
    <Layout  className={galleryStyles.album}>
      <section>
        <img src={'/gnccf.jpg'} alt="GNCCF Logo" />
        <div style={{ 
          marginBottom: '1em',
          padding: '1em',
          borderBottom: '1px solid #cfcfcf',
          borderTop: '1px solid #cfcfcf' 
        }}>
          <p>
            The sculptures on this page are part of the Great Northern Contemporary Craft Fair 
            <a style={{ textDecoration: 'none' }} href="http://www.greatnorthernevents.co.uk/homepage-gnccf.aspx">(GNCCF Online 2020)</a>.
          </p>
          <p>
            The prices include postage within UK. I'm also used to posting items internationally. Please email or message me on instagram if you would like to buy something or if you have any questions. Thank you! 
          </p>
          <p>
            Email <a href="mailto:angela@angelasidwell.com">angela@angelasidwell.com</a>
            <br/>
            Instagram <a href="https://www.instagram.com/angela_sidwell_artist/">angela_sidwell_artist</a>
          </p>
        </div>

        {data.allGnccfYaml.edges[0].node.images.map(({image, alt, text}, index) =>
          <div>
            <Img
              className={galleryStyles.image}
              fluid={image.childImageSharp.fluid}
              alt={alt || image.name}
            />
            <div className={gnccfStyles.imageText}>
              { text }
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export const query = graphql` 
  query GnccfImages {
    allGnccfYaml {
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
            text
          }
        }
      }
    }
  }
`