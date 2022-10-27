import React from 'react'
import { FooterItemsWrapper, FooterWrapper } from '../Footer.css'
import FooterLinks from './FooterLinks'
import Subscribe from './Subscribe/Subscribe'

const FooterItems = ({menuOpen, setMenuOpen, activePage, setActivePage, refElement, openingTimes}) => {
    return (
        <FooterWrapper>
           <FooterItemsWrapper>
               <FooterLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage} refElement={refElement} openingTimes={openingTimes}/>
               <Subscribe />
           </FooterItemsWrapper>
        </FooterWrapper>
    )
}

export default FooterItems
