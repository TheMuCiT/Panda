import React from 'react'

import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'

import Section1 from '../../images/4section1.png'
import Section2 from '../../images/4section2.png'
import Section3 from '../../images/haydi1.png'
import Section4 from '../../images/haydi2.png'

import './haydi.css'

const Haydi = () => {
     const HandlerApple = () => {
          window.open('https://apps.apple.com/de/app/pandalan-hukuk-%C3%B6%C4%9Fren/id1563681531')
     }

     const HandlerGoogle = () => {
          window.open('https://play.google.com/store/apps/details?id=com.lawquizgame&hl=de&gl=US')
     }
     return (
          <div className='haydi'>
               <div className='haydiContainre'>
                    <div className='haydiLeft'>
                         <div className='haydiLeftHeader'>Haydi Sen de Aramıza Katıl ve Öğren !</div>
                         <div className='haydiLeftText'>
                              Konularına göre ayrılmış her sınıftan hukuk derslerine dair özgün pratikler sizi
                              bekliyor !
                         </div>
                         <div className='haydiLeftText bold'>Uygulamayı Edin</div>
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
                    <div className='haydiRight'>
                         <img src={Section4} alt='' className='haydiRightSection1' />
                         <img src={Section2} alt='' className='haydiRightSection2' />
                         <div className='haydiRightMobile'>
                              <img src={Section3} alt='' className='haydiRightSection3' />
                              <img src={Section4} alt='' className='haydiRightSection4' />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Haydi
