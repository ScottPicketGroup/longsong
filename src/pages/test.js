import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"

const test = () => {
  const [form, setForm] = React.useState(false)
  React.useEffect(() => {
   setTimeout(() => {
    setForm(true)
   }, 100000);
  }, [])
  console.log(form)
  return (
    <Layout fd="column">
      <Seo title="Home" />
      test
      <Helmet>
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
      </Helmet>
    </Layout>
  )
}

export default test
