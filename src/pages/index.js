import React from "react"
import { Link } from "gatsby"
import { useSelector } from 'react-redux'
import { t } from "ttag"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const IndexPage = () => {
  const useStore = useSelector((store) => store)
  const storeLanguages = useStore.languagesState.translations['']
  
  const TXT_GATSBY_HI = storeLanguages.GATSBY_HI.msgstr[0]
  const TXT_GATSBY_H2 = useStore.firstState.is ? storeLanguages.TXT_1_H2.msgstr[0] : storeLanguages.TXT_0_H2.msgstr[0]
  const TXT_GATSBY_WELCOME = storeLanguages.GATSBY_WELCOME.msgstr[0]
  const TXT_GATSBY_NOW_BUILD = storeLanguages.GATSBY_NOW_BUILD.msgstr[0]
  const TXT_GATSBY_GO_PAGE_2 = storeLanguages.GATSBY_GO_PAGE_2.msgstr[0]
  console.log(useStore)
  /* eslint-disable */
  const myStr = () => {
    t`GATSBY_HI`
    t`GATSBY_WELCOME`
    t`GATSBY_NOW_BUILD`
    t`GATSBY_GO_PAGE_2`
    t`TXT_0_H2`
    t`TXT_1_H2`
  } 
  /* eslint-enable */
  return(
  <Layout>
    <SEO title="Home" />
    <h1>{TXT_GATSBY_HI}</h1>
    <h2>{TXT_GATSBY_H2}</h2>
    <p>{TXT_GATSBY_WELCOME}</p>
    <p>{TXT_GATSBY_NOW_BUILD}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">{TXT_GATSBY_GO_PAGE_2}</Link>
  </Layout>
)}

export default IndexPage
