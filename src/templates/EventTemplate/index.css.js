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
