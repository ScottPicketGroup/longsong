import styled, { keyframes } from "styled-components"
export const xFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
   
   
  }
  

  100% {
    opacity: 1;
    display: flex;

  }
`
export const SlideOutPageWrapper = styled.div`
  padding-right: 8%;
  display: ${props => (props.activePage === props.page ? "flex" : "none")};
  flex-direction: column;
  animation: ${xFadeIn} 500ms ease-in-out;
  @media (max-width: 450px) {
    margin-top: ${props => (props.contact ? "56px" : "")};
    padding: 0;
  }
`
export const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => (props.column ? "column" : "row")};
  justify-content: ${props => (props.column ? "" : "space-between")};
  margin-bottom: 6rem;
  :last-child {
    margin-bottom: 8.86rem;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    :first-child {
      margin-top: 56px;
      margin-bottom: 6rem;
    }
    :last-child {
     
      flex-direction: ${props => props.mobInvert ? 'column-reverse': ''};
    }

    

    margin-bottom: 6rem;
  }
`
export const TextContainer = styled.div`
  width: ${props => (props.full ? "50%" : props.sixty ? "60%" : "40%")};
  align-self: ${props => (props.right ? "flex-end" : "")};
  float: right;
  margin-top: ${props => (props.first ? "56px" : "")};
  @media (max-width: 450px) {
    width: 100%;
  }

  p {
    font-family: normal;
    line-height: 1.14;
    font-size: 1.25rem !important;
    margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
    margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
    @media (max-width: 450px) {
      margin-bottom: 1.5rem;
      
     margin-top: ${props => props.topMarginNotRequiredMob ? '0' : ''};
    }
  }
`

export const ImageWrapper = styled.div`
  width: ${props => (props.full ? "100%" : props.horizontal ? "80%" : "50%")};
  @media (max-width: 450px) {
    width: 100%;

    margin-bottom: ${props => props.marginRequired ? '3.5rem': ''};
  }
`
