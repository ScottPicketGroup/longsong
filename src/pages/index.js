import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Pages/Landing/Hero/Hero"
import Calender from "../components/Pages/Landing/Caleneder/Calender"

const IndexPage = () => {
  const [calenderRef, setCalenderRef] = useState(null);
  const excuteScroll = () => calenderRef.current.scrollIntoView({behavior: "smooth", inline: "nearest"});

  return (
    <Layout fd="column">
      <Seo title="Home" />
      <Hero excuteScroll={excuteScroll} />
      <Calender setCalenderRef={setCalenderRef} />
    </Layout>
  )
}

export default IndexPage
