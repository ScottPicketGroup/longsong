import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"

const test = () => {
  return (
    <Layout fd="column" >
    <Seo title="Home" />
     test
     <Helmet>

     <script language="javascript" src="https://longrain.functiontracker.com/public/v4/enquirecustom.js"></script><script language="javascript">ftenquireinit(665,'longrain')</script><div id="ftenquire665"></div>
     </Helmet>
  </Layout>
  )
}

export default test