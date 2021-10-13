import styled from "styled-components"
import { Number1 } from "../../components/global-styles/typography.css"

export const EventHeroContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 451px) {
    margin-top: 0;
    flex-direction: column-reverse;
  }
`
export const EventContentContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  @media (max-width: 451px) {
  }
`
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 3rem;
max-width: 30%;
`
export const DateWrapper = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 28px 0;
  width: 350px;
  margin-bottom: 28px;
  @media (max-width: 451px) {
    border-top: none;
    width: 100%;
  }
`
export const Time = styled(Number1)`
  margin-top: 96px;
  font-family: normal;
  color: #fff;
  line-height: 65px;
  @media (max-width: 451px) {
  }
`
export const ButtonWrapper = styled.div`
  button {
    width: 100%;
    margin-bottom: 28px;
    padding: 12px 20px;
  }
  @media (max-width: 451px) {
    display: none;
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
    bottom: 16px;
    // transform: translate(0%, -100%);
    cursor: pointer;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`
