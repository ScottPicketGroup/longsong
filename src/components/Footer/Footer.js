import React from 'react'
import { FooterWrapper } from './Footer.css'
import FooterItems from './FooterItems/FooterItems'
import LogoSlider from './LogoSlider'

const Footer = ({menuOpen, setMenuOpen, activePage, setActivePage}) => {
    console.log(menuOpen)
    return (
        <FooterWrapper>
            <LogoSlider />
            <FooterItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage}/>
        </FooterWrapper>
    )
}

export default Footer
