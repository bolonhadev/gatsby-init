import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LanguageButtons from "./languageButtons"
import StatesButtons from "./statesButtons"

const Header = ({ siteTitle }) => {
  return(
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <LanguageButtons />
      <StatesButtons />
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
