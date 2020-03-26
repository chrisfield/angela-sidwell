import React from "react"
import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.css"

export default () => (
  <Layout>
    <h2>Shows and Exhibitions 2020</h2>
    <p>
      Due to the current and uncertain situation, some shows may be cancelled or postponed. Gallery opening times may be irregular or by appointment only, please see their websites for details.
      Please email me angela@angelasidwell.com if you are interested in purchasing or commissioning a piece directly from me.
      <br />
      Online shop coming soon
      <br /><br/>
      Best Wishes
      <br />
      Angela
    </p>
    
    <h3>April 9th – April 25th <span className={layoutStyles.red}>*Postponed*</span></h3>
    <p>
      <a href="http://gallery6newark.co.uk">
        Gallery 6 - Newark
      </a>
      <br />
      "Forces of Nature" - A joint exhibition of ceramic sculpture from Angela Sidwell and pen and ink drawings from Rebecca Jordan
      <br />
      Gallery 6, 6 Stodman Street, Newark NG24 1AN
    </p>

    <h3>June 26th -28th <span className={layoutStyles.red}>*Cancelled*</span></h3>
    <p>
      <a href="http://earthandfire.co.uk">
        Earth and Fire Ceramic Fair
      </a>
      <br />
      Harley Gallery, Welbeck, Nottinghamshire S80 3LW. 
    </p>

    <h3>July 11th -12th <span className={layoutStyles.red}>*Cancelled*</span></h3>
    <p>
      <a href="http://ceramicwales.co.uk">Ceramic Wales</a>
      <br />
      Wrexham Glyndwr University, Mold Road, Wrexham LL11 2AW 
    </p>

    <h3>August 30th</h3>
    <p>
      <a href="http://ceramicsinsouthwell.org.uk">
        Ceramics in Southwell
      </a> 
      <br />
      Market Square, Southwell, Nottinghamshire NG25 0FS 
    </p>

    <h2>Current Stockists</h2>
    <p>
      <a href="http://www.oakowlfox.com">OakOwlFox</a>, Crown Buildings, Station Road, Llanrwst LL26 0EP
    </p>
    <p>
      <a href="http://www.oakowlfox.com">Gallery 6</a>, Stodman Street, Newark NG24 1AN
    </p>
  </Layout>
)