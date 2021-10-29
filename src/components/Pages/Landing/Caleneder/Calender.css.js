import styled, { keyframes } from "styled-components"
import { fadeIn } from "../../../global-styles/animations"
import { BC3, Heading2 } from "../../../global-styles/typography.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../global-styles/containers.css"

export const CalanderWrapper = styled.div`
  width: 100%;
  animation: ${fadeIn} 500ms ease-in-out;
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
  grid-gap: 0 10px;
  @media (max-width: 450px) {
    display: none;
  }
`

export const MenuMonthsContainer = styled(MonthsContainer)`
  @media (max-width: 451px) {
    display: flex;
    justify-content: flex-end;
    animation: ${fadeIn} 500ms ease-out;
  }
`
export const MonthItem = styled.div`
  height: 100px;
  margin-bottom: 3.32rem;
  cursor: pointer;
  padding-top: 1.5rem;
  padding-left: 1rem;
  :first-child {
    border-top: 8px solid #457e5c;
  }
  :last-child {
    border-top: 3px solid #314638;
    align-self: flex-end;
  }
`
export const MenuMonthItem = styled.div`
  @media (max-width: 451px) {
    height: 28px;
    margin-bottom: 0;
    padding: 0 1.5rem;
    animation: ${fadeIn} 500ms ease-out;
  }

  h3 {
    padding: 0 !important;
  }
`

// days section

export const DaysWrapper = styled.div`
  width: 100%;
  opacity: 1;
  display: grid;
  grid-template-columns: ${props =>
    props.cols == "true" ? `repeat(2, 1fr)` : `repeat(7, 1fr)`};
  grid-gap: ${props => (props.cols == "true" ? `1rem` : `0 1rem`)};
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`
export const DayContainer = styled.div`
  border-top: ${props =>
    props.month == props.currentMonth && props.day < props.date
      ? ".5px solid #6A6A6A"
      : props.dayOfWeek == "Sunday" ||
        props.dayOfWeek == "Tuesday" ||
        props.dayOfWeek == "Monday"
      ? ".5px solid #6A6A6A"
      : props.month == props.currentMonth && props.day == props.date
      ? ".5px solid #457E5C"
      : props.month == props.currentMonth && props.day == props.date + 1
      ? ".5px solid #314638"
      : // : props.dayOfWeek == "Sunday" ||
        //   props.dayOfWeek == "Tuesday" ||
        //   (props.dayOfWeek == "Monday" && props.day > 27)
        // ? "none"
        ".5px solid white"};

  border-bottom: ${props =>
    props.month == props.currentMonth && props.day == props.date
      ? ".5px solid #457E5C"
      : props.month == props.currentMonth && props.day == props.date + 1
      ? ".5px solid #314638"
      : props.month == props.currentMonth && props.day > props.date - 5
      ? ".5px solid #6A6A6A"
      : props.month == props.currentMonth &&
        props.dayOfWeek !== "Sunday" &&
        props.dayOfWeek !== "Tuesday" &&
        props.dayOfWeek !== "Monday" &&
        props.day > props.date - 5
      ? ".5px solid white"
      : props.month !== props.currentMonth &&
        props.dayOfWeek !== "Sunday" &&
        props.dayOfWeek !== "Tuesday" &&
        props.dayOfWeek !== "Monday" &&
        props.day > 24
      ? ".5px solid white"
      : props.month !== props.currentMonth &&
        (props.dayOfWeek == "Sunday" ||
        props.dayOfWeek == "Tuesday" ||
        props.dayOfWeek == "Monday") &&
        props.day > 24
      ? ".5px solid #6A6A6A"
      : props.currentMonth == 10 && props.day == 24
      ? ".5px solid white"
      : "none"};
  //#457E5C
  height: ${props => `${props.height - 1}px`};
  display: flex;

  flex-direction: ${props => (props.events ? "" : "column")};
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 450px) {
    display: ${props => (props.day < props.date ? "none" : "flex")};
    border: 1px solid white;
    height: 346px;
    flex-direction: column;
  }
  animation: ${fadeIn} 500ms ease-in-out;
`

export const EventDayContainer = styled(DayContainer)`
  border: 1px solid white;
`

export const EmptyDayContainer = styled(DayContainer)`
  border: none;
  height: 0;
`

export const DateDisplayContainer = styled.div`
  animation: ${fadeIn} 500ms ease-in-out;
  position: relative;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${props => `${props.height - 2}px`};
  width: ${props => `${props.height}px`};

  @media (max-width: 450px) {
    width: 100%;
    border-bottom: 1px solid white;
  }
`

export const EventsDateDisplayContainer = styled(DateDisplayContainer)`
  background: ${props =>
    props.month == props.currentMonth + props.month && props.i == props.date - 1
      ? "#457E5C"
      : props.month == props.currentMonth + props.month && props.i == props.date
      ? "#314638"
      : props.dayOfWeek == "Sunday" ||
        props.dayOfWeek == "Tuesday" ||
        props.dayOfWeek == "Monday"
      ? ""
      : ""};
  border: 0.5px solid white;
  border-top: 0;
  border-left: 0;
  color: black !important;
  flex-direction: row;

  @media (max-width: 450px) {
    height: 140px;
    border-right: none;
  }
`

export const xFadeIn = keyframes`
  0% {
transform: scale(0);
opacity: 0;
  }


25% {
opacity: 0;
  transform: scale(.4)
}
  }
 
  100% {
    transform: scale(1) 
  
opacity: 1;
      
  }
`
export const EventDetailsWrapper = styled.div`
  display: ${props => (props.open ? `flex` : `none`)};
  flex-direction: column;
  background: #314638;
  transform-origin: left top;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  position: absolute;
  z-index: 500;
  animation: ${xFadeIn} 500ms ease-in-out;
  border: 1px solid white;
  top: ${props => (props.i < 21 ? "0" : "")};
  bottom: ${props => (props.i > 21 ? "0" : "")};
  right: ${props =>
    props.i == 7 || props.i == 14 || props.i == 21 || props.i == 28 ? "0" : ``};
  overflow: hidden;
  @media (max-width: 450px) {
    display: ${props => (props.open ? `flex` : `none`)};
    flex-direction: column;
    align-items: space-between;
  }
`
export const EventListWrapper = styled.div`
  height: ${props => `${props.height}px`};

  padding: ${props =>
    props.i == 7 || props.i == 14 || props.i == 21 || props.i == 28
      ? ".1rem 0"
      : `.1rem 0`};
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props =>
    props.i == 7 || props.i == 14 || props.i == 21 || props.i == 28
      ? "flex-end"
      : ``};
  min-width: ${props => `${props.width / 5}px`};
  @media (max-width: 450px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
`
export const EventContents = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`

export const EventFooterWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 0.5rem;
  @media (max-width: 450px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
  }
`

export const EventInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
export const EventsListDetailsWrapper = styled.div`
  flex: 1;
  border-right: 1px solid white;
  display: flex;
  padding: 1rem;
  background: ${props =>
    props.month == props.currentMonth + props.month && props.i == props.date - 1
      ? "#457E5C"
      : props.month == props.currentMonth + props.month && props.i == props.date
      ? "#314638"
      : ""};
  @media (max-width: 450px) {
    margin-left: 0rem;
    border-right: none;
  }
`

export const EventsListPerformerDetailsWrapper = styled.div`
  width: 100%;
  margin-left: 2rem;
  @media (max-width: 450px) {
    margin-left: 0rem;
  }
`

export const EventsListMenusDetailsWrapper = styled.div`
  flex: 2;
`

export const EventsListDetailsViewDetailsLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  padding: 1rem;

  @media (max-width: 450px) {
    background: ${props =>
      props.month == props.currentMonth + props.month &&
      props.i == props.date - 1
        ? "#457E5C"
        : props.month == props.currentMonth + props.month &&
          props.i == props.date
        ? "#314638"
        : ""};

    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-orientation: rl;

    writing-mode: horizontal-tb;
    transform: rotate(0deg);
  }
`

export const EventHeading2 = styled(Heading2)`
  @media (max-width: 450px) {
    font-size: 1.25rem;
    line-height: 1.2;
    color: ${props =>
      props.month == props.currentMonth + props.month && props.day < props.date
        ? "#6A6A6A"
        : props.dayOfWeek == "Sunday" ||
          props.dayOfWeek == "Tuesday" ||
          props.dayOfWeek == "Monday"
        ? "#6A6A6A"
        : "white"};
  }
`
export const EventBC3 = styled(BC3)`
  color: : ${props =>
    props.month == props.currentMonth + props.month && props.day < props.date
      ? "#6A6A6A"
      : props.dayOfWeek == "Sunday" ||
        props.dayOfWeek == "Tuesday" ||
        props.dayOfWeek == "Monday"
      ? "#6A6A6A"
      : props.month == props.currentMonth + props.month &&
        props.i == props.date - 1
      ? "#457E5C"
      : props.month == props.currentMonth + props.month && props.i == props.date
      ? "#314638"
      : props.month == props.currentMonth + props.month &&
        props.i == props.date - 2
      ? "#314638"
      : "white"};
`

export const OnlyDesktopWrapper = styled(DesktopWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 450px) {
    display: none;
  }
`

export const OnlyMobileWrapper = styled(MobileWrapper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 450px) {
    display: none;
  }
`
