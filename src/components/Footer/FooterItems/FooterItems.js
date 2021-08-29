import React from 'react'
import { FooterItemsWrapper, FooterWrapper } from '../Footer.css'
import FooterLinks from './FooterLinks'
import Subscribe from './Subscribe/Subscribe'

const FooterItems = ({menuOpen, setMenuOpen, activePage, setActivePage}) => {
    return (
        <FooterWrapper>
           <FooterItemsWrapper>
               <FooterLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} activePage={activePage} setActivePage={setActivePage}/>
               <Subscribe />
           </FooterItemsWrapper>
        </FooterWrapper>
    )
}

export default FooterItems
