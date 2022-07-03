import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = () => {


  console.log("form info:", window.ftenquireinit(665, "longrain"))
  return (
    <Layout fd="column">
      <Seo title="Home" />
   
      <FunctionTrackerForm id="ftenquire665" ></FunctionTrackerForm>
    
    </Layout>
  )
}

export default Test

export const FunctionTrackerForm = styled.div`
background-color: inherit;
  .ftpage-container {
    
  }
`;