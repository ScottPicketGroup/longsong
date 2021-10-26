import styled from "styled-components"

export const SectionRow = styled.div`
  display: flex;
  flex-direction: ${props => props.flex ? 'row' : 'column'};

  width: 100%;
  /* padding: ${props =>
    props.overflow === "true"
      ? "0 3.55rem"
      : props.full
      ? "0 3.75rem  0 2.35rem "
      : "0 4rem 0 3.5rem"};
  background: ${props => (props.background ? props.background : "")}; */

  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "9.63rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
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
  overflow: hidden;
  @media (max-width: 450px) {
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 5.9rem;
    background: none;
    flex-direction: column;
  }
`

export const LandingPageModuleContainer = styled.div`
  width: 70%;
  margin: 8rem auto 0;
  @media(max-width: 450px){
    width: 100%;
    margin: 2rem 0;
  }
`

export const ImageWrapper = styled.div`
  width: ${props => (props.full ? "100%" : props.horizontal ? "80%" : "")};
  position: relative;

  .play-button {
    position: absolute !important;
    left: 50%;
    top: calc(50% - 1.25rem);
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .fullscreen-button {
    position: absolute !important;
    right: 16px;
    bottom: 62px;
    // transform: translate(0%, -100%);
    cursor: pointer;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const EventContentContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: end;
  @media (max-width: 451px) {
  }
`

export const TextContainer = styled.div`
  width: ${props => (props.full ? "100%" : "50%")};
  align-self: ${props => (props.right ? "flex-end" : "")};
  float: right;
  margin-top: ${props => (props.first ? "56px" : "")};

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const TimeAndButtonWrapper = styled.div`
  width: 38%;
  @media (max-width: 450px) {
    width: 100%;
  }
`
export const HeadingAndIntroWrapper = styled.div`
  width: 58%;
  @media (max-width: 450px) {
    width: 100%;
  }
`

export const MenusModuleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`

export const MenusModuleHalfWrapper = styled.div`
  width: 49%;
  @media (max-width: 450px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`
