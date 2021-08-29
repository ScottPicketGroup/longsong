import styled from 'styled-components'

export const SlideOutPageWrapper = styled.div`
padding-right: 8%;
display: ${props => props.activePage === props.page ? 'flex' : 'none'};
flex-direction: column;

@media (max-width: 450px){
    margin-top: ${props => props.contact ? '56px' : ''};
    padding: 0;
  }
`
export const SectionWrapper = styled.div`
display: flex;
width: 100%;
flex-direction: ${props => props.column ? 'column' : 'row'};
justify-content: ${props => props.column ? '' : 'space-between'};
margin-bottom: 6rem;
:last-child {
    margin-bottom: 8.86rem;
}
@media (max-width: 450px){
    flex-direction: column;
    :first-child {
        margin-top: 56px;
        margin-bottom: 6rem;
    }
    :last-child {
        margin-bottom: 0;
    }
    margin-bottom: 6rem;
}
`
export const TextContainer = styled.div`
width: ${props => props.full ? '50%' :
props.sixty ? '60%' :
"40%"};
align-self: ${props => props.right ? 'flex-end' : ""};
float: right;
margin-top: ${props => props.first ? '56px' : ''};
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