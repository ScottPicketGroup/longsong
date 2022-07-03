import React from "react"
import styled from "styled-components"
import { TextContainer } from "../../Bar/Space.css"
const FunctionTrackerForm = () => {
  return (
 
    <FunctionTrackerFormContainer id="ftenquire665"></FunctionTrackerFormContainer>

  )
}

export default FunctionTrackerForm

export const FunctionTrackerFormContainer = styled.div`
  background-color: inherit !important;
  .ftpage-container {
    background-color: inherit !important;
  }
.ftform-group {
  color: white !important;
}
.ftcontrol-label {
color: white !important;
text-transform: uppercase !important;
}
.ftform-control {

  border-radius: 0px !important;
  background-color: transparent !important;
  color: white !important;
  box-shadow: none !important;
  border: none !important;
  border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")} !important;
}
input {
  height: 2rem;
  background: rgba(255, 255, 255, 0) !important;
  border: none !important;
  padding: 1.5rem 0 !important;
  font-size: 0.75rem !important;
  line-height: none !important;

  border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")} !important;
  ::placeholder {
    color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
    font-size: 1rem;
    margin-bottom: 10rem;
    background: transperant;
    font-family: normal;
  }
  :focus {
    outline: none !important;
    background: transparent !important;
    font-family: normal !important;
    height: 3rem !important;
    font-size: 150% !important;
  }
  :valid {
    box-shadow: none !important;
    color: white !important;
    font-size: 1rem !important;
    font-family: normal !important;
  }
  ::-moz-focus-outer {
    color: white !important;
  }
  @media screen and (max-width: 450px) {
    width: 100% !important;
  }
}
.eventadditionalnotesfield {
  background: inherit !important;
}
  .select2-selection__rendered {
    color: white;
    background-color: inherit;
  }

  /* Around the search field */
  .select2-search {
    color: white;
    background-color: inherit;
  }

  /* Search field */
  .select2-search input {
    color: white;
    background-color: inherit;
  }

  /* Each result */
  .select2-results {
    color: white;
    background-color: inherit;
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
    background-color: inherit;
  }

  .select2-selection--multiple:not([class*="bg-"]) {
    background-color: inherit;
  }

  .select2-selection__arrow {
    background-color: inherit;
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
..select2-selection--single:not([class*=bg-]):not([class*=border-]) {
  border-color: transparent !important;
}
.select2-results__option[aria-selected=true] {
  background-color: white !important;
  color: inherit;
}
.select2-results__option select2-results__option--highlighted {
  background-color: white !important;
}
.ftbtn .ftbtn-primary {
  font-family: normal !important;
  font-size: 1rem !important;
  background: transparent !important;
  text-transform: uppercase !important;
  line-height: 46px !important;
  border-radius: 0px !important;
  border: 1px solid white !important;
  width: 225px !important;
  color: white !important;
  padding: 0rem 2.75rem !important;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #2b3c31 !important;
    background: white !important;
  }
}
`

