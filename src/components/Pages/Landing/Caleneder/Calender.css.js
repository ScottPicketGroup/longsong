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
    props.cols === "true" ? `repeat(2, 1fr)` : `repeat(7, 1fr)`};
  grid-gap: 0 1rem;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`
export const DayContainer = styled.div`
border-top: ${props =>
  props.day < props.date
    ? ".5px solid #6A6A6A"
    :     props.day === props.date
    ? "1px solid #457E5C" :
    props.day === props.date + 1 
    ? ".5px solid #314638" :
    props.day === props.date +8 
    ? ".5px solid #314638" :
    props.day > props.date && props.day < props.date + 7 
    ? ".5px solid #6A6A6A" 
    : props.day === props.date + 7 ?
    "1px solid #457E5C" 
    : props.i === 9 || props.i === 16 || props.i === 23 || props.i === 30 
    ? "#6A6A6A.5px solid" 
    : ".5px solid white"};
   
    border-bottom: ${props => 
      props.i === 9 || props.i === 16 || props.i === 23 || props.i === 30
    ? "none" : 
      props.i > 23 ? '1px solid white'  
    : 
    'none'};
//#457E5C
    height: ${props => `${props.height - 1}px`};
      display: flex;
      flex-direction: column;
      justify-content: space-between;

  @media (max-width: 450px) {
    display: ${props => (props.day < props.date ? "none" : "flex")};
    border: 1px solid white;
    height: 346px;
    flex-direction: column;
  }
`

export const DateDisplayContainer = styled.div`
position: relative;
  padding: .5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 450px) {
    width: 100%;
    border-bottom: 1px solid white;
    padding: 1rem 1rem 1rem 1rem;
  }
`

export const EventDetailsWrapper = styled.div`
display: ${props => props.open ? `flex` : `none`};
background: #314638;
transition: width 1s ease-in-out;
height: ${props => `${props.height}px`};
min-width: ${props => `${props.width}px`};
position: absolute;
z-index: 500;
top: ${props => props.i < 21 ? '0' : ''};
bottom: ${props => props.i > 21 ? '0' : ''};
right: ${props => props.i === 7 || props.i === 14 || props.i === 21 || props.i === 28 ? '0' : ``};
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
