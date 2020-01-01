import React from "react"
import { Link } from "gatsby"
import { useSelector } from 'react-redux'
import { t } from "ttag"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const useStore = useSelector((store) => store)
  const TXT_GATSBY_HI = useStore.languagesState.translations[''].GATSBY_HI.msgstr[0]
  const TXT_GATSBY_WELCOME = useStore.languagesState.translations[''].GATSBY_WELCOME.msgstr[0]
  const TXT_GATSBY_NOW_BUILD = useStore.languagesState.translations[''].GATSBY_NOW_BUILD.msgstr[0]
  const TXT_GATSBY_GO_PAGE_2 = useStore.languagesState.translations[''].GATSBY_GO_PAGE_2.msgstr[0]
  /* eslint-disable */
  const myStr = () => {
    t`GATSBY_HI`
    t`GATSBY_WELCOME`
    t`GATSBY_NOW_BUILD`
    t`GATSBY_GO_PAGE_2`
  } 
  /* eslint-enable */
  return(
  <Layout>
    <SEO title="Home" />
    <h1>{TXT_GATSBY_HI}</h1>
    <p>{TXT_GATSBY_WELCOME}</p>
    <p>{TXT_GATSBY_NOW_BUILD}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">{TXT_GATSBY_GO_PAGE_2}</Link>
  </Layout>
)}

export default IndexPage
