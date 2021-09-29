import React from 'react'

import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'
import { ReactComponent as Achievement } from '../../icons/achievement.svg'
import { ReactComponent as Box } from '../../icons/Box.svg'

import Section1 from '../../images/3section1.png'

import './ogren.css'

const Ogren = () => {
     const HandlerApple = () => {
          window.open('https://apps.apple.com/de/app/pandalan-hukuk-%C3%B6%C4%9Fren/id1563681531')
     }

     const HandlerGoogle = () => {
          window.open('https://play.google.com/store/apps/details?id=com.lawquizgame&hl=de&gl=US')
     }
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
                              <div className='ogrenLeftIcon' onClick={HandlerApple}>
                                   <div className='ogrenLeftIconLeft'>
                                        <Apple className='ogrenLeftIconIcon' />
                                   </div>
                                   <div className='ogrenLeftIconRight'>
                                        <div className='ogrenLeftIconRightHeader'>Download on the</div>
                                        <div className='ogrenLeftIconRightText'>App store</div>
                                   </div>
                              </div>
                              <div className='ogrenLeftIcon' onClick={HandlerGoogle}>
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
                         <div className='test'>
                              <img src={Section1} alt='Error' className='ogrenRightIMG' />
                              <Achievement className='ogrenRightAchievement' />
                              <Box className='ogrenRightBox' />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Ogren
