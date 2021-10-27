import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Pages/Landing/Hero/Hero"
import Calender from "../components/Pages/Landing/Caleneder/Calender"

//import components you have made for those sections

const IndexPage = () => {
  const [calenderRef, setCalenderRef] = useState(null);
  const excuteScroll = () => calenderRef.current.scrollIntoView({behavior: "smooth", inline: "nearest"});

  //components state

  //  use effect 
  // let modulesToPush = []
  // map landingPageModules => modulesToPush.push({name: arrayname.firstlettertocapital, props: props})
  // setmodules (modulestopush)




  return (
    <Layout fd="column">
      <Seo title="Home" />
      <Hero excuteScroll={excuteScroll} />
      {/* <Calender setCalenderRef={setCalenderRef} /> */}

  {/* modules.map((module, i) => <BlankComponnet component={component.name} props={props}) */}
    </Layout>
  )
}

export default IndexPage
