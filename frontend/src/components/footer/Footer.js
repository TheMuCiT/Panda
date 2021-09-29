import React from 'react'

import { ReactComponent as Panda } from '../../icons/panda.svg'
import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'

import './footer.css'

const Footer = () => {
     const HandlerApple = () => {
          window.open('https://apps.apple.com/de/app/pandalan-hukuk-%C3%B6%C4%9Fren/id1563681531')
     }

     const HandlerGoogle = () => {
          window.open('https://play.google.com/store/apps/details?id=com.lawquizgame&hl=de&gl=US')
     }
     const handlerFacebook = () => {
          window.open('https://www.facebook.com/Pandalanhukuk/photos')
     }
     const handlerInstagram = () => {
          window.open('https://www.instagram.com/pandalanhukuk/?hl=de')
     }
     const handlerYoutube = () => {
          window.open('https://www.youtube.com/channel/UCXt1_b_5JIvTfp4Pf3nNHTw/channels?view=56&shelf_id=0')
     }
     return (
          <div className='footer'>
               <div className='footerContainer'>
                    <div className='footerLeft'>
                         <div className='footerLeftIcon'>
                              <Panda />
                              <div className='footerLeftIconText'>Pandalan-hukuk</div>
                         </div>
                         <div className='footerLeftText'>Follow us with our social links</div>
                         <div className='footerLeftLinks'>
                              <div className='footerLeftLinksIcons'>
                                   <div className='footerLeftLinksIcon' onClick={HandlerApple}>
                                        <div className='footerLeftLinksIconLeft'>
                                             <Apple className='footerLeftLinksIconIcon' />
                                        </div>
                                        <div className='footerLeftLinksIconRight'>
                                             <div className='footerLeftLinksIconRightHeader'>Download on the</div>
                                             <div className='footerLeftLinksIconRightText'>App store</div>
                                        </div>
                                   </div>
                                   <div className='footerLeftLinksIcon' onClick={HandlerGoogle}>
                                        <div className='footerLeftLinksIconLeft'>
                                             <Google className='footerLeftLinksIconIcon' />
                                        </div>
                                        <div className='footerLeftLinksIconRight'>
                                             <div className='footerLeftLinksIconRightHeader'>Download on the</div>
                                             <div className='footerLeftLinksIconRightText'>Google Play</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='footerLeftC'>&copy; All Rights reserved 2021 Pandalan-hukuk</div>
                    </div>
                    <div className='footerRight'>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>Home</div>
                              <div className='footerRightLink'>BLOG</div>
                              <div className='footerRightLink'>İLETIŞIM</div>
                              <div className='footerRightLink '>EKİBİMİZ</div>
                              <div className='footerRightLink '>SSS</div>
                         </div>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>Socials</div>
                              <div className='footerRightLink' onClick={handlerFacebook}>
                                   Facebook
                              </div>
                              <div className='footerRightLink' onClick={handlerInstagram}>
                                   Instagram
                              </div>
                              <div className='footerRightLink'>Twitter</div>
                              <div className='footerRightLink' onClick={handlerYoutube}>
                                   Youtube
                              </div>
                         </div>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>Legal</div>
                              <div className='footerRightLink'>Terms</div>
                              <div className='footerRightLink'>FAQs</div>
                              <div className='footerRightLink'>Privacy & Policy</div>
                         </div>
                    </div>
                    <div className='footerLeftCMobile'>&copy; All Rights reserved 2021 Pandalan-hukuk</div>
               </div>
          </div>
     )
}

export default Footer
