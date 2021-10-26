import styled, { keyframes } from "styled-components"

export const xFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
   
   
  }
  80% {
    display: none;
    opacity: 0;
   
   
  }
  85% {
    opacity: 1;
    display: flex;

  }
  100% {
      
  }
`

export const MenuSlideOutWrapper = styled.div`
  overflow-y: hidden;
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 100vh;
  flex-direction: row;
  width: ${props => (props.menuOpen ? "100%" : "0")};
  background: #2b3c31;
  transition: width 1s ease-in-out;
  overflow-y: scroll;
`

export const SlideOutSideBarWrapper = styled.div`
  width: 5%;
  min-height: 100vh;
  transition: border-right 10s ease;
  transition-delay: 0.5s;
  border-right: ${props => (props.menuOpen ? "1px solid white" : "none")};
  margin-left: ${props => (props.menuOpen ? "0" : "-100vw")};

  padding: 2.25rem 20px;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    min-height: 3.75rem;
    max-height: 3.75rem;
    border-right: none;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    position: sticky;
    top: 0;
    background: #2b3c31;
    z-index: 1000;
  }
`
export const MenuXWrapper = styled.svg`
  width: ${props => (props.menuOpen ? "25" : "0")};
`

export const PageContentContainer = styled.div`
  width: 78%;
  @media (max-width: 450px) {
    width: 100%;
  }
`

export const PageContentWrapper = styled.div`
  padding-right: ${props => (props.right ? "7%" : 0)};
`

export const RightMenuContainer = styled.div`
  width: 22%;
  @media (max-width: 450px) {
    height: 100vh;
    display: flex;
    margin-top: 56px;
    width: 100%;
    display: ${props => (props.activePage > 1 ? "none" : "100%")};
  }
`

export const WhatsOnCalendarContainer = styled.div`
  display: ${props => (props.activePage === props.page ? "flex" : "none")};
  padding: 2.25rem 6% 0 3%;

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
