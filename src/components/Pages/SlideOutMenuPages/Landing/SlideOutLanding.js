import React from 'react'
import SlideOutLandingIcon from '../../../MenuContainer/Icons/SlideOutLandingIcon'
import { SlideOutLandingWrapper } from './SlideOutLanding.css'

const SlideOutLanding = ({activePage}) => {
    return (
        <SlideOutLandingWrapper activePage={activePage} pageNum={1}>
          <SlideOutLandingIcon/>

        </SlideOutLandingWrapper>
    )
}

export default SlideOutLanding
