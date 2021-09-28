import React from 'react'

import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'
import { ReactComponent as Blob } from '../../icons/blob2.svg'
import { ReactComponent as Message } from '../../icons/message.svg'
import { ReactComponent as Chat } from '../../icons/chat.svg'

import Section1 from '../../images/2section1.png'

import './hukukcularla.css'

const Hukukcularla = () => {
     return (
          <div className='hukukcularla'>
               <div className='hukukcularlaContainer'>
                    <div className='hukukcularlaLeft'>
                         <Blob className='hukukcularlaLeftBlob' />
                         <img src={Section1} alt='' className='hukukcularlaLeftIMG' />
                         <Message className='hukukcularlaLeftMessage' />
                         <Chat className='hukukcularlaLeftChat' />
                    </div>
                    <div className='hukukcularlaRight'>
                         <div className='hukukcularlaRightHeader'>Hukukçularla sohbet et !</div>
                         <div className='hukukcularlaRightText'>
                              Türkiye'nin her yerinden hukuk fakültesi öğrencileriyle sohbet et !
                         </div>
                         <div className='hukukcularlaRightText bold'> Uygulamayı Edin</div>
                         <div className='hukukcularlaRightIcons'>
                              <div className='hukukcularlaRightIcon'>
                                   <div className='hukukcularlaRightIconLeft'>
                                        <Apple />
                                   </div>
                                   <div className='hukukcularlaRightIconRight'>
                                        <div className='hukukcularlaRightIconRightHeader'>Download on the</div>
                                        <div className='hukukcularlaRightIconRightText'>App store</div>
                                   </div>
                              </div>
                              <div className='hukukcularlaRightIcon'>
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
