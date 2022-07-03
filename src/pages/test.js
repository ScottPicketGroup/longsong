import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = () => {


  console.log("form info:", window.ftenquireinit(665, "longrain"))
  return (
    <Layout fd="column">
      <Seo title="Home" />
   
      <FunctionTrackerForm id="ftenquire665" style={styles.section}></FunctionTrackerForm>
    
    </Layout>
  )
}

export default Test
const styles = {
  section: {
    fontSize: "18px",
    color: "#292b2c",
    backgroundColor: "black",
    padding: "0 20px"
  },
  wrapper: {
    textAlign: "center",
    margin: "0 auto",
    marginTop: "50px"
  }
}
export const FunctionTrackerForm = styled.div`
  
`;