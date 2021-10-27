import styled from "styled-components"


export const Underline = styled.span`
position: absolute;
height: 10px;
transition: width .2s ease-in-out;

bottom: 25%;
left: 0;
border-bottom: 3px solid white;
width: 0;
`

export const LongrainLinkWrapper = styled.div`
  position: absolute;
  z-index: ${props => props.heroImage ? 1 : "auto"};
  top: 30px;
  right: 30px;
  font-size: 40px;
  transition: transform .2s ease-in-out;
  transition-delay: 50ms;
  @media (max-width: 450px) {
    display: none;
  }
 :hover {
  transform: scale(1.05)
 }
  &:hover ${Underline} {
    width: 100%;
    
  }
`

