import React from 'react'

import { ReactComponent as Panda } from '../../icons/panda.svg'
import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'

import './footer.css'

const Footer = () => {
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
                                   <div className='footerLeftLinksIcon'>
                                        <div className='footerLeftLinksIconLeft'>
                                             <Apple className='footerLeftLinksIconIcon' />
                                        </div>
                                        <div className='footerLeftLinksIconRight'>
                                             <div className='footerLeftLinksIconRightHeader'>Download on the</div>
                                             <div className='footerLeftLinksIconRightText'>App store</div>
                                        </div>
                                   </div>
                                   <div className='footerLeftLinksIcon'>
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
                              <div className='footerRightLink'>Favebook</div>
                              <div className='footerRightLink'>Instagram</div>
                              <div className='footerRightLink'>Twitter</div>
                              <div className='footerRightLink'>Youtube</div>
                         </div>
                         <div className='footerRightColumn'>
                              <div className='footerRightTitle'>Legal</div>
                              <div className='footerRightLink'>Terms</div>
                              <div className='footerRightLink'>FAQs</div>
                              <div className='footerRightLink'>Privacy & Policy</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer
