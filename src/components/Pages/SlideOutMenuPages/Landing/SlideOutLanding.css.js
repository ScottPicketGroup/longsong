import styled from 'styled-components'

export const SlideOutLandingWrapper = styled.div`
width: 100%;
height: 100vh;
display: ${props => props.activePage === 1 ? 'flex' : 'none'};
justify-content: center;
align-items: center;
svg {
    transform: translateY(-3rem);
    padding-bottom: 10px;
}
`