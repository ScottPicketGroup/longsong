import styled from "styled-components"

export const LinksWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  width: 95%;
`
export const Underline = styled.span`
  position: absolute;
  height: 10px;
  transition: width 0.2s ease-in-out;

  bottom: 25%;
  left: 0;
  border-bottom: 3px solid white;
  width: 0;
`

export const LongrainLinkWrapper = styled.div`
 
  z-index: ${props => (props.heroImage ? 1 : "auto")};
 
  /* right: 30px; */

  font-size: 40px;
  transition: transform 0.2s ease-in-out;
  transition-delay: 50ms;
  @media (max-width: 450px) {
    display: none;
  }
  :hover {
    transform: scale(1.05);
  }
  &:hover ${Underline} {
    width: 100%;
  }
`
