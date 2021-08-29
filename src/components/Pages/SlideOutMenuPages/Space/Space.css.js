import styled from 'styled-components'

export const SlideOutPageWrapper = styled.div`
padding-right: 8%;
display: ${props => props.activePage === props.page ? 'flex' : 'none'};
flex-direction: column;
@media (max-width: 450px){
    padding: 0;
  }
`
export const SectionWrapper = styled.div`
display: flex;
width: 100%;
flex-direction: ${props => props.column ? 'column' : 'row'};
justify-content: ${props => props.column ? '' : 'space-between'};
@media (max-width: 450px){
    flex-direction: column;
    :first-child {
        margin-top: 56px;
    }
    :last-child {
        margin-bottom: 0;
    }
    margin-bottom: 96px 0;
}
`
export const TextContainer = styled.div`
width: ${props => props.full ? '50%' :
props.sixty ? '60%' :
"40%"};
align-self: ${props => props.right ? 'flex-end' : ""};
float: right;
@media (max-width: 450px){
    width: 100%;
}
`

export const ImageWrapper = styled.div`
width: ${props => props.full ? '100%' : props.horizontal ? '80%' : '50%'};
@media (max-width: 450px){
    width: 100%;
}
`