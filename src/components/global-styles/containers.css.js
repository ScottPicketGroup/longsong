import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100vw;

  display: flex;

  @media (max-width: 450px) {
    width: 100%;
    flex-direction: column;
  }
`

export const PageWrapper = styled.main`
  width: 95vw;

  display: ${props => (props.flex ? "flex" : "")};
  flex-direction: ${props => (props.flex ? "row" : "")};
  @media (max-width: 450px) {
    width: 100%;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.flex ? "row" : "column")};
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
export const SectionWrapper = styled.div`
  width: ${props => (props.width ? props.width : "70%")};
  align-self: flex-end;
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
    width: 100%;
    padding: 0;
    margin-top: 0;
  }
`

export const MenuContainer = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  height: 100%;
  top: 4rem;
  left: 4rem;

  width: 25%;
`
export const MenuItem = styled.p`
  transition: all 1s ease;
  font-family: ${props =>
    props.scrollY > props.sH && props.scrollY < props.sT + props.sH
      ? "CentraNo2Medium"
      : "CentraNo2Light"};
  :first-child {
    font-family: ${props =>
      props.scrollY < props.sH ? "CentraNo2Medium" : ".1rem"};
  }
`
export const Grid = styled.div`
  width: ${props => (props.full ? "100%" : "74.5%")};
  align-self: flex-end;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${props =>
    props.insta ? props.insta : props.gridGap ? props.gridGap : "3.75rem 1rem"};

  align-items: center;
  align-items: start;
  @media (max-width: 451px) {
    grid-template-columns: ${props => `repeat(${props.colsMob}, 1fr)`};
    grid-gap: 2rem 0rem;
  }
`

export const Item = styled.div`
  display: block;
  transition: opacity 0.2s ease-out;
`

export const ItemImgLink = styled.a`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${props => (props.link ? 0.5 : 1)};
  }
`
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${props => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`

export const FullImageContainer = styled.div`
  width: 100%;
`
export const DesktopWrapper = styled.div`
  @media (max-width: 451px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  display: ${props => (props.imageControls ? " flex" : "")};
  width: ${props => (props.imageControls ? " 100%" : "")};
  justify-content: ${props => (props.imageControls ? " space-between" : "")};
  @media (min-width: 451px) {
    display: none;
  }
`
