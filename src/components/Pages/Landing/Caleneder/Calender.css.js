import styled from "styled-components"

export const CalanderWrapper = styled.div`
  width: 100%;
`

export const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const NavigationViewWrapper = styled.div`
  width: 6%;
  display: flex;
  justify-self: flex-start;
  align-self: flex-start;
  justify-content: space-between;
`
export const CalanderView = styled.div``

export const DayView = styled.div``

export const MonthsContainer = styled.div`
  float: right;
  width: 28%;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-gap: 0 1rem;
  @media (max-width: 450px) {
    position: sticky;
    top: 1vh;
    width: 50%;
  }
`
export const MonthItem = styled.div`
  height: 100px;
  margin-bottom: 3.32rem;

  padding-top: 1.5rem;
  padding-left: 1rem;
  :first-child {
    border-top: 8px solid #457e5c;
  }
  :first-child {
    border-top: 8px solid #457e5c;
  }
  :last-child {
    border-top: 3px solid #314638;
    align-self: flex-end;
  }
`

// days section

export const DaysWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: ${props =>
    props.cols === true ? `repeat(2, 1fr)` : `repeat(7, 1fr)`};
  grid-gap: 0 1rem;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`
export const DayContainer = styled.div`
  border-top: ${props =>
    props.day == props.date
      ? ".5px  #457E5C solid"
      : props.day < props.date
      ? ".5px #314638 solid"
      : ".5px white solid"};
  border-bottom: ${props =>
    props.day == props.date
      ? ".5px  #457E5C solid"
      : props.day < props.date
      ? ".5px #314638 solid"
      : ".5px white solid"};
  @media (max-width: 450px) {
    display: ${props => (props.day < props.date ? "none" : "flex")};
    border: 1px solid white;
    height: 346px;
    flex-direction: column;
  }
`

export const DateDisplayContainer = styled.div`
  padding-top: 1rem;
  @media (max-width: 450px) {
    width: 100%;
    border-bottom: 1px solid white;
    padding: 1rem 1rem 1rem 1rem;
  }
`

export const EventDetailsWrapper = styled.div`
display: none;
@media (max-width: 450px){

    display: flex;
    flex-direction: column;
    align-items: space-between;
}
`
export const EventListWrapper = styled.div`

@media (max-width: 450px){
    padding: 1rem;
    display: flex;
    flex-direction: column;
    
}
`
export const EventFooterWrapper = styled.div`

@media (max-width: 450px){

    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 0  1rem;
}
`

export const DayIconWrapper = styled.svg`
  fill: ${props => (props.daysView ? "#457E5C" : "#6a6a6a")};
  @media (max-width: 450px) {
    display: none;
  }
`

export const MonthIconWrapper = styled.svg`
  fill: ${props => (props.daysView ? "#6a6a6a" : "#457E5C")};
  @media (max-width: 450px) {
    display: none;
  }
`
