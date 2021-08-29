import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Pages/Landing/Hero/Hero"
import Calender from "../components/Pages/Landing/Caleneder/Calender"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <Layout fd="column">
    <Seo title="Home" />
    <Hero />
    <Calender />
 
  </Layout>
)

export default IndexPage
