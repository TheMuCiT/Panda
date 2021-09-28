import React from 'react'

import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'
import { ReactComponent as Achievement } from '../../icons/achievement.svg'
import { ReactComponent as Box } from '../../icons/Box.svg'

import Section1 from '../../images/3section1.png'

import './ogren.css'

const Ogren = () => {
     return (
          <div className='ogren'>
               <div className='ogrenContainer'>
                    <div className='ogrenLeft'>
                         <div className='ogrenLeftHeader'>Öğren ve Kendini Test Et !</div>
                         <div className='ogrenLeftText'>
                              Derslere ve konularına göre ayrılmış özgün pratik sorularıyla hem sınavlarına çalış
                              hem de kendini test et !
                         </div>
                         <div className='ogrenLeftText bold'>Uygulamayı Edin</div>
                         <div className='ogrenLeftIcons'>
                              <div className='ogrenLeftIcon'>
                                   <div className='ogrenLeftIconLeft'>
                                        <Apple className='ogrenLeftIconIcon' />
                                   </div>
                                   <div className='ogrenLeftIconRight'>
                                        <div className='ogrenLeftIconRightHeader'>Download on the</div>
                                        <div className='ogrenLeftIconRightText'>App store</div>
                                   </div>
                              </div>
                              <div className='ogrenLeftIcon'>
                                   <div className='ogrenLeftIconLeft'>
                                        <Google className='ogrenLeftIconIcon' />
                                   </div>
                                   <div className='ogrenLeftIconRight'>
                                        <div className='ogrenLeftIconRightHeader'>Download on the</div>
                                        <div className='ogrenLeftIconRightText'>Google Play</div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='ogrenRight'>
                         <img src={Section1} alt='Error' className='ogrenRightIMG' />
                         <Achievement className='ogrenRightAchievement' />
                         <Box className='ogrenRightBox' />
                    </div>
               </div>
          </div>
     )
}

export default Ogren
