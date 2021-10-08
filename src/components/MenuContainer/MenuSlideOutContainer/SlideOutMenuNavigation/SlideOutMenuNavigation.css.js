import styled, { keyframes } from "styled-components"
export const xFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
   
   
  }
  

  100% {
    opacity: 1;
    display: flex;

  }
`
export const SlideOutMenuNavWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export const BreakLine = styled.div`
width: 100%;
height: 1px;
margin: ${props => props.none ? ' 0 0 2.65rem 0' : props.first ? '3.25rem 0 2.65rem 0' : '1.5rem 0 1.5rem 0' };
border-bottom: 1px solid grey;
@media (max-width: 450px){
    display: none;
}
`

export const MenuItem = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: ${props => props.socials ? '' : 'space-between'};
align-items: center;
margin-bottom: 1.25rem;
margin-top: ${props => props.socials ? '6rem' : ''};
cursor: pointer;
font-family: ${props => props.active === props.item ? 'bold' : 'normal'};
animation: ${xFadeIn} 500ms ease-in-out;
:nth-last-child(3){
    margin-bottom: 0;
}
:hover {
    font-family: bold;
}
`

