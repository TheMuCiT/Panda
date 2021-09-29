import React from 'react'

import Section1 from '../../images/section1.png'
import Section2 from '../../images/section2.png'
import BlobPNG from '../../images/blob.png'

import './merhaba.css'

const Merhaba = () => {
     return (
          <div className='merhaba'>
               <div className='merhabaContainer'>
                    <div className='merhabaLeft'>
                         <div className='merhabaLeftHeader'>
                              <div className='merhabaLeftText'>Merhaba,</div>
                              <div className='merhabaLeftText color'>Pandalan Hukuk'a </div>
                              <div className='merhabaLeftText'>hoşgeldiniz!</div>
                         </div>
                         <div className='merhabaLeftMiddle'>
                              Solicitude uncommonly use her motionless not collecting age. The properly servants
                              required mistaken outlived bed and.
                         </div>
                         <div className='merhabaLeftButton'>Hemen Indir</div>
                    </div>
                    <div className='merhabaRight'>
                         <div className='merhabaRightContainre'>
                              <div className='merhabaRightBackground'>
                                   <img src={BlobPNG} alt='error' className='merhabaRightBackgroundPNG' />
                              </div>
                              <div className='merhabaRightImageSecond'>
                                   <img src={Section2} alt='' className='merhabaRightImageSecondIMG' />
                              </div>
                              <div className='merhabaRightImageFirst'>
                                   <img src={Section1} alt='' className='merhabaRightImageFirstIMG' />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Merhaba
