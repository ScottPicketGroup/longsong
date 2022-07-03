import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = () => {
  console.log("form info:", window.ftenquireinit(665, "longrain"))
  return (
    <Layout fd="column">
      <Seo title="Home" />

      <FunctionTrackerForm id="ftenquire665"></FunctionTrackerForm>
    </Layout>
  )
}

export default Test

export const FunctionTrackerForm = styled.div`
  background-color: inherit;
  .ftpage-container {
    background-color: blue;
  }

  .select2-selection__rendered {
    color: white;
    background-color: blue;
  }

  /* Around the search field */
  .select2-search {
    color: white;
    background-color: blue;
  }

  /* Search field */
  .select2-search input {
    color: white;
    background-color: blue;
  }

  /* Each result */
  .select2-results {
    color: white;
    background-color: blue;
  }

  /* Higlighted (hover) result */
  .select2-results__option--highlighted {
    color: white;
  }

  /* Selected option */
  .select2-results__option[aria-selected="true"] {
    color: white;
  }

  .select2-container {
    border: 1px solid #dddddd;
    width: 100% !important ;
  }

  .select2-selection--single:not([class*="bg-"]) {
    background-color: blue;
  }

  .select2-selection--multiple:not([class*="bg-"]) {
    background-color: blue;
  }

  .select2-selection__arrow {
    background-color: blue;
  }
  .select2-selection__placeholder {
    color: white !important;
  }
  .select2-search__field {
    color: white !important;
  }
  .select2-selection__arrow::before {
    content: "";
    display: none;
  }

  .form-control-uniform {
    color: white !important;
    font-weight: bold !important;
  }
  .ftform-control::-webkit-input-placeholder {
    color: white;
  } /* WebKit, Blink, Edge */
  .ftform-control:-moz-placeholder {
    color: white;
  } /* Mozilla Firefox 4 to 18 */
  .ftform-control::-moz-placeholder {
    color: white;
  } /* Mozilla Firefox 19+ */
  .ftform-control:-ms-input-placeholder {
    color: white;
  } /* Internet Explorer 10-11 */
  .ftform-control::-ms-input-placeholder {
    color: white;
  } /* Microsoft Edge */
  .checker span {
    color: #dddddd;
    border: 2px solid #dddddd;
  }
  .picker__header {
    color: white;
  }
  .picker__table {
    color: white;
  }
  .ftcontrol-label {
    color: white;
  }
`
