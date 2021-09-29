import React, { useEffect, useState } from 'react'

import { ReactComponent as Panda } from '../../icons/panda.svg'
import { ReactComponent as Facebook } from '../../icons/FB.svg'
import { ReactComponent as Youtube } from '../../icons/YT.svg'
import { ReactComponent as LinkedIn } from '../../icons/LIN.svg'
import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as MobileMenuOpen } from '../../icons/MobileMenuOpen.svg'

import BlobPNG from '../../images/blob1.png'

import './navbar.css'

const Navbar = () => {
     const [Mobile, setMobile] = useState(false)

     const HandlerFacebook = () => {
          window.open('https://www.facebook.com/Pandalanhukuk/photos')
     }

     const HandlerYoutube = () => {
          window.open('https://www.youtube.com/channel/UCXt1_b_5JIvTfp4Pf3nNHTw/channels?view=56&shelf_id=0')
     }

     const HandlerLinked = () => {
          window.open('https://www.instagram.com/pandalanhukuk/?hl=de')
     }

     useEffect(() => {
          WindowChange()
     }, [])

     const HandleMobileMenu = () => {
          setMobile(!Mobile)
     }

     const WindowChange = () => {
          if (window.innerWidth > 700) {
               setMobile(false)
          }
     }

     if (Mobile) {
          const body = document.body
          body.style.overflowY = 'hidden'
     } else {
          const body = document.body
          body.style.overflowY = 'scroll'
     }

     window.addEventListener('resize', WindowChange)

     return (
          <div className='navbar'>
               <div className='navbarMobileButton' onClick={HandleMobileMenu}>
                    <MobileMenu className={Mobile ? 'MobileDN' : 'Mobile'} />
                    <MobileMenuOpen className={Mobile ? 'Mobile' : 'MobileDN'} />
                    <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
                         <div className='navbarMobileTop'>
                              <div className='navbarRightIcon' onClick={HandlerFacebook}>
                                   <Facebook />
                              </div>
                              <div className='navbarRightIcon' onClick={HandlerYoutube}>
                                   <Youtube />
                              </div>
                              <div className='navbarRightIcon' onClick={HandlerLinked}>
                                   <LinkedIn />
                              </div>
                         </div>
                         <div className='navbarMobileMain'>
                              <div className='navbarCenterLink'>BLOG</div>
                              <div className='navbarCenterLink'>İLETİŞİM</div>
                              <div className='navbarCenterLink'>EKİPİMİZ</div>
                              <div className='navbarCenterLink'>SSS</div>
                         </div>
                    </div>
               </div>
               <div className='navbarMobile'>
                    <div className='navbarCenterIcon'>
                         <img src={BlobPNG} alt='error' className='navbarCenterIconBlob' />
                         <Panda className='navbarCenterIconPanda' />
                    </div>
               </div>
               <div className='navbarContainer'>
                    <div className='navbarLeft'></div>
                    <div className='navbarCenter'>
                         <div className='navbarCenterLink'>BLOG</div>
                         <div className='navbarCenterLink'>İLETİŞİM</div>
                         <div className='navbarCenterIcon'>
                              <img src={BlobPNG} alt='error' className='navbarCenterIconBlob' />
                              <Panda className='navbarCenterIconPanda' />
                         </div>
                         <div className='navbarCenterLink'>EKİPİMİZ</div>
                         <div className='navbarCenterLink'>SSS</div>
                    </div>
                    <div className='navbarRight'>
                         <div className='navbarRightIcon' onClick={HandlerFacebook}>
                              <Facebook />
                         </div>
                         <div className='navbarRightIcon' onClick={HandlerYoutube}>
                              <Youtube />
                         </div>
                         <div className='navbarRightIcon' onClick={HandlerLinked}>
                              <LinkedIn />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
