import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import galleryStyles from "./gallery.module.css"
import gnccfStyles from "./gnccf.module.css"

const Sold = ({sold}) => {
  if (sold)
    return <span style={{
      backgroundColor: '#ffcccb',
      padding: '10px', 
      borderRadius: '5px',
      marginRight: '1em'
    }}>Sold </span>
  return null;
}

export default ({ data }) => {
  // const images = data.allGnccfYaml.edges[0].node.images;
  return (
    <Layout  className={galleryStyles.album}>
      <section>
        <div style={{ 
          marginBottom: '1em',
          padding: '1em',
          borderBottom: '1px solid #cfcfcf',
          borderTop: '1px solid #cfcfcf' 
        }}>
          <p style={{ fontSize: '1.2em', color: 'red'}}>
            Please email or message me on instagram if you would like to purchase something or if you have any questions. Thank you!
          </p>
          <p>
            Email <a href="mailto:angela@angelasidwell.com">angela@angelasidwell.com</a>
            <br/>
            Instagram <a href="https://www.instagram.com/angela_sidwell_artist/">angela_sidwell_artist</a>
          </p>
          <img src={'/gnccf.jpg'} alt="GNCCF Logo" />
          <p>
            The sculptures on this page curently feature in the Great Northern Contemporary Craft Fair 
            <a style={{ textDecoration: 'none' }} href="http://www.greatnorthernevents.co.uk/homepage-gnccf.aspx">(GNCCF Online 2020)</a>.
          </p>
          <p>
            If an item has sold and you would like to buy a similar piece please let me know.
          </p>
          <p>
            The prices include postage within UK I also post items internationally.  
          </p>
        </div>

        {data.allGnccf2Yaml.edges[0].node.images.map(({image, alt, text, sold}) =>
          <div>
            <Img
              className={galleryStyles.image}
              fluid={image.childImageSharp.fluid}
              alt={alt || image.name}
            />
            <div className={gnccfStyles.imageText}>
              <Sold sold={sold}/>{ text }
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export const query = graphql` 
  query Gnccf2Images {
    allGnccf2Yaml {
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
            sold
          }
        }
      }
    }
  }
`