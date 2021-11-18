import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <ExternalForm id="CONTACTA_619389b6eaba730a77d3a6a1">
    </ExternalForm>
    <Helmet>
      {/* <script type="text/javascript" async>
        var script = document.createElement("script"); script.type =
        "text/javascript"; script.src =
        "https://forms.contacta.io/619389b6eaba730a77d3a6a1.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      </script>
      <script
        language="javascript"
        src="https://longrain.functiontracker.com/public/v4/enquire.js"
      ></script>
      <script language="javascript">
        setTimeout(function(){ftenquireinit(625, "longrain")}, 3000)
      </script>
      <div id="ftenquire625"></div> */}
      <script type="text/javascript" async>
        var script = document.createElement("script"); script.type =
        "text/javascript"; script.src =
        "https://forms.contacta.io/61960d1629fed0387a8dae7f.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      </script>
      div for page
      <div id="CONTACTA_61960d1629fed0387a8dae7f"></div>
      Private events enquire form
      <script type="text/javascript" async>
        var script = document.createElement("script"); script.type =
        "text/javascript"; script.src =
        "https://forms.contacta.io/61960f035e0c880c5a61ab16.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      </script>
      <div id="CONTACTA_61960f035e0c880c5a61ab16"></div>
    </Helmet>
  </Layout>
)

export default SecondPage

export const ExternalForm = styled.div`
  .contacta-webform-table {
    width: 100%;
    table-layout: fixed;
    display: flex;
    flex-wrap: wrap;
  }

  .contacta-row {
    width: 50%;
    :first-child {
      width: 0;
    }
    :nth-child(9) {
      width: 100%;
    }
    :nth-child(10) {
      width: 100%;
    }
    :nth-child(11) {
      width: 100%;
      flex-direction: column;
    }
  }
  input {
    height: 2rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")};
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: normal;
    }
    :focus {
      outline: none;
      background: transparent;
      font-family: normal;
      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: white;
      font-size: 1rem;
      background: transperant;
      font-family: normal;
    }
    ::-moz-focus-outer {
      color: white;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  label {
  }

  textarea {
    font-family: normal;
    width: 100%;
    height: 10rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#B1B1B1")};
    overflow: hidden;
  }
`
