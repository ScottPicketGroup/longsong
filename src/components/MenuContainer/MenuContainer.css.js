import styled from "styled-components"

export const MenuWrapper = styled.div`
  width: 5vw;
  min-height: 100vh;
  border-right: white solid 1px;
  display: flex;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 100%;
    min-height: 3.5rem;
    z-index: 1000;
    border-right: none;
    position: sticky;
    top: 0;
  }
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
  border-bottom: 1px solid white;
  padding: 2.25rem 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: #231f20;
  position: sticky;
  top: 0rem;
  @media (max-width: 451px) {
    flex-direction: row;
    padding: 1rem;
    height: inherit;
    position: sticky;
    top: 0;
  }
`

export const EventsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  height: 35vh;
  position: sticky;
  top: 65vh;
  @media (max-width: 451px) {
    display: none;
  }
`

export const DesktopMenuIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 451px) {
    display: none;
  }
`

export const MobileMenuIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 451px) {
    display: none;
  }
`
