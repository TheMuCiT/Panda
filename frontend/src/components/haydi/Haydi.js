import React from 'react'

import { ReactComponent as Google } from '../../icons/google.svg'
import { ReactComponent as Apple } from '../../icons/apple.svg'

import Section1 from '../../images/4section1.png'
import Section2 from '../../images/4section2.png'

import './haydi.css'

const Haydi = () => {
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
                    <div className='haydiRight'>
                         <img src={Section1} alt='' className='haydiRightSection1' />
                         <img src={Section2} alt='' className='haydiRightSection2' />
                    </div>
               </div>
          </div>
     )
}

export default Haydi
