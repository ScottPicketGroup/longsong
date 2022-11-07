import React from "react"
import Layout from "../components/layout"
import FunctionTrackerForm from "../components/Pages/SlideOutMenuPages/PrivateDining/ContactForm/FunctionTrackerForm"
import Seo from "../components/seo"

const Test = () => {
  console.log("form info:", window.ftenquireinit(665, "longrain"))
  return (
    <Layout fd="column">
      <Seo title="Home" />

      <FunctionTrackerForm/>
    </Layout>
  )
}

export default Test
