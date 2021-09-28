import React from 'react'

import { ReactComponent as Blob } from '../../icons/blob.svg'
import { ReactComponent as Panda } from '../../icons/panda.svg'
import { ReactComponent as Facebook } from '../../icons/FB.svg'
import { ReactComponent as Youtube } from '../../icons/YT.svg'
import { ReactComponent as LinkedIn } from '../../icons/LIN.svg'

import './navbar.css'

const Navbar = () => {
     return (
          <div className='navbar'>
               <div className='navbarContainer'>
                    <div className='navbarLeft'></div>
                    <div className='navbarCenter'>
                         <div className='navbarCenterLink'>BLOG</div>
                         <div className='navbarCenterLink'>İLETİŞİM</div>
                         <div className='navbarCenterIcon'>
                              <Blob className='navbarCenterIconBlob' />
                              <Panda className='navbarCenterIconPanda' />
                         </div>
                         <div className='navbarCenterLink'>EKİPİMİZ</div>
                         <div className='navbarCenterLink'>SSS</div>
                    </div>
                    <div className='navbarRight'>
                         <div className='navbarRightIcon'>
                              <Facebook />
                         </div>
                         <div className='navbarRightIcon'>
                              <Youtube />
                         </div>
                         <div className='navbarRightIcon'>
                              <LinkedIn />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
