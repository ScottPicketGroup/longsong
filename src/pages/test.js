import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"

const test = () => {
  const [form, setForm] = React.useState(false)
  React.useEffect(() => {
    setForm(true)
  }, [])
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
              setTimeout(function(){ftenquireinit(665, "longrain")}, 2000)
            </script>
            <div id="ftenquire665"></div>
          </>
        ) : null}
      </Helmet>
    </Layout>
  )
}

export default test
