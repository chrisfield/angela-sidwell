import React from "react"
import InstagramIcon from "./instagram.inline.svg"
import Envelope from "./envelope.inline.svg"
import footerStyles from "./footer.module.css"

export default props => (
  <footer>
    <div className={footerStyles.links}>
      <a className={footerStyles.link} href="mailto:angela@angelasidwell.com">
        <Envelope/>
      </a>
      <a className={footerStyles.link} href="https://www.instagram.com/angela_sidwell_artist/">
        <InstagramIcon/>
      </a>
    </div>
  </footer>
)