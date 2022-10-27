import React from 'react'
import { FooterWrapper } from './Footer.css'
import FooterItems from './FooterItems/FooterItems'
import LogoSliderNew from './FooterItems/LogoSlider/LogoSlider'
import LogoSlider from './LogoSlider'

const Footer = ({menuOpen, setMenuOpen, activePage, setActivePage, refElement, openingTimes}) => {

    return (
        <FooterWrapper>
            <LogoSliderNew />
            <FooterItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage} refElement={refElement} openingTimes={openingTimes}/>
        </FooterWrapper>
    )
}

export default Footer
