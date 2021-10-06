import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
export const SliderContainer = styled.div`
  width: 100%;
  background-color: #f9f9f4;
  z-index: 100;
`

export const ControlsContainer = styled.div`
  display: flex;
`
export const ControlButton = styled.div`
  display: inline;
  cursor: pointer;
  margin-left: 0.5rem;
  :first-child {
    margin-right: 0.5rem;
    margin-left: 0;
  }
`

export const SliderImage = styled(GatsbyImage)`
  display: ${props =>
    props.activeimg === props.id ? "block" : "none"} !important;
`
