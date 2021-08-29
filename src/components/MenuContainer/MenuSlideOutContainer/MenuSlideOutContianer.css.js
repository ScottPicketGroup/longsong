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
  z-index: 2;
  height: 105%;
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
