import React, {useState, useEffect} from "react"
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
useEffect(() => {
    console.log(window.ftenquireinit(665, "longrain"))
    
}, []);
  return (
    <Layout fd="column">
      <Seo title="Home" />
      test
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
       {window.enquirecustom.ftenquireinit(665, "longrain")}
       <div id="ftenquire665"></div>
    </Layout>
  )
}

export default Test
