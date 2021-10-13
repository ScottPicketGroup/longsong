import styled, { createGlobalStyle } from "styled-components"
import normal from "../../assetts/fonts/normal.woff"
import heavy from "../../assetts/fonts/heavy.woff2"
import bold from "../../assetts/fonts/bold.woff"

export const Typography = createGlobalStyle`
  @font-face {
    font-family: 'normal';
    src: url(${normal});
    font-style: normal;
 
  }
  @font-face {
    font-family: 'heavy';
    src: url(${heavy}) ;
    format: ("woff2");

  }
  @font-face {
    font-family: 'bold';
    src: url(${bold}) ;
    format: ("woff");

  }

  a {
    color: inherit;
    text-decoration: none;
  }
 `
export const Heading1 = styled.h1`
  font-family: normal;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -1px;
  transition: color 0.2s ease;
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
    font-size: 1.5rem;
    line-height: 1.17;
    margin-bottom: 1.5rem;
  }
`

export const Heading2 = styled.h2`
  font-size: 1.44rem !important;
  line-height: 1.13;

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
    font-size: 1.25rem;

    line-height: 1.2;
  }
`

export const Heading3 = styled.h3`
  margin-left: 1rem;
  font-family: normal;
  font-weight: 100;
  font-size: 1rem;
  line-height: 1.2;
  color: ${props =>
    props.month === props.currentMonth + props.month && props.day < props.date
      ? "#6A6A6A"
      : props.dayOfWeek == "Sunday"
      ? "#6A6A6A"
      : props.month === props.currentMonth + props.month &&
        props.i === props.date - 1
      ? "#457E5C"
      : props.month === props.currentMonth + props.month &&
        props.i === props.date
      ? "#314638"
      : "white"};
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
      case "xs":
        return ".45rem"
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
    font-family: normal;
    font-size: 1rem;
  }
`

export const Number1 = styled.h3`
  margin-left: 1rem;
  letter-spacing: 3px;
  font-weight: 100;
  color: ${props =>
    props.month === props.currentMonth + props.month && props.day < props.date
      ? "#6A6A6A"
      : props.dayOfWeek == "Sunday"
      ? "#6A6A6A"
      : props.month === props.currentMonth + props.month &&
        props.i === props.date - 1
      ? "#457E5C"
      : props.month === props.currentMonth + props.month &&
        props.i === props.date
      ? "#314638"
      : "white"};

  font-size: 4.68rem;
  line-height: 0.75;
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
      case "xs":
        return ".45rem"
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
    font-family: bold;
    font-size: 5rem;
    line-height: 1;
    margin-top: 1.5rem;
  }
`

export const Month1 = styled.h3`
  font-family: normal;
  color: #457e5c;
  font-size: 2.5rem;
  line-height: 1;
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
      case "xs":
        return ".45rem"
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
    font-family: bold;
    font-size: 1.5rem;
    line-height: 1;
  }
`

export const Month2 = styled.h3`
  font-family: normal;

  color: #314638;
  font-size: 2.5rem;
  line-height: 1;
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
      case "xs":
        return ".45rem"
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
  :first-child {
    padding-top: 5px;
  }
  @media (max-width: 450px) {
    font-family: normal;
    font-size: 1.5rem;
    line-height: 1;
  }
`

export const BC1 = styled.p`
  font-size: 1.44rem !important;
  line-height: 1.13;
  letter-spacing: 10;
  font-size: 1.25rem;
  font-weight: ${props => props.bold ? '900' : '100'};
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
        return "9.63rem"
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
    font-size: 1.25rem;
    line-height: 1.2;
  }
`

export const BC2 = styled.p`
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
  }
`

export const BC3 = styled.p`
  font-family: normal;

  font-size: 1.25rem;
  color: ${props => (props.imageControls ? "#6A6A6A" : "white")};
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return "1rem"
      case "md":
        return "1.25rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "9.63rem"
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
    font-size: 1rem;
    margin-bottom: ${props => (props.imageControls ? "0" : "1.5rem")};
    line-height: 1.15;
  }
`
export const BC4 = styled.p`
  font-family: normal;

  font-size: 1.25rem;
  color: ${props => (props.imageControls ? "#6A6A6A" : "white")};
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return ".75rem"
      case "md":
        return "1.25rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "9.63rem"
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
    font-size: 1rem;
    line-height: 1.15;
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
          return "9.63rem"
        default:
          return "0"
      }
    }};
  }
`

export const SN1 = styled.p`
  font-family: CentraNo2Medium;
  line-height: 1.25;
  font-size: 1.25rem;
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
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`
export const SN2 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1rem;
  transition: all 0.2s ease;
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
  :hover {
    color: ${props => (props.hover ? "rgba(51, 51, 51, 50%)" : "")};
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`

export const MenuText = styled.p`
  font-size: 1.5em;
  line-height: 1;
  letter-spacing: 0;
`
