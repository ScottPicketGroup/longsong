import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = () => {
  //   const [form, setForm] = useState(false)
  //  useEffect(() => {
  //    setTimeout(() => {
  //     setForm(true)
  //    }, 100000);
  //   }, [])
  //   console.log(form)
  // useEffect(() => {
  //     console.log(window.ftenquireinit(665, "longrain"))

  // }, []);
  // setTimeout(() => {
  //   window.ftenquireinit(665, "longrain")
  // }, 3000)
  
  console.log(window.ftenquireinit(665, "longrain"))
  return (
    <Layout fd="column">
      <Seo title="Home" />
      <Helmet>
        <script
          language="javascript"
          src="https://longrain.functiontracker.com/public/v4/enquirecustom.js"
        ></script>
        <script language="javascript">
          {setTimeout(() => {
            window.ftenquireinit(665, "longrain")
          }, 3000)}
        </script>
       
      </Helmet>
      <div id="ftenquire665"></div>
      {/* <Helmet>
        {form ? (
          <>
            <script
              language="javascript"
              src="https://longrain.functiontracker.com/public/v4/enquirecustom.js"
            ></script>
            <script language="javascript">
            {ftenquireinit(665, "longrain")}
            </script>
            <div id="ftenquire665"></div>
          </>
        ) : null}
      </Helmet> */}

      {/* <div id="ftenquire665"></div> */}
    </Layout>
  )
}

export default Test
