import React from 'react'

import Section1 from '../../images/section1.png'
import Section2 from '../../images/section2.png'
import BlobPNG from '../../images/blob.png'

import { isIOS, isSafari } from 'react-device-detect'

import './merhaba.css'

const Merhaba = () => {
     const Handlerbutton = () => {
          if (isIOS || isSafari) {
               window.open('https://apps.apple.com/de/app/pandalan-hukuk-%C3%B6%C4%9Fren/id1563681531')
          } else {
               window.open('https://play.google.com/store/apps/details?id=com.lawquizgame&hl=de&gl=US')
          }
     }
     return (
          <div className='merhaba'>
               <div className='merhabaContainer'>
                    <div className='merhabaLeft'>
                         <div className='merhabaLeftHeader'>
                              <div className='merhabaLeftText slideFirst'>Merhaba,</div>
                              <div className='merhabaLeftText color slideSecond'>Pandalan Hukuk'a </div>
                              <div className='merhabaLeftText slideThird'>hoşgeldiniz!</div>
                         </div>
                         <div className='merhabaLeftMiddle slideFourth'>
                              Solicitude uncommonly use her motionless not collecting age. The properly servants
                              required mistaken outlived bed and.
                         </div>
                         <div className='merhabaLeftButton fadeButton' onClick={Handlerbutton}>
                              Hemen Indir
                         </div>
                    </div>
                    <div className='merhabaRight'>
                         <div className='merhabaRightContainre'>
                              <div className='merhabaRightBackground fadeBackground'>
                                   <img src={BlobPNG} alt='error' className='merhabaRightBackgroundPNG' />
                              </div>
                              <div className='merhabaRightImageSecond animationFirst fadeIMG'>
                                   <img src={Section2} alt='' className='merhabaRightImageSecondIMG' />
                              </div>
                              <div className='merhabaRightImageFirst animationFirst fadeIMG2'>
                                   <img src={Section1} alt='' className='merhabaRightImageFirstIMG' />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Merhaba
