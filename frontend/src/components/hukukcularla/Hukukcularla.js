import React from 'react'

import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'
import { ReactComponent as Blob } from '../../icons/blob2.svg'
import { ReactComponent as Message } from '../../icons/message.svg'
import { ReactComponent as Chat } from '../../icons/chat.svg'

import Section1 from '../../images/2section1.png'

import './hukukcularla.css'

const Hukukcularla = () => {
     const HandlerApple = () => {
          window.open('https://apps.apple.com/de/app/pandalan-hukuk-%C3%B6%C4%9Fren/id1563681531')
     }

     const HandlerGoogle = () => {
          window.open('https://play.google.com/store/apps/details?id=com.lawquizgame&hl=de&gl=US')
     }

     return (
          <div className='hukukcularla'>
               <div className='hukukcularlaContainer'>
                    <div className='hukukcularlaLeft'>
                         <div className='test'>
                              <Blob className='hukukcularlaLeftBlob' />
                              <img src={Section1} alt='' className='hukukcularlaLeftIMG' />
                              <Message className='hukukcularlaLeftMessage' />
                              <Chat className='hukukcularlaLeftChat' />
                         </div>
                    </div>
                    <div className='hukukcularlaRight'>
                         <div className='hukukcularlaRightHeader'>Hukukçularla sohbet et !</div>
                         <div className='hukukcularlaRightText'>
                              Türkiye'nin her yerinden hukuk fakültesi öğrencileriyle sohbet et !
                         </div>
                         <div className='hukukcularlaRightText bold'> Uygulamayı Edin</div>
                         <div className='hukukcularlaRightIcons'>
                              <div className='hukukcularlaRightIcon' onClick={HandlerApple}>
                                   <div className='hukukcularlaRightIconLeft'>
                                        <Apple />
                                   </div>
                                   <div className='hukukcularlaRightIconRight'>
                                        <div className='hukukcularlaRightIconRightHeader'>Download on the</div>
                                        <div className='hukukcularlaRightIconRightText'>App store</div>
                                   </div>
                              </div>
                              <div className='hukukcularlaRightIcon' onClick={HandlerGoogle}>
                                   <div className='hukukcularlaRightIconLeft'>
                                        <Google />
                                   </div>
                                   <div className='hukukcularlaRightIconRight'>
                                        <div className='hukukcularlaRightIconRightHeader'>Download on the</div>
                                        <div className='hukukcularlaRightIconRightText'>Google Play</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Hukukcularla
